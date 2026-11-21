/**
 * NEMPO Feed slide 58 — the informative follow-up to slide 57: facts about the Sunday-morning Car Free Day on
 * Jl. Letjen Ibrahim Adjie, Garut, gathered from local news and travel write-ups. Same bright playful poster
 * look as slide 57, with a fact card instead of the snack poll.
 *
 * Sources:
 * - Schedule (every Sunday morning, from ±06.00 WIB, road closed to motor vehicles):
 *   https://radargarut.id/2025/10/19/cfd-ibrahim-adjie-ikon-destinasi-wajib-setiap-minggu-pagi-di-garut/
 * - Three-mountain view (Guntur, Cikuray, Papandayan) over green rice fields; wide two-lane road, family-safe:
 *   https://radargarut.id/2026/02/05/surga-minggu-pagi-jalan-letjen-ibrahim-adjie-garut-sajikan-view-dan-makanan-viral/
 * - "Pasar tumpah" of UMKM street food (local snacks, sate, baso, gorengan, coffee):
 *   https://radargarut.id/2025/10/19/cfd-ibrahim-adjie-ikon-destinasi-wajib-setiap-minggu-pagi-di-garut/
 * - The road itself was inaugurated 28 December 2023:
 *   https://infogarut.id/posts/jalan-ibrahim-adjie-garut-dari-jalur-baru-jadi-spot-kuliner-favorit
 */
export const NEMPO_CFD_INFO_SLIDE = 58;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NCI_EXPORT = { width: 3240, height: 4320 } as const;

export const nempoCfdInfo = {
  badge: 'Info CFD',
  title: ['Car Free Day', 'Ibrahim Adjie'],
  tagline: 'Jl. Letjen Ibrahim Adjie, Garut',
  release: 'Setiap Minggu pagi · mulai 06.00 WIB',
  facts: [
    {
      heading: 'Jalan bebas kendaraan',
      text: 'Ruas jalan ditutup untuk kendaraan bermotor — bebas jogging, sepedaan, atau jalan santai bareng keluarga.',
    },
    {
      heading: 'View 3 gunung sekaligus',
      text: 'Gunung Guntur, Cikuray, dan Papandayan kelihatan jelas di balik hamparan sawah hijau. Swiss van Java!',
    },
    {
      heading: 'Pasar tumpah UMKM',
      text: 'Deretan pedagang lokal: cilok, seblak, sate, baso, gorengan, sampai kopi kekinian. Jajan itu wajib!',
    },
    {
      heading: 'Jalan baru yang hits',
      text: 'Diresmikan 28 Desember 2023, jalannya lebar dua jalur dan panjang — aman buat semua usia.',
    },
  ],
  cta: 'Minggu pagi ke sini, yuk!',
} as const;
