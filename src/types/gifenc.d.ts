declare module "gifenc" {
  export interface GIFEncoderWriteFrameOptions {
    palette?: number[][];
    delay?: number;
    transparent?: boolean;
    dispose?: number;
    first?: boolean;
  }

  export interface GIFEncoderInstance {
    writeFrame(
      index: Uint8Array | Uint8ClampedArray,
      width: number,
      height: number,
      opts?: GIFEncoderWriteFrameOptions
    ): void;
    finish(): void;
    bytes(): Uint8Array;
    reset(): void;
    stream: { bytesView(): Uint8Array };
  }

  export function GIFEncoder(opts?: { auto?: boolean }): GIFEncoderInstance;

  export function quantize(
    data: Uint8Array | Uint8ClampedArray,
    maxColors: number,
    opts?: Record<string, unknown>
  ): number[][];

  export function applyPalette(
    data: Uint8Array | Uint8ClampedArray,
    palette: number[][],
    format?: string
  ): Uint8Array;
}
