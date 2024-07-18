"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/registry/new-york/ui/button";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

export function SiteHeader() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 shadow backdrop-blur">
      <div className="flex h-14 items-center px-2">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            className="size-6 object-contain"
            width={30}
            height={30}
            alt="Logo image"
          />
        </Link>
        
        <MainNav />
        
        <MobileNav />
        
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <ModeToggle />

          {/* Conditional rendering based on authentication status */}
          {userId == null ? (
            <Link href="/sign-in" className="flex h-8 justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Sign In
             
            </Link>
          ) : (
            <UserButton afterSignOutUrl="/sign-in" />
          )}
        </div>
      </div>
    </header>
  );
}
