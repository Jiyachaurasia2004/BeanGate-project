import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon, Logo } from "@/components/icons";
import { PhoneCallIcon } from "lucide-react";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="py-2">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <ul className="hidden md:flex md:gap-3 lg:gap-10 md:justify-start lg:justify-between">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary lg:data-[active=true]:font-semibold md:text-sm lg:text-base font-semibold "
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <NavbarItem className="hidden sm:flex">
          <ThemeSwitch />
        </NavbarItem> */}
        <NextLink href="/contact">
          <NavbarItem className="hidden sm:flex gap-2">
            <Button className="bg-[#ff6200] md:w-fit lg:w-full">
              <PhoneCallIcon className="text-white w-10 h-5" />
              <span className="hidden sm:inline-block text-white">
                Contact Us
              </span>
            </Button>
          </NavbarItem>
        </NextLink>

         <NextLink href="/client">
          <NavbarItem className="hidden sm:flex gap-2">
            <Button className="bg-[#ff6200] md:w-fit lg:w-full">
              <PhoneCallIcon className="text-white w-10 h-5" />
              <span className="hidden sm:inline-block text-white">
                Become a Client
              </span>
            </Button>
          </NavbarItem>
        </NextLink>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary lg:data-[active=true]:font-medium md:text-sm lg:text-base font-semibold"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
          <NextLink href="/contact">
            <Button className="bg-[#ff6200] w-fit md:w-fit lg:w-full text-start sm:hidden text-white flex items-center justify-start gap-0">
              Contact Us <PhoneCallIcon className="text-white w-10 h-5" />
            </Button>
          </NextLink>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
