"use client";

import { useState } from "react";
import Container from "./elements/Container";
import Gallery from "./Gallery";
import Image from "next/image";

import IconCart from "@/assets/svg/icon-cart.svg";

export default function SectionHero() {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <Container>
        <section className="my-8 flex items-center flex-wrap">
          <div className="grid-6">
            <Gallery />
          </div>

          <div className="grid-6">
            <div>
              <p className="uppercase font-semibold text-neutral-dark-blue">
                Sneaker Company
              </p>
              <h1 className="text-5xl font-bold mt-3 mb-6 text-neutral-dark-blue">
                Fall Limited Edition Sneakers
              </h1>
              <p className="text-neutral-dark-blue">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
            </div>

            <div>
              <div className="flex gap-4 mt-8">
                <span className="text-2xl font-bold text-neutral-dark-blue">
                  $125,00
                </span>
                <span className="bg-neutral-dark-blue text-white font-semibold rounded-lg flex items-center px-2">
                  50%
                </span>
              </div>

              <span className="text-gray-500 font-semibold line-through mt-1">
                $250,00
              </span>
            </div>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center text-center gap-6 bg-neutral-light-graysh-blue p-2 rounded-md">
                <button
                  onClick={() => {
                    if (value > 0) {
                      setValue(value - 1);
                    }
                  }}
                >
                  <span className="font-bold text-primary-orange text-2xl">
                    -
                  </span>
                </button>
                <span className="font-bold text-neutral-dark">{value}</span>
                <button
                  onClick={() => {
                    setValue(value + 1);
                  }}
                >
                  <span className="font-bold text-primary-orange text-2xl">
                    +
                  </span>
                </button>
              </div>

              <div className="bg-primary-orange flex items-center py-2 px-12 rounded-md">
                <button className="flex items-center gap-4">
                  <Image src={IconCart} alt="cart" />
                  <span className="font-bold text-neutral-dark">
                    Add to cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
