import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ConcertCardProps {
  artistName: string;
  artistTitle?: string;
  date: string;
  time: string;
}

export default function ConcertCard({
  artistName,
  artistTitle,
  date,
  time,
}: ConcertCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className={cn(
        "w-full transition-all duration-300",
        isExpanded
          ? "bg-muted text-foreground"    // Expanded state: muted background, foreground text
          : "hover:bg-muted"              // Hover (collapsed): muted background highlight
      )}
    >
      {/* Card Header */}
      <CardHeader
        className="cursor-pointer flex items-center justify-between p-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="text-xl font-semibold text-foreground">
          {isExpanded ? artistName : date}
        </CardTitle>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-foreground" />
        )}
      </CardHeader>

      {/* Expanded Content */}
      {isExpanded && (
        <CardContent className="px-4 pb-4 space-y-2">
          {/* Optional Artist Title */}
          {artistTitle && (
            <p className="text-md font-medium text-foreground">
              {artistTitle}
            </p>
          )}

          {/* Date and Time */}
          <div className="flex flex-col">
            <span className="text-sm text-foreground/80">Fecha: {date}</span>
            <span className="text-sm text-foreground/80">Hora: {time}</span>
          </div>
        </CardContent>
      )}
    </Card>
  );
}