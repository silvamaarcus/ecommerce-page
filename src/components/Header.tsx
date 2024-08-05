"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";
import IconCart from "@/assets/svg/icon-cart.svg";
import Avatar from "./elements/Avatar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="container mx-auto flex items-center justify-between border-b-2 border-b-neutral-light-graysh-blue m-4 py-4 hidden md:flex">
        <div className="flex items-center justify-center gap-12">
          <Link href="/">
            <Image src={Logo} alt="sneackers" />
          </Link>

          <ul className="flex gap-8">
            <li>
              <Link href="/collections">Collections</Link>
            </li>
            <li>
              <Link href="/men">Men</Link>
            </li>
            <li>
              <Link href="/women">Women</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-10">
          <Image src={IconCart} alt="Icon cart" />
          <Avatar />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="container mx-auto flex items-center justify-between border-b-2 border-b-neutral-light-graysh-blue m-4 py-4 md:hidden pl-8">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="flex items-center gap-10">
          <Image src={IconCart} alt="Icon cart" />
          <Avatar />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden">
          <div className="w-1/2 h-full bg-white relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              <li>
                <Link href="/collections">Collections</Link>
              </li>
              <li>
                <Link href="/men">Men</Link>
              </li>
              <li>
                <Link href="/women">Women</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
