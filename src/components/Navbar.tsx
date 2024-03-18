"use client";

//import type { UserProps } from "@/types/user";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Lock, LogIn } from "lucide-react";
//import { UserAccountNav } from "./UserAccountNav";

//import { useSession } from "next-auth/react";

/* type Props = {
  user: UserProps | null;
}; */

export default function Navbar() {
  //const { data: session } = useSession();

  return (
    <header className="container z-40">
      <div className="flex h-16 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link
            className="flex flex-row items-center justify-center space-x-2"
            href="/"
          >
            <Lock className="size-6" />
            <div className="space-x-px flex flex-row">
              <span className="hidden text-lg font-bold sm:inline-block">
                Lockers
              </span>
              <div className="hidden sm:flex w-8 items-start justify-start">
                <span className="font-bold text-muted-foreground text-xs">
                  udp
                </span>
              </div>
            </div>
          </Link>
        </div>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4, gap-2 hidden"
          )}
        >
          <LogIn className="h-4 w-4" />
          Login
        </Link>
      </div>
    </header>
  );
}
