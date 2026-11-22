import { describe, expect, it } from 'vitest';
import { NEMPO_MOMEN_DIGITAL_SLIDE, NMD_EXPORT, nempoMomenDigital } from './nempo-momen-digital';

describe('nempoMomenDigital (slide 59)', () => {
  it('is slide 59 with a 3:4 3× export', () => {
    expect(NEMPO_MOMEN_DIGITAL_SLIDE).toBe(59);
    expect(NMD_EXPORT).toEqual({ width: 3240, height: 4320 });
  });

  it('keeps slide 56 structure: four chips and three steps', () => {
    expect(nempoMomenDigital.credits).toHaveLength(4);
    expect(nempoMomenDigital.steps).toHaveLength(3);
  });

  it('previews the Year Book page from nempo.id', () => {
    expect(nempoMomenDigital.web.url).toBe('nempo.id/year-book');
    expect(nempoMomenDigital.web.kicker).toBe('Year Book 2026');
    expect(nempoMomenDigital.web.students).toHaveLength(4);
  });
});
