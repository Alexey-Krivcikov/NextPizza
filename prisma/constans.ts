export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];

export const _ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      '/images/cheese-bort.png',
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      '/images/mozarella.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: '/images/chedder-parmesan.png',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      '/images/halapeniu.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: '/images/chiken.png',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: '/images/shampinon.png',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: '/images/vetchina.png',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: '/images/pepperoni.png',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: '/images/chorizo.png',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: '/images/pichiles.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/images/tomato.png',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: '/images/onion.png',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: '/images/pinneapple.png',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      '/images/italian.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: '/images/pepper.png',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: '/images/brinza.png',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      '/images/meetboll.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: '/images/omlet1.webp',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    imageUrl: '/images/omlet2.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/images/latte1.webp',
    categoryId: 2,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl: '/images/denwitch1.webp',
    categoryId: 3,
  },
  {
    name: 'Куриные наггетсы',
    imageUrl: '/images/nuggets.webp',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи с соусом 🌱',
    imageUrl: '/images/potato1.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imageUrl: '/images/dodster.webp',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imageUrl: '/images/dodster2.webp',
    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imageUrl: '/images/banana-coctail.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imageUrl: '/images/apple-cocktail.webp',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: '/images/oreo-coctail.webp',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imageUrl: '/images/cocktail.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландский Капучино',
    imageUrl: '/images/irish-coffe.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Карамельный капучино',
    imageUrl: '/images/caram-coffe.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl: '/images/cocos-latte.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Американо',
    imageUrl: '/images/amerikano.webp',
    categoryId: 5,
  },
  {
    name: 'Кофе Латте',
    imageUrl: '/images/latte.webp',
    categoryId: 5,
  },
];
