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
      <div className="relative z-8 text-center space-y-6 md:space-y-8 p-6 md:p-8 bg-black/50 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
        <h1 className="font-cormorant text-6xl font-bold text-white">
          JESÚS RUIZ
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Organista titular de la basílica de Jesús de Medinaceli
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Button 1: Saber más sobre mí */}
          <Link href="/biografia">
            <Button
              size="lg"
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300"
            >
              Saber más sobre mí
            </Button>
          </Link>

          {/* Button 2: Próximos Eventos */}
          <Link href="/agenda/2025">
            <Button
              size="lg"
              variant="default"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300"
            >
              Próximos Eventos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}