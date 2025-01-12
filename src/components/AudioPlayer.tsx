import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AudioPlayer() {
  const [playing, setPlaying] = React.useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      if (playing) {
        audioRef.current.play().catch(() => {
          setPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setPlaying(!playing)}
        className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
      >
        {playing ? (
          <Volume2 className="w-6 h-6 text-pink-600" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-600" />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        src="/src/components/audio/music.mp3"
      />
    </div>
  );
}
