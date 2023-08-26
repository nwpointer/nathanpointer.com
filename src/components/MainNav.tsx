import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/Logo';
import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex justify-between py-4 pt-8 container">
      <Link href="/"><Logo /></Link>
      <div className="flex items-center">
        <Link className="hover:underline px-2 md:px-4 text-sm md:text-md py-2" href={"/blog"}>blog</Link>
        <a className="hover:underline px-2 md:px-4 text-sm md:text-md py-2 mr-2 md:mr-4 md:text-md" href="mailto:nwpointer@gmail.com">contact</a>
        <ModeToggle />
      </div>
    </div>
  );
}
