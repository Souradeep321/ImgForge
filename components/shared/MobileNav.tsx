"use client"

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <header className="fixed flex h-16 w-full items-center justify-between border-b-4 border-purple-100 bg-white p-5 lg:hidden">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="overflow-hidden rounded-md p-0 shadow-lg sm:w-64">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={152}
                height={23}
                className="p-5"
              />

              <ul className="mt-8 flex w-full flex-col items-start gap-5">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname

                  return (
                    <li
                      className={`${isActive ? 'bg-purple-400 bg-cover bg-clip-text text-transparent' : 'text-gray-700'} whitespace-nowrap`}
                      key={link.route}
                    >
                      <Link
                        className="flex items-center gap-4 p-4 cursor-pointer"
                        href={link.route}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        <span className="font-semibold text-[18px] leading-[140%]">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button
            asChild
            className="flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-purple-400 bg-cover"
          >
            <Link href="/sign-in">
              <Image
                src="/assets/icons/profile.svg"
                alt="login"
                width={20}
                height={20}
                className="brightness-200"
              />
              <span className="font-semibold text-[16px] leading-[140%] text-white">
                Login
              </span>
            </Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav