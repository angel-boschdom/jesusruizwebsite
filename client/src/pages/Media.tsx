import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "@/components/VideoPlayer";
import PhotoGallery from "@/components/PhotoGallery";

const photos = [
  {
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organodefrente.jpg",
    alt: "Órgano clásico en una iglesia"
  },
  {
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organolateral.png",
    alt: "Detalle de órgano histórico"
  },
  {
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/iglesiaorgano1.jpg",
    alt: "Interior de iglesia con órgano"
  },
  {
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.png",
    alt: "Jesús Ruiz tocando el órgano"
  },
  {
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organojesus1.jpg",
    alt: "Jesús Ruiz tocando el órgano con dos de sus mentores"
  },
  {
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/jesusorganofondo.jpg",
    alt: "Retrato de Jesús Ruiz con su órgano"
  }
];

const videos = [
  {
    title: "Restauración del Órgano",
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organoconstruyendo.mp4",
    poster: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/organojesus1.jpg"
  },
  {
    title: "Entrevista Babel 2018",
    src: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.mp4",
    poster: "https://angel-boschdom.github.io/jesusruizorganista-media/assets/babel.png"
  },
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