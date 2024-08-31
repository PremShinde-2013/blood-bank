"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
// import Link from 'next/link';
import clsx from "clsx";
import { PopOver } from "./popover";

// Import your custom logo image
import logoImage from "@/public/logo.png"; // Adjust the path based on your project structure

export const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { href: "/blood-stock-availability", label: "Blood Stock" },
    
    // Add more navigation items as needed
  ];

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* className="bg-[#9b030c]" */}
      <div className="flex w-full justify-between items-center">
        {/* Logo on the left */}
        <NavbarBrand as="div" className="flex items-center gap-3">
          <NextLink href="/" className="flex items-center gap-2 m-4">
            <img
              src={logoImage.src}
              alt="Blood Donation Logo"
              className="h-20 w-auto m-2"
            />
            <p className="font-bold text-red-600">Blood Donation</p>
          </NextLink>
        </NavbarBrand>

        {/* Navigation links on the right */}
        <NavbarContent className="hidden lg:flex gap-4">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium p-4 hover:text-red-400"
              )}
              href="/"
            >
              Home
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`text-black hover:text-red-500 ml-4 transition-colors ${
                    pathname === item.href ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </NavbarItem>

          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium ml-4 hover:text-red-400"
              )}
              href="/contact"
            >
              Blood Bank Login
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        {/* Donate Now button on the far right */}
        <NavbarContent className="ml-4">
          <NavbarItem>
            {/* <Button
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100 p-4 hover:bg-red-200"
              href="/donate"
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Donate Now
            </Button> */}
            <PopOver />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile menu toggle - Visible on mobile screens only */}
        <NavbarMenuToggle className="lg:hidden" />
      </div>

      {/* Mobile Menu */}
      <NavbarMenu className="lg:hidden">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link href="/" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/about" size="lg">
              Looking for Blood
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/donate" size="lg">
              Donate Blood
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/contact" size="lg" color="danger">
              Blood Bank Login
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
