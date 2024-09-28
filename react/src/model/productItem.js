class ProductItem {
  constructor(imageUrl, name, price) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.price = price;
  }
}

export const DATA_ITEMS = [
  new ProductItem(
    "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY436_FMwebp_QL65_.jpg",
    "Apple Iphone 13",
    100
  ),
  new ProductItem(
    "https://m.media-amazon.com/images/I/81E2srXhKVL._AC_UY436_FMwebp_QL65_.jpg",
    "Acer Predator Helios Neo 16",
    200
  ),
  new ProductItem(
    "https://m.media-amazon.com/images/I/71ItMeqpN3L._AC_UY436_FMwebp_QL65_.jpg",
    "MacBook Air 13",
    300
  ),
  new ProductItem(
    "https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY436_FMwebp_QL65_.jpg",
    "Ipad Pro 11",
    400
  ),
  new ProductItem(
    "https://m.media-amazon.com/images/I/51mWHXY8hyL._AC_UY436_FMwebp_QL65_.jpg",
    "Sony PS5",
    500
  ),
  new ProductItem(
    "https://m.media-amazon.com/images/I/61-jjE67uqL._AC_UY436_FMwebp_QL65_.jpg",
    "Xbox Series X",
    600
  ),
];
