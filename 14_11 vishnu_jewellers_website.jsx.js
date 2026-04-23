import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function VishnuJewellers() {
  const showroom = [
    "/images/shop-front.jpg", // outside showroom
    "/images/jewel1.jpg",
    "/images/jewel2.jpg",
    "/images/jewel3.jpg",
  ];

  const collections = [
    { name: "Bridal Sets", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed" },
    { name: "Gold Chains", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638" },
    { name: "Bangles", img: "https://images.unsplash.com/photo-1622445275576-721325763afe" },
    { name: "Earrings", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f" },
    { name: "Diamond Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e" },
    { name: "Mangalsutra", img: "https://images.unsplash.com/photo-1627293509201-28f9f1c42a13" },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-yellow-500/20">
        <h1 className="text-2xl font-bold text-yellow-400">VISHNU JEWELLERS</h1>
        <Button className="border border-yellow-400 text-yellow-400">Visit Store</Button>
      </div>

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center px-10">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="https://cdn.coverr.co/videos/coverr-luxury-jewelry-showcase-5174/1080p.mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-5xl font-bold text-yellow-400">VISHNU JEWELLERS</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Timeless Gold, Elegant Diamonds, Trusted Since Years
          </p>
          <div className="mt-6 flex gap-4">
            <Button className="bg-yellow-500 text-black">Explore Collection</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* SHOWROOM GRID (LIKE IMAGE) */}
      <section className="py-16 px-6">
        <h2 className="text-center text-3xl text-yellow-400 mb-10">OUR SHOWROOM</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src={showroom[0]} className="rounded-xl" />

          <div className="md:row-span-2">
            <img src="/images/jewel-main.jpg" className="rounded-xl h-full object-cover" />
          </div>

          <img src={showroom[1]} className="rounded-xl" />
          <img src={showroom[2]} className="rounded-xl" />
          <img src={showroom[3]} className="rounded-xl" />
        </div>
      </section>

      {/* COLLECTION */}
      <section className="py-16 px-6">
        <h2 className="text-center text-3xl text-yellow-400 mb-10">OUR COLLECTION</h2>

        <div className="grid md:grid-cols-6 gap-4">
          {collections.map((item, i) => (
            <div key={i} className="bg-gray-900 rounded-xl overflow-hidden">
              <img src={item.img} className="h-40 w-full object-cover" />
              <p className="text-center py-2 text-yellow-300">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-center text-3xl text-yellow-400 mb-10">WHY CHOOSE US</h2>

        <div className="grid md:grid-cols-6 text-center gap-4">
          {["BIS Gold","Certified","Trusted","Bridal","Custom","Repair"].map((item,i)=>(
            <div key={i} className="p-4 border border-yellow-500/20 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl text-yellow-400">Visit Our Store</h2>
          <p className="text-gray-400 mt-2">Mahidharpura, Surat</p>
        </div>

        <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
          <Button className="bg-green-500 text-black px-6 py-3">Chat on WhatsApp</Button>
        </a>
      </section>

      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        © 2026 Vishnu Jewellers
      </footer>

    </div>
  );
}
