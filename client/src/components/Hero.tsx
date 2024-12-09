import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative h-[75vh] md:h-[70vh] overflow-hidden bg-gray-800 flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden">
        <video
          src="https://angel-boschdom.github.io/jesusruizorganista-media/assets/hero.mp4"
          poster="https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.png"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 md:space-y-8 p-6 md:p-8 bg-black/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
        <h1 className="font-cormorant text-6xl font-bold text-white">
          JESÚS RUIZ
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Organista titular de la basílica de Jesús de Medinaceli
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Button 1: Saber más sobre mí */}
          <Link href="/biografia">
            <Button size="lg" variant="default" className="bg-primary text-primary-foreground">
              Saber más sobre mí
            </Button>
          </Link>

          {/* Button 2: Próximos Eventos */}
          <Link href="/eventos/2024">
            <Button
              size="lg"
              variant="outline"
              className="text-secondary-foreground border-secondary bg-black/30 hover:bg-secondary hover:text-secondary-foreground"
            >
              Próximos Eventos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}