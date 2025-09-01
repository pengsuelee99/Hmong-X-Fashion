import { Product } from '@/contexts/CartContext';
import productWallet from '@/assets/product-wallet.png';
import productScarf from '@/assets/product-scarf.png';
import productWatch from '@/assets/product-watch.png';
import productHandbag from '@/assets/product-handbag.png';
import productSunglasses from '@/assets/product-sunglasses.png';
import productPerfume from '@/assets/product-perfume.png';
import productBriefcase from '@/assets/product-briefcase.png';
import productJewelry from '@/assets/product-jewelry.png';
import img from '@/assets/img.png';
import hmong from '@/assets/hmong.png';



export const products: Product[] = [
  {
    id: '1',
    name: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ',
    price: 12.47,
    image: productWallet,
    description: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ ຜ້າcotton ທີ່ນິຍົມ ສະດວກ ແລະ ທົນທານ cotton 100% comb 30',
    category: 'ເສື້ອຍຶດ',
    colors: ['Black', 'white'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ',
    price: 12.47,
    image: productScarf,
    description: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ ຜ້າcotton ທີ່ນິຍົມ ສະດວກ ແລະ ທົນທານ cotton 100% comb 30',
    category: 'ເສື້ອຍຶດ',
    colors: ['black', 'white'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ',
    price: 12.47,
    image: productWatch,
    description: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ ຜ້າcotton ທີ່ນິຍົມ ສະດວກ ແລະ ທົນທານ cotton 100% comb 30',
    category: 'ເສື້ອຍຶດ',
    colors: ['white', 'Black'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ',
    price: 12.47,
    image: productHandbag,
    description: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ ຜ້າcotton ທີ່ນິຍົມ ສະດວກ ແລະ ທົນທານ cotton 100% comb 30',
    category: 'ເສື້ອຍຶດ',
    colors: ['Black', 'white'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ',
    price: 12.47,
    image: productSunglasses,
    description: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ ຜ້າcotton ທີ່ນິຍົມ ສະດວກ ແລະ ທົນທານ cotton 100% comb 30',
    category: 'ເສື້ອຍຶດ',
    colors: ['Black', 'white'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Model 3d suelee',
    price: 0.00,
    image: productPerfume,
    description: 'ຂາຍຟຮີໃຜຕ້ອງການຂາຍໃຫ້ເລີຍຫລໍ່ໆ',
    category: 'Model 3d',
    colors: ['Gold Edition'],
    sizes: ['50ml', '100ml']
  },
  {
    id: '7',
    name: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ',
    price: 12.47,
    image: productBriefcase,
    description: 'ເສື້ອຍຶດລາຍມົ້ງເທ່ໆ ຜ້າcotton ທີ່ນິຍົມ ສະດວກ ແລະ ທົນທານ cotton 100% comb 30',
    category: 'ເສື້ອຍຶດ',
    colors: ['Black', 'white'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '8',
    name: 'Model 3d suelee',
    price: 0.00,
    image: productJewelry,
    description: 'ຂາຍຟຮີໃຜຕ້ອງການຂາຍໃຫ້ເລີຍຫລໍ່ໆ',
    category: 'Model 3d',
    colors: [ 'Silver'],
    sizes: ['One Size']
  },
  {
    id: '9',
    name: 'ເກີບມົ້ງງາມໆ',
    price: 15.00,
    image: img,
    description: 'ເກີບມົ້ງງາມໆ ຊື້ເລີຍສາວໆ',
    category: 'fashion',
  },
  {
    id: '10',
    name: 'ເກີບມົ້ງງາມໆ',
    price: 15.00,
    image: hmong,
    description: 'ເກີບມົ້ງງາມໆ ຊື້ເລີຍສາວໆ',
    category: 'fashion',
    colors: ['Black', 'white'],
    sizes: ['regular']
  },
  

  


];

export const categories = [
  'all',
  'ເສື້ອຍຶດ',
  'watches', 
  'Model 3d',
  'beauty',
  'jewelry',
  'fashion'
];

export const priceRanges = [
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $300', min: 200, max: 300 },
  { label: 'Over $300', min: 300, max: Infinity }
];