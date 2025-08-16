"use client";

import { useEffect, useState } from "react";
import { Card } from "@heroui/card";

const clients = [
  { name: "Andrei", quote: "Sunt mulțumit" },
  { name: "Maria", quote: "Pot recomanda" },
  { name: "Ioana", quote: "Foarte bine" },
  { name: "Gabriel", quote: "Servicii excelente" },
  { name: "Elena", quote: "Recomand tuturor" },
  { name: "Mihai", quote: "Foarte satisfăcut" },
  { name: "Ana", quote: "Super serviciu" },
  { name: "Cristian", quote: "Foarte mulțumit" },
  { name: "Simona", quote: "Recomand cu încredere" },
  { name: "Bogdan", quote: "Servicii impecabile" },
  { name: "Alina", quote: "Sunt încântată" },
  { name: "Radu", quote: "Foarte recomandați" },
];

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Despre{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Noi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem mândrii să colaborăm cu lideri de industrie, proprietari
            satisfăcuți și administrații de blocuri
          </p>
        </div>

        {/* Animated logo carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {clients.concat(clients).map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <Card className="w-48 h-32 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="h-full flex flex-col items-center justify-center p-6">
                      <span className="text-sm font-semibold text-gray-800 text-center">
                        {client.name}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        {client.quote}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Companii servite</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
            <div className="text-gray-600">Clienți satisfăcuți</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-gray-600">Proprietăți curățate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5 32 0M.5 0v32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
