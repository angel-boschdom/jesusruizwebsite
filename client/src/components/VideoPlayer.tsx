import { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  hero?: boolean;
}

export default function VideoPlayer({ src, poster, className, hero }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0];
    if (videoRef.current) {
      const time = (videoRef.current.duration / 100) * newProgress;
      videoRef.current.currentTime = time;
      setProgress(newProgress);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative group bg-black rounded-lg overflow-hidden",
        className,
        { 'pointer-events-none': hero } // Disable pointer events in hero mode
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full"
        onTimeUpdate={handleTimeUpdate}
        autoPlay={hero}
        loop={hero}
        muted={hero}
        controls={!hero}
      />
      
      {/* Render custom controls only when not in hero mode */}
      {!hero && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="space-y-2">
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              onValueChange={handleProgressChange}
              className="w-full"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={togglePlay}
                  className="text-white hover:text-white/80"
                >
                  {isPlaying ? <Pause /> : <Play />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-white hover:text-white/80"
                >
                  {isMuted ? <VolumeX /> : <Volume2 />}
                </Button>
                
                <div className="w-24">
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    max={1}
                    step={0.1}
                    onValueChange={handleVolumeChange}
                  />
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="text-white hover:text-white/80"
              >
                {isFullscreen ? <Minimize /> : <Maximize />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}