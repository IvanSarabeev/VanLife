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

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
