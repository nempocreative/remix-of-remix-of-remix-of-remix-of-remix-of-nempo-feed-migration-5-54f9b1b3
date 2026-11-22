import type { RefObject } from 'react';
import classArt from '@/assets/nempo-feed-59/nempo-feed-59-latar-kelas.webp.asset.json';
import titleArt from '@/assets/nempo-feed-59/nempo-feed-59-judul-momen-digital.webp.asset.json';
import ybAngkatan from '@/assets/nempo-feed-59/nempo-feed-59-yb-angkatan.webp.asset.json';
import ybNadia from '@/assets/nempo-feed-59/nempo-feed-59-yb-nadia.webp.asset.json';
import ybRayhan from '@/assets/nempo-feed-59/nempo-feed-59-yb-rayhan.webp.asset.json';
import ybSalsa from '@/assets/nempo-feed-59/nempo-feed-59-yb-salsa.webp.asset.json';
import ybDimas from '@/assets/nempo-feed-59/nempo-feed-59-yb-dimas.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoMomenDigital as P } from './nempo-momen-digital';
import './NempoMomenDigitalSlide.css';

const STUDENT_PHOTOS: Record<string, string> = {
  nadia: ybNadia.url,
  rayhan: ybRayhan.url,
  salsa: ybSalsa.url,
  dimas: ybDimas.url,
};

/**
 * NEMPO Feed slide 59 (3:4): the Momen Digital service in slide 56's poster layout — shared header, AI-lettered
 * white title, sticker tagline, tilted line, white chips/steps card and shared footer — over a cute 3D classroom
 * moment, with a tilted phone showing a snippet of the Year Book page on nempo.id.
 */
export function NempoMomenDigitalSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const W = P.web;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nmd-root kmt-root"
      aria-label={`${P.title.join(' ')} ${P.tagline} ${P.credits.join(', ')}. ${P.stepsLabel}: ${P.steps.join(', ')}. ${P.cta}`}
    >
      <img
        className="nmd-photo"
        src={classArt.url}
        alt="Ilustrasi 3D lucu suasana kelas: siswa SMA berseragam selfie bareng, ada yang berdiri di kursi, pesawat kertas, bendera warna-warni dan papan tulis penuh coretan."
        draggable={false}
      />

      <NempoHeader badge={P.badge} />

      <h2 className="nmd-title">
        <img className="nmd-title-art" src={titleArt.url} alt="" draggable={false} />
        <span className="nmd-sr">{P.title.join(' ')}</span>
      </h2>

      <p className="nmd-tagline">{P.tagline}</p>
      <p className="nmd-release">{P.release}</p>

      {/* Phone snippet of the Year Book page */}
      <figure className="nmd-phone" aria-label={`${W.note}: ${W.url}`}>
        <div className="nmd-screen">
          <div className="nmd-url"><span className="nmd-lock" aria-hidden="true" />{W.url}</div>
          <div className="nmd-page">
            <p className="nmd-kicker">{W.kicker}</p>
            <p className="nmd-h1">{W.title}</p>
            <p className="nmd-school">{W.school}</p>
            <img className="nmd-hero" src={ybAngkatan.url} alt="" draggable={false} />
            <ul className="nmd-students">
              {W.students.map((s) => (
                <li key={s.key}>
                  <img src={STUDENT_PHOTOS[s.key]} alt="" draggable={false} />
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
            <p className="nmd-quote">“{W.quote}”</p>
            <p className="nmd-wall"><span aria-hidden="true">♥</span>{W.wall} · {W.wallCount}</p>
          </div>
        </div>
        <figcaption className="nmd-note">{W.note}</figcaption>
      </figure>

      <div className="nmd-billing">
        <p className="nmd-credits">
          <strong>{P.creditsLabel}</strong>
          {P.credits.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </p>

        <p className="nmd-steps-label">{P.stepsLabel}</p>
        <ol className="nmd-steps">
          {P.steps.map((s, i) => (
            <li key={s}><span>{i + 1}</span>{s}</li>
          ))}
        </ol>
      </div>

      <NempoFooter />
    </section>
  );
}
