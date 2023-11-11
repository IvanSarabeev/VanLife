export interface VanData {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}

export interface VanDataExtended extends VanData {
  visiblity: string;
  description: string;
  imgGallery: { id: number; src: string; alt: string }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  password: string;
}
