import Link from "next/link";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex h-16 items-center justify-between px-48 py-2">
      <Link href="/">
        <Logo />
      </Link>
      <div>
        <NavBar />
      </div>
    </div>
  );
}
