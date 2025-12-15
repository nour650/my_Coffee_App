/* src/data/coffeeData.ts */
export const coffeeData = [
  { id: '1', name: 'Cappuccino', price: 50000, category: 'Cappuccino', description: 'With Sugar', image: require('../assets/cappuccino1.png') },
  { id: '2', name: 'Expresso', price: 45000, category: 'Expresso', description: 'Strong & Hot', image: require('../assets/expresso1.png') },
  { id: '3', name: 'Latte', price: 55000, category: 'Latte', description: 'With Milk', image: require('../assets/latte.png') },
];

export const specialOffers = [
  { id: '101', name: 'Mocha', price: 60000, description: 'Chocolate & Coffee', image: require('../assets/mocha.png') , isSpecial: true, // ✅ IMPORTANT
 },
  { id: '102', name: 'Caramel Latte', price: 58000, description: 'Sweet & Smooth', image: require('../assets/caramel-latte.png') ,  isSpecial: true, // ✅ IMPORTANT
},
];

export const categories = [
  { key: 'All', label: 'All', icon: 'local-cafe' },
  { key: 'Cappuccino', label: 'Cappuccino', icon: 'coffee' },
  { key: 'Expresso', label: 'Expresso', icon: 'bolt' },
  { key: 'Latte', label: 'Latte', icon: 'emoji-food-beverage' },
];
