import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const biographyContent = [
  {
    text: "Jesús Ruiz nació en Valdepeñas (Ciudad Real) y es reconocido por su destacada trayectoria como organista, musicólogo y promotor de la música sacra. Desde 2011, es el organista titular del Gran órgano Rieger de la Basílica de Jesús de Medinaceli en Madrid, donde su interpretación ha enriquecido profundamente las celebraciones litúrgicas y culturales.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/jesusorganofondo.jpg",
  },
  {
    text: "Comenzó sus estudios musicales en su ciudad natal, continuándolos en el Conservatorio Profesional de Música Marcos Redondo de Ciudad Real, donde obtuvo el título profesional en la especialidad de piano. Posteriormente, estudió Musicología en el Real Conservatorio Superior de Música de Madrid y órgano en el Conservatorio Superior de Música de Aragón y el Centro Superior Katarina Gurska (CSK) de Madrid, logrando el título superior. Además, fue profesor de órgano en el Conservatorio Arturo Soria de Madrid. Su formación incluye estudios con reconocidos maestros como Jean-Claude Zehnder, Ton Koopman y Andrés Cea Galán.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/jesusbnfuente.jpg",
  },
  {
    text: "Jesús Ruiz es un músico comprometido con la conservación y la recuperación del patrimonio musical. Fundó la Asociación Amigos del Órgano de Valdepeñas para fomentar la música de órgano, la restauración de instrumentos históricos y la construcción de nuevos órganos. Además, ha dirigido proyectos como el Festival Internacional de Órgano y Música Barroca de Vicálvaro, ha sido organista titular de la Catedral de Getafe, y es autor de diversos artículos de investigación. Su labor como intérprete lo ha llevado a participar en los ciclos y festivales más importantes de España.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organojesus1.jpg",
  },
];

export default function Biography() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 px-4">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Biografía
      </h1>

      {biographyContent.map((section, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col gap-8",
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          )}
        >
          <div className="flex-1">
            <p className="text-lg leading-relaxed">{section.text}</p>
          </div>

          <div className="flex-1">
            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
              <img
                src={section.image}
                alt="Jesús Ruiz"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
}