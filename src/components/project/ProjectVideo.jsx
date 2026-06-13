//import GlassCard from '../common/GlassCard'

import { useState } from "react"

const ProjectVideo = ({ videoImage, youtubeId }) => {
  const [play, setPlay] = useState(false)

  return (
    <section className="bg-surface-container-low py-20 mt-12 overflow-hidden relative">
      <div className="px-6 md:px-gutter max-w-container-max mx-auto">

        <div className="relative glass-card rounded-[2.5rem] overflow-hidden aspect-video ambient-glow">

          {!play ? (
            <>
              <img
                className="w-full h-full object-cover opacity-80"
                src={videoImage}
                alt="Video demo preview"
              />

              <button
                onClick={() => setPlay(true)}
                className="absolute inset-0 flex items-center justify-center bg-on-surface/20 hover:bg-on-surface/10 transition-colors group"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

        </div>

      </div>
    </section>
  )
}

export default ProjectVideo