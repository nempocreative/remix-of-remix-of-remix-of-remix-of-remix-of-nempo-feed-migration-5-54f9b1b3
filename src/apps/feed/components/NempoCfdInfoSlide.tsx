import type { RefObject } from 'react';
import { MapPin } from 'lucide-react';
import crowdPhoto from '@/assets/nempo-feed-58/nempo-feed-58-cfd-keramaian.webp.asset.json';
import mountainPhoto from '@/assets/nempo-feed-58/nempo-feed-58-cfd-gunung.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoCfdInfo as C } from './nempo-cfd-info';
import './NempoCfdInfoSlide.css';

/**
 * NEMPO Feed slide 58 (3:4): the informative Car Free Day post for Jl. Letjen Ibrahim Adjie, Garut — same
 * bright playful poster look as slide 57, but with real photos from local news instead of AI artwork: the
 * Sunday-morning crowd (Radar Garut) and the road with Mount Guntur behind it (Infogarut), shown as tilted
 * polaroid cards under a CSS-typed title, with a white card of four facts above the shared footer.
 */
export function NempoCfdInfoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nci-root kmt-root"
      aria-label={`${C.title.join(' ')}. ${C.tagline}. ${C.release}. ${C.facts.map((f) => `${f.heading}: ${f.text}`).join(' ')} ${C.cta}`}
    >
      <NempoHeader badge={C.badge} />

      <h2 className="nci-title">
        {C.title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>

      <p className="nci-tagline"><MapPin aria-hidden="true" />{C.tagline}</p>
      <p className="nci-release">{C.release}</p>

      <figure className="nci-polaroid nci-polaroid-left">
        <img
          src={crowdPhoto.url}
          alt="Foto asli suasana ramai Car Free Day Minggu pagi di Jl. Ibrahim Adjie Garut: pengunjung berjalan di antara tenda pedagang warna-warni. (Foto: Radar Garut)"
          draggable={false}
        />
      </figure>
      <figure className="nci-polaroid nci-polaroid-right">
        <img
          src={mountainPhoto.url}
          alt="Foto asli Jl. Ibrahim Adjie Garut dengan deretan tenda pedagang dan pemandangan Gunung Guntur di belakangnya. (Foto: Infogarut)"
          draggable={false}
        />
      </figure>

      <div className="nci-card">
        <ul className="nci-facts">
          {C.facts.map((f) => (
            <li key={f.heading}>
              <p className="nci-fact-heading">{f.heading}</p>
              <p className="nci-fact-text">{f.text}</p>
            </li>
          ))}
        </ul>
        <p className="nci-cta">{C.cta}</p>
      </div>

      <NempoFooter />
    </section>
  );
}
