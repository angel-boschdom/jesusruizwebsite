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
    <Card className={cn(
      "w-full transition-all duration-300",
      isExpanded ? "bg-accent" : "hover:bg-accent/50"
    )}>
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-cormorant">{name}</CardTitle>
            <CardDescription>
              {date} - {time}
            </CardDescription>
          </div>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <p className="text-sm">{description}</p>
          
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <MapPin className="mt-1 h-4 w-4" />
              <div>
                <p className="font-semibold">{location.name}</p>
                <p className="text-sm text-muted-foreground">
                  {location.address}
                </p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="w-full"
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
