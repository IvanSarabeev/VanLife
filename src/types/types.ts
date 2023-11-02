export interface VanData {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}

export interface VanDataExtended extends VanData {
  description: string;
}
