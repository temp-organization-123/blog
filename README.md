# Blog

### Live
At https://blog-indol-alpha-35.vercel.app/

### Installation
First, you should be a part of the Vercel organization, so you
have access to the environment variables. \
Here is an invite link: https://vercel.com/teams/invite/dwQELr84Lc2uojoAxtssFXGXOlIuDjWQ

You will need git, docker and the Vercel CLI.

```bash
# Get code and dependencies
git clone git@github.com:temp-organization-123/blog.git
cd blog
npm install
```

##### Connect to Vercel Project
Run

```bash
vercel link
```

to link your folder to project on Vercel.
Choose the following values when prompted

```bash
Vercel CLI 33.5.3
? Set up “~/path/to/blog”? [Y/n] y
? Which scope should contain your project? temp-organization-123
? Found project “temp-organization-123/blog”. Link to it? [Y/n] y
✅  Linked to temp-organization-123/blog (created .vercel)
```

Now you are able to safely get our environment variables for
the development environment, as specified in the settings of our
Vercel project

```bash
vercel env pull .env
```

### Run the application
```bash
# Start the postgres container in detached mode.
# Requires sudo unless docker is installed in rootless mode.
sudo ./start-database.sh

# Apply Prisma migrations
npm run db:push

# Run the application
npm run dev
```

### View data
If you want to view and interact with your local data from postgres, prisma provides
a web GUI you can open with
```
npm run db:studio
```

*Auto-generated by create-t3-app:*
# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
