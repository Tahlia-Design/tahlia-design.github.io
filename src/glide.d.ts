declare module '@glidejs/glide' {
  interface GlideOptions {
    type?: 'carousel' | 'slider';
    startAt?: number;
    perView?: number;
    gap?: number;
    autoplay?: number | boolean;
    hoverpause?: boolean;
    keyboard?: boolean;
    animationDuration?: number;
    animationTimingFunc?: string;
    dragThreshold?: number;
    focusAt?: number | string;
    peek?: number | { before: number; after: number };
    breakpoints?: Record<number, Partial<GlideOptions>>;
  }

  export default class Glide {
    constructor(selector: string | HTMLElement, options?: GlideOptions);
    mount(): Glide;
    destroy(): void;
    go(pattern: string): Glide;
    update(settings?: Partial<GlideOptions>): Glide;
    on(event: string, handler: () => void): Glide;
    off(event: string, handler?: () => void): Glide;
    pause(): Glide;
    play(): Glide;
    disable(): Glide;
    enable(): Glide;
  }
}
