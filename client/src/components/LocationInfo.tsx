import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationInfoProps {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

/**
 * Componente para mostrar información de ubicación
 * y un botón para abrir Google Maps, con todo centrado.
 */
export default function LocationInfo({
  name,
  address,
  lat,
  lng,
}: LocationInfoProps) {
  const handleMapClick = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-4 border rounded-md bg-muted text-foreground/90 flex flex-col items-center text-center space-y-2">
      <MapPin className="h-5 w-5" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{address}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="border-foreground text-foreground hover:bg-foreground/10"
        onClick={handleMapClick}
      >
        Ver en Google Maps
      </Button>
    </div>
  );
}