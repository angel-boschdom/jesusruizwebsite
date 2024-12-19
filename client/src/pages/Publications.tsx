import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 px-4">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Publicaciones
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="text-lg leading-relaxed">
            "A Xabier Arana y Esteban Elizondo con mi agradecimiento. Final de Guridi. Una pista sobre su datación en la basílica de H.H. Capuchinos de Jesús de Medinaceli de Madrid. Jesús Guridi Bidaola (1886-1961) es un de los mayores exponentes de la música de mediados del siglo XX y un referente de este período en lo que se refiere a la producción musical para órgano."
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Para más información, consulte el documento completo en formato PDF.
          </p>

          <Button
            asChild
            className="mt-6"
          >
            <a
              href="https://angel-boschdom.github.io/jesusruizorganista-media/assets/publicacionFinalGuridi.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer Publicación
            </a>
          </Button>
        </div>

        <div className="flex-1">
          <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
            <img
              src="https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.png"
              alt="Jesús Ruiz con órgano"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}