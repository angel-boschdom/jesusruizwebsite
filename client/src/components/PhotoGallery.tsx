import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  photos: { src: string; alt: string }[];
  className?: string;
}

export default function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const showNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const showPrevious = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {photos.map((photo, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="cursor-pointer overflow-hidden rounded-lg">
              <AspectRatio ratio={4/3}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </AspectRatio>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative">
              <img
                src={photos[currentPhotoIndex].src}
                alt={photos[currentPhotoIndex].alt}
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={showPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={showNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
