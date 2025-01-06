export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  livePreviewUrl: string;
  codeUrl: string;
}

export interface Technology {
  id: number;
  name: string;
  icon: string;
}

export interface Item {
  id: number;
  label: string;
}

export interface ItemsData {
  item: Item[];
}

export interface CollageImage {
  id: number;
  src: string;
  alt: string;
}

export interface Collage {
  images: CollageImage[];
}