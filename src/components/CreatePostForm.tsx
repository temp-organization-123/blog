"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "./ui/textarea";
import { revalidatePathServerAction } from "~/server/actions";
import type { Post } from "@prisma/client";

type CreatePostFormProps = {
  post?: Post;
};

export function CreatePostForm({ post }: CreatePostFormProps) {
  const router = useRouter();
  const { user } = useUser();

  const formSchema = z.object({
    title: z.string().min(1, "Your post has no title"),
    content: z.string().min(1, "Your post has no content"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const createPostForm = api.post.create.useMutation({
    onSuccess: async () => {
      // Clear the cache of the frontpage next time it's visited
      void revalidatePathServerAction("/");

      // Redirect to the front page
      router.push("/");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  const isPosting = createPostForm.isLoading;

  console.log("post:", post)

  if (!user) return null;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          const { title, content } = values;
          createPostForm.mutate({ title, content, userId: user.id });
        })}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          disabled={isPosting}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {post ? (
                  <Input
                    placeholder="Title"
                    defaultValue={"Yo"}
                    className="h-16 text-2xl"
                    {...field}
                  />
                ) : (
                  <Input
                    placeholder="Title"
                    className="h-16 text-2xl"
                    {...field}
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          disabled={isPosting}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {post ? (
                  <Textarea
                    placeholder="Content"
                    defaultValue="Hi"
                    {...field}
                  />
                ) : (
                  <Textarea placeholder="Content" {...field} />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-full px-10 py-3 font-semibold"
          disabled={isPosting}
        >
          {isPosting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
