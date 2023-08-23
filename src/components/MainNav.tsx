import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/Logo';
import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex justify-between py-4 pt-8 container">
      <Link href="/"><Logo /></Link>
      <div className="flex items-center gap-2">
        <Link href={"/blog"}><Button variant="link">blog</Button></Link>
        <a href="mailto:nwpointer@gmail.com"><Button variant="link">contact</Button></a>
        <ModeToggle />
      </div>
    </div>
  );
}
