import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/jesus.ruizgarcia.3785",
    icon: Facebook,
  },
  {
    name: "Instagram - Personal",
    url: "https://www.instagram.com/jesusruizorg",
    icon: Instagram,
  },
  {
    name: "Instagram - Órgano Medinaceli",
    url: "https://www.instagram.com/organomedinaceli",
    icon: Instagram,
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-16">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Contacto
      </h1>

      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-cormorant text-3xl font-semibold mb-4">
              Redes Sociales
            </h2>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-cormorant text-3xl font-semibold mb-4">
              Ubicación
            </h2>
            <p className="text-muted-foreground">
              Basílica de Jesús de Medinaceli<br />
              Plaza de Jesús, 2<br />
              28014 Madrid
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-cormorant text-3xl font-semibold mb-4">
            Envíame un mensaje
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
