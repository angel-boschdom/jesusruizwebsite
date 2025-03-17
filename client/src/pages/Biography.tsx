import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const biographyContent = [
  {
    text: "Jesús Ruiz comienza sus estudios musicales en su ciudad natal continuándolos en el Conservatorio Profesional de Música Marcos Redondo de Ciudad Real obteniendo el título profesional en la especialidad de Piano. Así mismo estudia la especialidad de Musicología en el Real Conservatorio Superior de Música de Madrid. Posteriormente, estudia órgano en el Conservatorio Superior de Música de Aragón con la profesora Saskia Rures y en el Centro Superior Katarina Gurska (CSK) de Madrid, obteniendo el título superior en la especialidad de Órgano.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/jesusorganofondo.jpg",
  },
  {
    text: "Ha trabajado la música en los Cursos Universitarios Internacionales “Música en Compostela”, donde obtiene el premio Andrés Segovia- J.M. Ruiz Morales. De igual modo, participó como alumno activo en la Academia de Órgano de Andalucía, estudiando la música española con el profesor Andrés Cea Galán. Asiste regularmente a cursos de perfeccionamiento, trabajando la interpretación con Jean-Claude Zehnder, Edoardo Bellotti (interpretación e improvisación), Jon Lauvik, Jesús Martín Moro, Wolfgang Zerer, François Espinasse, Antonio Duarte, Pier Damiano Peretti, Andreas Arand, Brett Leigthon, Pieter Van Dick, Roland Dopfer, Ton Koopman, entre otros. Además, ofrece recitales por toda la geografía española y participa en los ciclos y festivales más importantes de España.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/jesusbnfuente.jpg",
  },
  {
    text: "Jesús Ruiz es un músico comprometido con la conservación y la recuperación del patrimonio. Por esta razón, funda la Asociación Amigos del Órgano de Valdepeñas, cuyo objetivo es fomentar la música, la formación y el estudio de la música escrita para órgano, así como la restauración y la construcción de nuevos instrumentos que permitan el conocimiento de esta disciplina. Ha dirigido proyectos musicales como el Festival Internacional de Órgano y Música Barroca de Vicálvaro, ha sido organista titular de la Catedral de Getafe (organo inaugurado en 2011) y es autor de varios artículos de investigación. Como docente, ha sido profesor del C.P.M. Arturo Soria de Madrid y de la Escuela Provincial de Órgano de Palencia Fray Domingo de Aguirre.",
    image: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organojesus1.jpg",
  },
];

export default function Biography() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 px-4">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Biografía
      </h1>

      {biographyContent.map((section, index) => {
        // Choose an aspect ratio based on index: first item => 4:3, others => 3:4
        const aspectRatio = index === 0 ? (4 / 3) : (3 / 4);

        return (
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
              <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-lg">
                <img
                  src={section.image}
                  alt="Jesús Ruiz"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
            </div>
          </div>
        );
      })}
    </div>
  );
}