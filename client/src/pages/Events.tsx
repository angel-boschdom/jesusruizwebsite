import { useParams } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import EventCard from "@/components/EventCard";

// Sample events data - in production this would come from a CMS
const eventsData = {
  "2024": [
    {
      name: "Concierto de Órgano - Música Barroca",
      date: "15 de Marzo, 2024",
      time: "20:00",
      description: "Interpretación de obras maestras del barroco en el órgano histórico de la Basílica de Jesús de Medinaceli.",
      location: {
        name: "Basílica de Jesús de Medinaceli",
        address: "Plaza de Jesús, 2, 28014 Madrid",
        coordinates: {
          lat: 40.4127,
          lng: -3.6961
        }
      }
    },
    {
      name: "Festival Internacional de Órgano",
      date: "20 de Abril, 2024",
      time: "19:30",
      description: "Participación especial en el Festival Internacional de Órgano con un programa dedicado a compositores españoles.",
      location: {
        name: "Catedral de Getafe",
        address: "Plaza de la Magdalena, s/n, 28901 Getafe",
        coordinates: {
          lat: 40.3049,
          lng: -3.7325
        }
      }
    }
  ],
  "2023": [
    {
      name: "Recital de Navidad",
      date: "22 de Diciembre, 2023",
      time: "20:00",
      description: "Concierto especial de Navidad con obras tradicionales y clásicas adaptadas para órgano.",
      location: {
        name: "Basílica de Jesús de Medinaceli",
        address: "Plaza de Jesús, 2, 28014 Madrid",
        coordinates: {
          lat: 40.4127,
          lng: -3.6961
        }
      }
    }
  ]
};

export default function Events() {
  const { year = "2024" } = useParams<{ year: string }>();
  const events = eventsData[year as keyof typeof eventsData] || [];

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Eventos {year}
      </h1>

      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="space-y-4 pr-4">
          {events.length > 0 ? (
            events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No hay eventos programados para este año.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
