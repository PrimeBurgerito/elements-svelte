export interface Image {
  fileName: string;
  key: string;
  uri: string;
  crops: Record<string, ImageCrop>;
}

export interface ImageCrop {
  x: number;
  y: number;
  width: number;
  height: number;
}
