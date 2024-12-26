"use client";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "@/public/images/slide-1.png";
import slide2 from "@/public/images/slide-2.png";
import Image from "next/image";

export default function Home() {
  const categories = [
    {
      imageUrl: "/images/dining.png",
      title: "Dining",
    },
    {
      imageUrl: "/images/living.png",
      title: "Living",
    },
    {
      imageUrl: "/images/bedroom.png",
      title: "Bedroom",
    },
  ];

  const products = [
    {
      imageUrl: "/images/products/Lolito.png",
      title: "Respira",
      slug: "respira",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: null,
      newArrival: true,
    },
    {
      imageUrl: "/images/products/Lev.png",
      title: "Leviosa",
      slug: "leviosa",
      subTitle: "Outdoor bar table and stool",
      salePrice: "7.00",
      price: "14.00",
      discount: "50",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/bed.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.500",
      price: "3.500",
      discount: "30",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/Syltherine.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.500",
      price: "3.500",
      discount: null,
      newArrival: true,
    },
    {
      imageUrl: "/images/products/Lolito.png",
      title: "Respira",
      slug: "respira",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: null,
      newArrival: true,
    },
    {
      imageUrl: "/images/products/Lev.png",
      title: "Leviosa",
      slug: "leviosa",
      subTitle: "Outdoor bar table and stool",
      salePrice: "7.00",
      price: "14.00",
      discount: "50",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/bed.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: "30",
      newArrival: false,
    },
    {
      imageUrl: "/images/products/Syltherine.png",
      title: "Syltherine",
      slug: "syltherine",
      subTitle: "Stylish cafe chair",
      salePrice: "2.50",
      price: "3.50",
      discount: null,
      newArrival: true,
    },
  ];

  const slides = [
    { imageUrl: slide1, href: "#" },
    { imageUrl: slide2, href: "#" },
    { imageUrl: slide1, href: "#" },
    { imageUrl: slide2, href: "#" },
  ];

  return (
    <div>
      <Hero />

      <section className="py-14">
        <div className="wrapper">
          {/* Section Title */}
          <h2 className="title">Browse The Range</h2>

          {/* Description Text */}
          <p className="text-text-light text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Categories Grid */}
          <div className="grid sm:grid-cols-3 gap-3 mt-14">
            {/* Rendering Category Cards */}
            {categories.map((category) => (
              <CategoryCard key={category.imageUrl} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-14">
        <div className="wrapper">
          {/* Section Title */}
          <header>
            <h2 className="title">Our Products</h2>
          </header>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
            {products.map((p) => (
              <ProductCard key={p.imageUrl} product={p} />
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="bg-white border border-primary text-primary text-center py-3 px-20 text-base font-semibold hover:bg-secondary"
            >
              Show More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-11">
        <div className="wrapper flex items-center">
          <div className="lg:w-4/12 w-full">
            <h3 className="font-bold lg:text-[40px] text-3xl mb-2">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="font-medium text-base text-[#616161] mb-8">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link
              href="/shop"
              className="bg-primary   border border-primary text-white text-center py-3 px-10 text-base font-semibold hover:bg-black transition-all"
            >
              Explore More
            </Link>
          </div>
          <div className="lg:w-8/12 lg:block hidden">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              spaceBetween={24}
              slidesPerView={2}
              loop={true}
              navigation={true}
              centeredSlides={true}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {slides.map((slide) => {
                return (
                  <SwiperSlide key={slide.href}>
                    <Link href={slide.href}>
                      <Image
                        src={slide.imageUrl}
                        alt="Slide"
                        width="372"
                        height="486"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div>
          <p className="text-text-light text-xl text-center font-semibold">
            Share your setup with
          </p>
          <h2 className="title">#FuniroFurniture</h2>

          <div className="md:grid grid-cols-2 md:grid-cols-5 gap-4 hidden">
            {/* First Grid Item */}
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-1.png"
                  alt=""
                  width={78}
                  height={382}
                />
              </div>
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-2.png"
                  alt=""
                  width={185}
                  height={323}
                />
              </div>
            </div>

            {/* Second Grid Item */}
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-3.png"
                  alt=""
                  width={451}
                  height={312}
                />
              </div>
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-4.png"
                  alt=""
                  width={344}
                  height={242}
                />
              </div>
            </div>

            {/* Third Grid Item (with row span) */}
            <div className="grid gap-4 row-span-2">
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-5.png"
                  alt=""
                  width={295}
                  height={392}
                />
              </div>
            </div>

            {/* Fourth Grid Item */}
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-6.png"
                  alt=""
                  width={290}
                  height={348}
                />
              </div>
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-7.png"
                  alt=""
                  width={178}
                  height={242}
                />
              </div>
            </div>

            {/* Fifth Grid Item */}
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-8.png"
                  alt=""
                  width={262}
                  height={433}
                />
              </div>
              <div className="flex justify-between items-center">
                <Image
                  className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                  src="/images/gallery-9.png"
                  alt=""
                  width={258}
                  height={196}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {/* Row 1 */}
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-1.png"
                alt=""
                width={78}
                height={382}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-2.png"
                alt=""
                width={185}
                height={323}
              />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-3.png"
                alt=""
                width={451}
                height={312}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-4.png"
                alt=""
                width={344}
                height={242}
              />
            </div>

            {/* Row 3 */}
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-5.png"
                alt=""
                width={295}
                height={392}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-6.png"
                alt=""
                width={290}
                height={348}
              />
            </div>

            {/* Row 4 */}
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-7.png"
                alt=""
                width={178}
                height={242}
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="object-contain max-w-full rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                src="/images/gallery-8.png"
                alt=""
                width={262}
                height={433}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
