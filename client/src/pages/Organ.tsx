import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const organContent = [
  {
    title: "Un Desafío de Restauración y Creación",
    text: "El Gran Órgano Sinfónico de la Basílica de Jesús de Medinaceli se erige como una obra maestra que combina la restauración y la innovación. El proyecto, liderado por la prestigiosa empresa Rieger-Orgelbau, buscó fusionar objetivos aparentemente opuestos: preservar la esencia histórica del órgano mientras se le añadían características modernas. Este esfuerzo ha dado lugar a un instrumento único con un carácter profundamente personal.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/EberleQuote1.jpg",
  },
  {
    title: "Un Diseño Impactante",
    text: "Uno de los aspectos más llamativos del órgano es su nueva fachada. Según Wendelin Eberle, Director General de Rieger-Orgelbau, el equipo restauró y giró las cajas para que su lado más espléndido ahora sea visible. Este detalle, aunque sencillo, logra un impacto visual impresionante, destacando la majestuosidad del instrumento.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/EberleQuote2.jpg",
  },
  {
    title: "Tradición e Innovación",
    text: "Más de 24,000 horas de trabajo se invirtieron en este proyecto monumental. Cada detalle técnico y estético del órgano fue diseñado para inspirar tanto a los intérpretes como a los oyentes. El resultado es un instrumento que combina lo mejor de la tradición con los avances modernos, llenando la basílica de una atmósfera sublime.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/EberleQuote3.jpg",
  },
  {
    title: "Un Legado Sonoro",
    text: "El órgano no solo es una obra de arte técnica, sino también un vehículo para transmitir emociones y espiritualidad. Como comenta Wendelin Eberle, su encantador sonido deleita, edifica y consuela a los fieles, asegurando que seguirá resonando para la gloria de Dios en los años venideros.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/EberleQuote4.jpg",
  },
];

export default function Organ() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 px-4">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Gran Órgano Sinfónico
      </h1>
      <h2 className="text-center text-xl font-light">
        Basílica de Jesús de Medinaceli
      </h2>

      <div className="text-center my-8">
        <img
          src="https://angel-boschdom.github.io/jesusruizorganista-media/assets/LogoMedinaceli.png"
          alt="Logo del Órgano"
          className="mx-auto max-w-xs"
        />
        <p className="text-sm font-light mt-2">Diseño por Rodrigo Hernández</p>
      </div>

      {organContent.map((section, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col gap-8",
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
            <p className="text-lg leading-relaxed">{section.text}</p>
          </div>

          <div className="flex-1">
            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
              <img
                src={section.image}
                alt="Órgano"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
}