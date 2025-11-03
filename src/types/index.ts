export interface ProductImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ProductImageSet;
  second: ProductImageSet;
  third: ProductImageSet;
}

export interface ProductOther {
  slug: string;
  name: string;
  image: ProductImageSet;
}

export interface Product {
  id: number | string;
  slug: string;
  name: string;
  image: ProductImageSet;
  category: string;
  categoryImage: ProductImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: ProductGallery;
  others: ProductOther[];
}
