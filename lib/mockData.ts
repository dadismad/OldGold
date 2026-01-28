export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Order {
  id: number;
  userId: number;
  productId: number;
  date: string;
  status: string;
  total: number;
}

export interface SavedItem {
  id: number;
  userId: number;
  productId: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Gaming Console",
    price: 149.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=400&fit=crop",
    description: "Classic retro gaming console from the 90s in excellent condition.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Antique Camera",
    price: 299.99,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&h=400&fit=crop",
    description: "Rare vintage camera perfect for collectors.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Classic Vinyl Records",
    price: 79.99,
    category: "Music",
    image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=400&h=400&fit=crop",
    description: "Collection of vintage vinyl records from various artists.",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Retro Watch",
    price: 199.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Stylish vintage wristwatch with mechanical movement.",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Classic Books Set",
    price: 89.99,
    category: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop",
    description: "Rare collection of classic literature first editions.",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Vintage Typewriter",
    price: 249.99,
    category: "Office",
    image: "https://images.unsplash.com/photo-1525481030173-bd6881619161?w=400&h=400&fit=crop",
    description: "Beautiful mechanical typewriter in working condition.",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Antique Compass",
    price: 129.99,
    category: "Collectibles",
    image: "https://images.unsplash.com/photo-1611511192311-9dcb3a6a3f54?w=400&h=400&fit=crop",
    description: "Brass nautical compass with vintage patina.",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Old World Map",
    price: 159.99,
    category: "Art",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=400&fit=crop",
    description: "Replica of an antique world map, framed.",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Vintage Telephone",
    price: 179.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1528372444006-1bfc81acab02?w=400&h=400&fit=crop",
    description: "Rotary dial telephone from the 1970s.",
    rating: 4.2,
  },
  {
    id: 10,
    name: "Classic Film Camera",
    price: 189.99,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?w=400&h=400&fit=crop",
    description: "35mm film camera with original leather case.",
    rating: 4.7,
  },
  {
    id: 11,
    name: "Retro Radio",
    price: 139.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Vintage tube radio with warm analog sound.",
    rating: 4.5,
  },
  {
    id: 12,
    name: "Antique Chess Set",
    price: 219.99,
    category: "Games",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=400&fit=crop",
    description: "Hand-carved wooden chess set with folding board.",
    rating: 4.8,
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "demo@example.com",
    password: "demo123",
  },
];

export const orders: Order[] = [
  {
    id: 1,
    userId: 1,
    productId: 1,
    date: "2024-01-15",
    status: "Delivered",
    total: 149.99,
  },
  {
    id: 2,
    userId: 1,
    productId: 3,
    date: "2024-01-20",
    status: "Shipped",
    total: 79.99,
  },
  {
    id: 3,
    userId: 1,
    productId: 5,
    date: "2024-01-25",
    status: "Processing",
    total: 89.99,
  },
];

export const savedItems: SavedItem[] = [
  { id: 1, userId: 1, productId: 2 },
  { id: 2, userId: 1, productId: 4 },
  { id: 3, userId: 1, productId: 7 },
];
