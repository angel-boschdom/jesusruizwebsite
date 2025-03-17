import { useParams } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import ConcertCard from "@/components/ConcertCard";
import LocationInfo from "@/components/LocationInfo";

const concertsData = {
  "2024": [
    {
      artistName: "Concierto Inaugural y Solemne Bendición",
      date: "Sábado 23 de noviembre",
      time: "20:30",
    },
    {
      artistName: "Thomas Ospital",
      artistTitle: "Profesor de órgano del Conservatorio Nacional de París, Organista de Saint Eustache",
      date: "Sábado 30 de noviembre",
      time: "12:30",
    },
    {
      artistName: "Johannes Skudlik",
      date: "Miércoles 4 de diciembre",
      time: "20:30",
    },
    {
      artistName: "Ensemble Quadrivium con Jesús Ruiz",
      artistTitle: "Música de Navidad",
      date: "Sábado 14 de diciembre",
      time: "20:30",
    },
    {
      artistName: "Álvaro González",
      artistTitle: "Organista de la Catedral de Sevilla",
      date: "Sábado 21 de diciembre",
      time: "20:30",
    },
    {
      artistName: "Pablo Márquez",
      artistTitle: "Organista de la Catedral de Valencia y catedrático de clave en Castellón",
      date: "Sábado 28 de diciembre",
      time: "12:30",
    },
  ],
  "2025": [],
};

export default function Ciclo() {
  const { year = "2024" } = useParams<{ year: string }>();
  const events = concertsData[year as keyof typeof concertsData] || [];

  // Reverse the events so that the oldest are at the bottom
  const sortedEvents = [...events].reverse();

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Ciclo de Órgano - {year}
      </h1>

      {/* Ubicación antes de la lista de conciertos */}
      <LocationInfo
        name="Basílica de Jesús de Medinaceli"
        address="Plaza de Jesús, 2, 28014 Madrid"
        lat={40.4142196}
        lng={-3.6955393}
      />

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="space-y-4 pr-4">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event, index) => (
              <ConcertCard key={index} {...event} />
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No hay conciertos del ciclo de órgano programados para este año.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}