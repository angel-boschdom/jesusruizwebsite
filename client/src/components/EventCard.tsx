import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  name: string;
  date: string;
  time: string;
  description: string;
  location: {
    name: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export default function EventCard({
  name,
  date,
  time,
  description,
  location,
}: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMapClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <Card
      className={cn(
        "w-full transition-all duration-300",
        isExpanded
          ? "bg-muted text-foreground"    // Expanded state: pale gray bg, dark text
          : "hover:bg-muted"              // Hover (collapsed): pale gray bg highlight
      )}
    >
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-cormorant text-foreground">
              {name}
            </CardTitle>
            <CardDescription className="text-foreground/80">
              {date} - {time}
            </CardDescription>
          </div>
          {isExpanded ? (
            <ChevronUp className="text-foreground" />
          ) : (
            <ChevronDown className="text-foreground" />
          )}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          <p className="text-sm text-foreground/90">{description}</p>

          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <MapPin className="mt-1 h-4 w-4 text-foreground" />
              <div>
                <p className="font-semibold text-foreground">{location.name}</p>
                <p className="text-sm text-foreground/90">{location.address}</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full border-foreground text-foreground hover:bg-foreground/10"
              onClick={handleMapClick}
            >
              Ver en Google Maps
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
}