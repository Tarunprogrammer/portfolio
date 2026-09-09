import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { VISUAL_GALLERY } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function VisualGallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-tech text-cyan-400 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>VISUAL ARTISTRY & CINEMATICS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              3D RENDERS & COMPOSITIONS
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-sans mt-2 max-w-xl">
              Photorealistic render passes, volumetric spatial lighting, and high-fidelity production staging.
            </p>
          </div>

          <div className="text-xs font-mono-tech text-cyan-400/80 px-4 py-2 rounded-full glass-panel border border-cyan-500/30">
            8K ULTRA-FIDELITY RENDER ASSETS
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VISUAL_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                sound.playClick();
                setActiveImage(item);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`group relative overflow-hidden rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Meta Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono-tech text-cyan-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => {
            sound.playClick();
            setActiveImage(null);
          }}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden glass-panel-glow border border-cyan-500/40 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                sound.playClick();
                setActiveImage(null);
              }}
              className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black/60 rounded-2xl overflow-hidden">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
              />
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider">
                  {activeImage.category}
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-0.5">
                  {activeImage.title}
                </h4>
              </div>
              <span className="text-xs font-mono-tech text-gray-400">
                PRODUCED BY EPPE TARUN
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
