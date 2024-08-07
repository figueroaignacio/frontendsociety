"use client";

// Hooks
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// Components
import { LinkWithTransition } from "../link-with-transition";
import { Logo } from "../logo";
import { Settings } from "../settings";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <header className="flex items-center justify-between gap-12 sticky z-50 top-0 left-0 py-2 px-5 md:px-10 lg:px-16 backdrop-blur-sm mx-auto border-b-[.0625rem]">
      <div className="flex items-center gap-12">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex gap-12 items-center">
            {navigation.map((navItem: any, index: number) => (
              <li key={index}>
                <LinkWithTransition
                  href={navItem.href}
                  className={`${
                    pathname === `${navItem.href}`
                      ? "font-bold text-black dark:text-white border-b-[1px] border-black transition-all duration-500 dark:border-white"
                      : ""
                  } text-base text-muted-foreground hover:text-black dark:hover:text-white font-medium`}
                >
                  {navItem.title}
                </LinkWithTransition>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 items-center">
        <Settings />
        <MobileMenu />
      </div>
    </header>
  );
}
