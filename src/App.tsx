import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { ImageGallery } from './components/ImageGallery';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  const [showLove, setShowLove] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
      {!showLove ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold text-pink-600">tumi ki amake bhalobaso?</h1>
            <button
              onClick={() => setShowLove(true)}
              className="flex items-center gap-2 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-xl font-semibold transition-all transform hover:scale-105"
            >
              <Heart className="w-6 h-6" />
              han!
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <AudioPlayer />
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-pink-600 mb-4">
              aami jantam tumi han bolbe!! 💖
              </h2>
              <p className="text-xl text-pink-500">aami ekti sundari maye valobasi niche dekhun eta kay jaanate</p>
            </div>
            <ImageGallery />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;