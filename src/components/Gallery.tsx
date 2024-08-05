// Indicar ao Next.js que SOMENTE esse componente deve ser renderizado no lado do cliente.
"use client";

// Lib - Next
import Image from "next/image";
import { StaticImageData } from "next/image";

// Hooks - React
import { useState } from "react";

// Imagens
import ImageProduct_1 from "@/assets/img/image-product-1.jpg";
import ImageProduct_2 from "@/assets/img/image-product-2.jpg";
import ImageProduct_3 from "@/assets/img/image-product-3.jpg";
import ImageProduct_4 from "@/assets/img/image-product-4.jpg";

// Icons
import IconNext from "@/assets/svg/icon-next.svg";
import IconPrev from "@/assets/svg/icon-prev.svg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(ImageProduct_1);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const images = [
    ImageProduct_1,
    ImageProduct_2,
    ImageProduct_3,
    ImageProduct_4,
  ];

  return (
    <>
      <div>
        <div className="w-full">
          <Image
            src={selectedImage}
            alt="selected image"
            className="rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className="flex gap-8 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`product ${index + 1}`}
                className="rounded-md cursor-pointer"
              />
              {selectedImage === image && (
                <div className="absolute inset-0 bg-white opacity-50 rounded-md"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative p-4 rounded-md">
            <button
              className="absolute top-0 right-0 text-primary-orange font-bold text-3xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className="flex items-center justify-between">
              <button onClick={handlePrev} className="mx-2">
                <Image
                  src={IconPrev}
                  alt="next"
                  className="bg-white p-2 rounded-full"
                  width={24}
                  height={24}
                />
              </button>
              <Image
                src={images[currentIndex]}
                alt={`image ${currentIndex + 1}`}
                className="rounded-md"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "80vh",
                }}
              />
              <button onClick={handleNext} className="mx-2">
                <Image
                  src={IconNext}
                  alt="next"
                  className="bg-white p-2 rounded-full"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer ${
                    currentIndex === index
                      ? "border-2 border-primary-orange"
                      : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Image
                    src={image}
                    alt={`thumbnail ${index + 1}`}
                    className="rounded-md"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
