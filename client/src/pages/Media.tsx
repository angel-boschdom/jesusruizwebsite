import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "@/components/VideoPlayer";
import PhotoGallery from "@/components/PhotoGallery";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1613941854763-c237d27c45d3",
    alt: "Órgano clásico en una iglesia"
  },
  {
    src: "https://images.unsplash.com/photo-1603058824144-081b3981a429",
    alt: "Detalle de órgano histórico"
  },
  {
    src: "https://images.unsplash.com/photo-1533414765079-4bb015a31395",
    alt: "Vista frontal de órgano"
  },
  {
    src: "https://images.unsplash.com/photo-1515527658517-0a52764f2fdf",
    alt: "Órgano majestuoso"
  },
  {
    src: "https://images.unsplash.com/photo-1502788686946-ef89b02935cf",
    alt: "Interior de iglesia con órgano"
  },
  {
    src: "https://images.unsplash.com/photo-1560184611-5b5749138c3c",
    alt: "Concierto clásico"
  }
];

const videos = [
  {
    title: "Entrevista Babel 2018",
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.mp4",
    poster: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.png"
  },
  {
    title: "Festival de Órgano 2023",
    src: "/path/to/video2.mp4",
    poster: "https://images.unsplash.com/photo-1474814947326-d835369963a5"
  }
];

export default function Media() {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8">
      <h1 className="font-cormorant text-5xl font-bold text-center">
        Media
      </h1>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="photos">Fotografías</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="photos" className="mt-8">
          <PhotoGallery photos={photos} />
        </TabsContent>
        
        <TabsContent value="videos" className="mt-8">
          <div className="grid gap-8">
            {videos.map((video, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-cormorant text-2xl">{video.title}</h3>
                <VideoPlayer
                  src={video.src}
                  poster={video.poster}
                  className="aspect-video rounded-lg overflow-hidden"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}