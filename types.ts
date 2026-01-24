
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export enum NavLink {
  Home = 'Trang Chủ',
  About = 'Về Chúng Tôi',
  Team = 'Đội Ngũ',
  Products = 'Sản Phẩm',
  Contact = 'Liên Hệ'
}
