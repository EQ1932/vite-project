export interface Book {
  id: string;
  title: string;
  price: number;
  description: string;
  cover: string;
  category: string;
}

export interface CartItem extends Book {
  cartId: number; // json-server 自动生成的唯一 ID
}

export interface Order {
  id?: number;
  userName: string;
  address: string;
  items: Book[];
  totalPrice: number;
  date: string;
}
