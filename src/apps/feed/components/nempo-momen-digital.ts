/**
 * NEMPO Feed slide 59 — the "Momen Digital" service (memory websites such as a class yearbook) as a bright
 * poster in slide 56's layout, with a phone preview of the Year Book page from nempo.id (github.com/nempocreative/nempo-web-20).
 */
import { nempoKolaborasi } from './nempo-kolaborasi';

export const NEMPO_MOMEN_DIGITAL_SLIDE = 59;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NMD_EXPORT = { width: 3240, height: 4320 } as const;

export const nempoMomenDigital = {
  badge: 'Momen Digital',
  title: ['Momen', 'Digital,'],
  tagline: 'Kenanganmu Jadi Website!',
  release: 'Satu link · bisa dibuka kapan aja',
  creditsLabel: 'Bisa buat',
  credits: ['Year book angkatan', 'Momen kelas', 'Geng & organisasi', 'Event & komunitas'],
  stepsLabel: 'Cara pesan',
  steps: ['Chat admin NEMPO', 'Kirim foto & cerita', 'Web kenangan jadi!'],
  cta: `Chat Admin · WA ${nempoKolaborasi.whatsapp.number}`,
  /** Phone preview copied from the Year Book demo on nempo.id (sample names, not real students). */
  web: {
    url: 'nempo.id/year-book',
    kicker: 'Year Book 2026',
    title: 'Sejuta Cerita',
    school: 'SMA Nempo Garut · Angkatan 2026',
    quote: 'Kita mungkin punya arah berbeda, tapi pernah tumbuh di halaman yang sama.',
    students: [
      { key: 'nadia', name: 'Nadia' },
      { key: 'rayhan', name: 'Rayhan' },
      { key: 'salsa', name: 'Salsa' },
      { key: 'dimas', name: 'Dimas' },
    ],
    wall: 'Pesan dinding',
    wallCount: 128,
    note: 'Contoh cuplikan web',
  },
} as const;
