'use client';

import { useState, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playInFlightRef = useRef(false);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playInFlightRef.current || !audio.paused) return;

    audio.volume = 0.3;
    playInFlightRef.current = true;

    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
          console.log('Music started successfully');
        })
        .catch(err => {
          if (err?.name !== 'AbortError') {
            console.error('Failed to play audio:', err);
            alert('Failed to start music. Please check console for details.');
          }
        })
        .finally(() => {
          playInFlightRef.current = false;
        });
    }
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    audio.muted = newMutedState;
    setIsMuted(newMutedState);
  }, [isMuted]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >
        <source src="/music/bgmusic.mp3" type="audio/mpeg" />
      </audio>

      {/* Click to start prompt */}
      {showPrompt && (
        <div 
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/95 backdrop-blur-md cursor-pointer"
          onClick={startMusic}
        >
          <div className="text-center space-y-6 animate-pulse">
            <Play className="w-16 h-16 mx-auto text-blood-red" />
            <div>
              <h3 className="text-2xl md:text-3xl font-cinzel text-blood-red mb-2">
                Enter The Realm
              </h3>
              <p className="text-foreground/60 text-sm">
                Click anywhere to begin
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Mute/Unmute button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="fixed bottom-4 right-4 z-50 p-3 bg-card/80 backdrop-blur-sm border border-border hover:border-blood-red/50 transition-colors duration-300 rounded-lg"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-foreground/60" />
          ) : (
            <Volume2 className="w-5 h-5 text-blood-red" />
          )}
        </button>
      )}
    </>
  );
}

