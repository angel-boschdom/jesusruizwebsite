import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import VideoPlayer from "@/components/VideoPlayer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <VideoPlayer
            src="/path/to/organ-video.mp4"
            poster="https://images.unsplash.com/photo-1613941854763-c237d27c45d3"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center space-y-8 p-8 bg-black/50 rounded-lg backdrop-blur-sm">
          <h1 className="font-cormorant text-6xl font-bold">
            JESÚS RUIZ
          </h1>
          <p className="text-xl max-w-2xl">
            Organista titular de la basílica de Jesús de Medinaceli
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/biografia">
              <Button size="lg" variant="default">
                Saber más sobre mí
              </Button>
            </Link>
            <Link href="/proyectos">
              <Button size="lg" variant="outline">
                Mis proyectos
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown className="w-8 h-8 animate-bounce-slow" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto px-4">
        <h2 className="font-cormorant text-4xl font-bold text-center mb-8">
          Contacto
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
