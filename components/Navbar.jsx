"use client";

import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets"; // Pastikan path benar
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk(); // Perbaikan nama fungsi

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="Logo"
        width={128}
        height={40}
        priority
      />

      {/* Menu Navigasi (Desktop) */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Menu Aksi (Desktop) */}
      <ul className="hidden md:flex items-center gap-4">
        <Image
          className="w-4 h-4"
          src={assets.search_icon}
          alt="Search icon"
          width={16}
          height={16}
        />
        {
          user
            ? <>
              <UserButton >

                <UserButton.MenuItems>
                  <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push("/")} />
                </UserButton.MenuItems>

                <UserButton.MenuItems>
                  <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={() => router.push("/all-products")} />
                </UserButton.MenuItems>

                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
                </UserButton.MenuItems>

                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
                </UserButton.MenuItems>

              </UserButton>
            </>
            : <button
              onClick={openSignIn} // Perbaikan pemanggilan fungsi
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Image
                src={assets.user_icon}
                alt="User icon"
                width={20}
                height={20}
              />
              Account
            </button>
        }
      </ul>

      {/* Menu Aksi (Mobile) */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        {
          user
            ? <>
              <UserButton >

                <UserButton.MenuItems>
                  <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push("/")} />
                </UserButton.MenuItems>

                <UserButton.MenuItems>
                  <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={() => router.push("/all-products")} />
                </UserButton.MenuItems>

                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
                </UserButton.MenuItems>

                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
                </UserButton.MenuItems>

              </UserButton>
            </>
            : <button
              onClick={openSignIn} // Perbaikan pemanggilan fungsi
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Image
                src={assets.user_icon}
                alt="User icon"
                width={20}
                height={20}
              />
              Account
            </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
