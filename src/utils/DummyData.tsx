import { postPicture, user, user1, user2 } from '../assets/images';
import AppColors from './AppColors';

export const userData = {
  name: 'Maria Noor',
  education: 'Master in Computer Science',
  address: 'Rugby, England',
  jobTitle: 'Software Developer',
};

export const postData = [
  {
    key: 1,
    source: user,
    postPicture: postPicture,
    Price: '400',
    caption:
      'Rate my new Art work, If anyone intrested to buy please chicke the order button bellow',
    userName: 'Maria Noor',
    time: '3 min',
  },
  {
    key: 2,
    source: user2,
    postPicture: {
      uri: 'https://carolineashwood.co.uk/cdn/shop/files/new-lenny-original-abstract-wall-art-39533093814518_2000x.jpg?v=1701705107',
    },
    Price: '400',
    caption:
      'Rate my new Art work, If anyone intrested to buy please chicke the order button bellow',
    userName: 'Maria Noor',
    time: '3 min',
  },
  {
    key: 3,
    source: user1,
    postPicture: postPicture,
    Price: '400',
    caption:
      'Rate my new Art work, If anyone intrested to buy please chicke the order button bellow',
    userName: 'Maria Noor',
    time: '3 min',
  },
];

export const artistData = [
  {
    key: 1,
    source: user,
    artistName: 'John Doe',
  },
  {
    key: 2,
    source: user1,
    artistName: 'John Doe',
  },
  {
    key: 3,
    source: user2,
    artistName: 'John Doe',
  },
  {
    key: 4,
    source: user,
    artistName: 'John Doe',
  },
  {
    key: 4,
    source: user1,
    artistName: 'John Doe',
  },
  {
    key: 5,
    source: user2,
    artistName: 'John Doe',
  },
];

export const galleryData = [
  {
    uri: 'https://carolineashwood.co.uk/cdn/shop/files/new-lenny-original-abstract-wall-art-39533093814518_2000x.jpg?v=1701705107',
    title: 'Original Colourful Abstract Painting',
    price: '$120',
  },
  {
    uri: 'https://images.photowall.com/products/77748/tall-ships-paintings.jpg?h=699&q=85',
    title: 'Tall Ships Paintings',
    price: '$130',
  },
  {
    uri: 'https://i0.wp.com/cdn.tiqets.com/wordpress/blog/wp-content/uploads/2023/06/05164214/paintings-of-venice-1.jpg?resize=1024%2C683&ssl=1',
    title: 'The Most Famous Paintings of Venice',
    price: '$240',
  },
  {
    uri: 'https://images.joseartgallery.com/100737/what-color-paintings-sell-best.jpg',
    title: 'Jose Art Gallery',
    price: '$120',
  },
  {
    uri: 'https://i.etsystatic.com/17358183/r/il/321f5b/4644988646/il_570xN.4644988646_hiao.jpg',
    title: 'Lake Como Oil Painting Original Italy Landscape',
    price: '$180',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vflT_IbY6bGitDEPVNJ7yQPMtTr2MjmRAN4VyqrUbQ&s',
    title: 'Original artworks for sale',
    price: '$200',
  },
];

export const categoryList = [
  {
    source:
      'https://carolineashwood.co.uk/cdn/shop/files/new-lenny-original-abstract-wall-art-39533093814518_2000x.jpg?v=1701705107',
    categoryName: 'Paintings',
    numberOfItems: '1500 items',
  },
  {
    source:
      'https://cdn.shopify.com/s/files/1/0036/8757/9760/files/82.jpg?v=1604230225',
    categoryName: 'Abstract art',
    numberOfItems: '1600 items',
  },
  {
    source: 'https://i.redd.it/djh0glv80bua1.jpg',
    categoryName: 'Drawings',
    numberOfItems: '1100 items',
  },
  {
    source:
      'https://static.vecteezy.com/system/resources/thumbnails/000/225/241/small_2x/hand-gesture-modern-pop-art-vector.jpg',
    categoryName: 'Pop Art',
    numberOfItems: '1300 items',
  },
  {
    source:
      'https://animationworkshop.via.dk/-/media/taw-v2/programmes-and-courses/bachelor-programmes/images/computer-graphic-arts/fayburrow-960x480-v2.jpg',
    categoryName: 'Computer art',
    numberOfItems: '900 items',
  },
];

export const offersList = [
  {
    key: 1,
    source:
      'https://cdn.shopify.com/s/files/1/0036/8757/9760/files/82.jpg?v=1604230225',
    title: 'Best Spring Offer',
    subTitle: 'Abstract art',
    number: '30',
    backgroundColor: AppColors.chocolate,
  },
  {
    key: 2,
    source:
      'https://animationworkshop.via.dk/-/media/taw-v2/programmes-and-courses/bachelor-programmes/images/computer-graphic-arts/fayburrow-960x480-v2.jpg',
    title: 'Best Spring Offer',
    subTitle: 'Computer art',
    number: '20',
    backgroundColor: AppColors.cornflowerblue,
  },
  {
    key: 3,
    source: 'https://i.redd.it/djh0glv80bua1.jpg',
    title: 'Best Spring Offer',
    subTitle: 'Drawing art',
    number: '40',
    backgroundColor: AppColors.greenyellow,
  },
];
export const cartList = [
  {
    key: 1,
    source:
      'https://cdn.shopify.com/s/files/1/0036/8757/9760/files/82.jpg?v=1604230225',
    itemName: 'Abstract Art',
    price: '$200',
    counter: '1',
  },
  {
    key: 2,
    source: 'https://i.redd.it/djh0glv80bua1.jpg',
    itemName: 'Drawing art',
    price: '$140',
    counter: '2',
  },
  {
    key: 3,
    source:
      'https://static.vecteezy.com/system/resources/thumbnails/000/225/241/small_2x/hand-gesture-modern-pop-art-vector.jpg',
    itemName: 'Pop Art',
    price: '$230',
    counter: '1',
  },
];
