export interface VanData {
  id: string;
  name: string;
  star: string;
  type: string;
  year: number;
  fuel: string;
  model: string;
  price: number;
  mileage: string;
  gearType: string;
  imageUrl: string;
}

export interface VanDataExtended extends VanData {
  gears: number;
  rating: number;
  engPower: string;
  visiblity: string;
  consumption: string;
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
