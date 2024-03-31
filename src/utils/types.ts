export interface Product {
    id: number;
    name: string;
    children?: Product[];
  }