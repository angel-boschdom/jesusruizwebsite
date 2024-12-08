import { useParams } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import EventCard from "@/components/EventCard";

const eventsData = {
  "2023": [
    {
      name: "XVI Ciclo de Órgano de San Ginés",
      date: "27 de Marzo, 2023",
      time: "18:30",
      description: "Concierto de órgano en la Real Parroquia de San Ginés.",
      location: {
        name: "Real Parroquia de San Ginés",
        address: "Calle Arenal, 13, 28013 Madrid",
        coordinates: {
          lat: 40.41713,
          lng: -3.70691
        }
      }
    },
    {
      name: "Taller de Improvisación para instrumentos de tecla (Órgano)",
      date: "14 de Abril, 2023",
      time: "19:00 - 20:30",
      description: "Taller para músicos interesados en la improvisación en instrumentos de tecla.",
      location: {
        name: "Conservatorio Profesional de Música Arturo Soria",
        address: "Calle de Arturo Soria, 140, 28043 Madrid",
        coordinates: {
          lat: 40.45177,
          lng: -3.65204
        }
      }
    },
    {
      name: "Recital de Órgano",
      date: "17 de Junio, 2023",
      time: "21:00",
      description: "Recital en el Santuario de Valladolid con obras clásicas.",
      location: {
        name: "Basílica Nacional de la Gran Promesa",
        address: "Calle Alonso Pesquera, 10, 47002 Valladolid",
        coordinates: {
          lat: 41.6545,
          lng: -4.7237
        }
      }
    },
    {
      name: "Concierto de Órgano",
      date: "26 de Agosto, 2023",
      time: "21:00",
      description: "Concierto con obras de compositores clásicos de órgano.",
      location: {
        name: "Iglesia Parroquial Nuestra Señora de los Olmos",
        address: "Torre de Juan Abad, Ciudad Real",
        coordinates: {
          lat: 38.5833,
          lng: -3.1333
        }
      }
    }
  ],
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
          lat: 40.4140,
          lng: -3.6980
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
          lat: 40.3039,
          lng: -3.7292
        }
      }
    },
    {
      name: "Concierto: Lucie Záková & Jesús Ruiz",
      date: "3 de Agosto, 2024",
      time: "20:00",
      description: "Concierto de órgano con la participación de Lucie Záková y Jesús Ruiz.",
      location: {
        name: "Basílica Arciprestal de Santa María la Mayor de Morella",
        address: "Carrer de l'Església, s/n, 12300 Morella, Castellón",
        coordinates: {
          lat: 40.6189,
          lng: -0.1002
        }
      }
    },
    {
      name: "Concierto de Órgano",
      date: "24 de Agosto, 2024",
      time: "21:00",
      description: "Concierto de órgano en la Iglesia Parroquial de Nuestra Señora de los Olmos.",
      location: {
        name: "Iglesia Parroquial de Nuestra Señora de los Olmos",
        address: "Torre de Juan Abad (Ciudad Real)",
        coordinates: {
          lat: 38.5843,
          lng: -3.0590
        }
      }
    },
    {
      name: "Bendición e Inauguración del Gran Órgano Sinfónico Rieger",
      date: "23 de Noviembre, 2024",
      time: "20:30",
      description: "Solemne bendición y concierto inaugural del Gran Órgano Sinfónico Rieger en la Basílica de Jesús de Medinaceli.",
      location: {
        name: "Basílica de Jesús de Medinaceli",
        address: "Plaza de Jesús, 2, 28014 Madrid",
        coordinates: {
          lat: 40.4140,
          lng: -3.6980
        }
      }
    },
    {
      name: "Misa Solemne: Jesucristo Rey del Universo",
      date: "24 de Noviembre, 2024",
      time: "13:00",
      description: "Solemnidad de Jesucristo Rey del Universo con Coro Dulcimer/Ensemble Quadrivium, Víctor Nájera (director).",
      location: {
        name: "Basílica de Jesús de Medinaceli",
        address: "Plaza de Jesús, 2, 28014 Madrid",
        coordinates: {
          lat: 40.4140,
          lng: -3.6980
        }
      }
    },
    {
      name: "Ensemble Quadrivium & Jesús Ruiz",
      date: "14 de Diciembre, 2024",
      time: "20:30",
      description: "Concierto con Ensemble Quadrivium y Jesús Ruiz.",
      location: {
        name: "Basílica de Jesús de Medinaceli",
        address: "Plaza de Jesús, 2, 28014 Madrid",
        coordinates: {
          lat: 40.4140,
          lng: -3.6980
        }
      }
    },
    {
      name: "Concierto de Órgano",
      date: "17 de Diciembre, 2024",
      time: "20:00",
      description: "Concierto de órgano en la Parroquia de Santa Engracia.",
      location: {
        name: "Parroquia de Santa Engracia",
        address: "Plaza Santa Engracia, Zaragoza",
        coordinates: {
          lat: 41.6489,
          lng: -0.8831
        }
      }
    }
  ],
  "2025": [
    {
      name: "Concierto Internacional de Órgano",
      date: "20 de Diciembre, 2025",
      time: "20:00",
      description: "Concierto de órgano en la Chiesa di Santa Maria degli Angeli, Milán (Italia).",
      location: {
        name: "Chiesa di Santa Maria degli Angeli",
        address: "Piazza Sant'Angelo, 20121 Milano (MI), Italia",
        coordinates: {
          lat: 45.4750,
          lng: 9.1870
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