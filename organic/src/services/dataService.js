let catalog = [
  {
    Title: "Apple",
    Price: 1.31,
    Category: "Fruit",
    Image: "apple.jpg",
    _id: "1",
  },
  {
    Title: "Banana",
    Price: 0.64,
    Category: "Fruit",
    Image: "banana.jpg",
    _id: "2",
  },
  {
    Title: "Mango",
    Price: 1.5,
    Category: "Fruit",
    Image: "mango.jpg",
    _id: "3",
  },
  {
    Title: "Blueberries",
    Price: 2.16,
    Category: "Fruit",
    Image: "blueberries.jpg",
    _id: "4",
  },
  {
    Title: "Asparagus",
    Price: 1.0,
    Category: "Vegetables",
    Image: "asparagus.jpg",
    _id: "5",
  },
  {
    Title: "Broccoli",
    Price: 0.48,
    Category: "Vegetables",
    Image: "broccoli.jpg",
    _id: "6",
  },
  {
    Title: "Cabbage",
    Price: 0.62,
    Category: "Vegetables",
    Image: "cabbage.jpg",
    _id: "7",
  },
  {
    Title: "Sourdough",
    Price: 7.83,
    Category: "Bread",
    Image: "sourdough.jpg",
    _id: "8",
  },
  {
    Title: "Wheat",
    Price: 2.42,
    Category: "Bread",
    Image: "wheat.jpg",
    _id: "9",
  },
  {
    Title: "Rye",
    Price: 2.48,
    Category: "Bread",
    Image: "rye.jpg",
    _id: "10",
  },
  {
    Title: "Chicken",
    Price: 1.63,
    Category: "Meat",
    Image: "chicken.jpg",
    _id: "11",
  },
  {
    Title: "Ribeye",
    Price: 12.99,
    Category: "Meat",
    Image: "ribeye.jpg",
    _id: "12",
  },
  {
    Title: "Bacon",
    Price: 6.6,
    Category: "Meat",
    Image: "bacon.jpg",
    _id: "13",
  },
];

class DataService {
  getProducts() {
    return catalog;
  }
}
export default DataService;
