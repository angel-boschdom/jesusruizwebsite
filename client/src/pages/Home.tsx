import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero"; 

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero component */}
      <Hero />

      {/* Arrow Down - placed after Hero */}
      <div className="flex justify-center">
        <ArrowDown
          className="w-8 h-8 animate-bounce-slow cursor-pointer"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        />
      </div>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-2xl mx-auto px-4 -mt-8 md:-mt-16">
        <h2 className="font-cormorant text-4xl font-bold text-center mb-8">
          Contacto
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}