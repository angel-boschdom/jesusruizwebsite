import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const biographyContent = [
  {
    text: 'Jesús Ruiz nace en Valdepeñas (Ciudad Real). Desde 2011 es organista titular de la basílica de Jesús de Medinaceli de Madrid. Actualmente es profesor de órgano en el Conservatorio Profesional de Música Arturo Soria de Madrid y profesor en la Escuela Provincial de Órgano de Palencia Fray Domingo de Aguirre (E.P.O.P). Regularmente ofrece recitales por toda la geografía española y participa en los ciclos y festivales más importantes de España.',
    image: "https://images.unsplash.com/photo-1533414765079-4bb015a31395",
  },
  {
    text: 'Comienza sus estudios musicales en su ciudad natal continuándolos en el Conservatorio Profesional de Música Marcos Redondo de Ciudad Real obteniendo el titulo profesional en la especialidad de Piano. Así mismo estudia la especialidad de Musicología en el Real Conservatorio Superior de Música de Madrid. Posteriormente estudia órgano en el Conservatorio Superior de Música de Aragón con la profesora Saskia Rures y en el Centro Superior Katarina Gurska (CSK) de Madrid obteniendo el título superior en la especialidad de Órgano. Ha trabajado la música en los Cursos Universitarios Internacionales "Música en Compostela" donde obtiene el premio Andrés Segovia- J.M. Ruiz Morales. De igual modo participó como alumno activo en la Academia de Órgano de Andalucía estudiando la música española con el profesor Andrés Cea Galán.',
    image: "https://images.unsplash.com/photo-1502788686946-ef89b02935cf",
  },
  {
    text: 'Jesús Ruiz es un músico comprometido con la conservación y la recuperación del patrimonio. Por esta razón funda la Asociación Amigos del Órgano de Valdepeñas. Esta asociación tiene, entre otros objetivos, fomentar la música, la formación y el estudio de la música escrita para órgano, así como la restauración y la construcción de nuevos instrumentos que permitan el conocimiento de esta disciplina. Ha dirigido proyectos musicales como el Festival Internacional de Órgano y Música Barroca de Vicálvaro, ha sido organista titular de la Catedral de Getafe cuyo órgano inauguró en 2011 y es autor de varios artículos de investigación.',
    image: "https://images.unsplash.com/photo-1603058824144-081b3981a429",
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
            <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
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
