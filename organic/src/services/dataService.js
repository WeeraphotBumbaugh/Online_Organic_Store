import axios from "axios";

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
    Category: "Vegetable",
    Image: "asparagus.jpg",
    _id: "5",
  },
  {
    Title: "Broccoli",
    Price: 0.48,
    Category: "Vegetable",
    Image: "broccoli.jpg",
    _id: "6",
  },
  {
    Title: "Cabbage",
    Price: 0.62,
    Category: "Vegetable",
    Image: "cabbage.jpg",
    _id: "7",
  },
  {
    Title: "Sourdough",
    Price: 7.83,
    Category: "Grain",
    Image: "sourdough.jpg",
    _id: "8",
  },
  {
    Title: "Wheat",
    Price: 2.42,
    Category: "Grain",
    Image: "wheat.jpg",
    _id: "9",
  },
  {
    Title: "Rye",
    Price: 2.48,
    Category: "Grain",
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
const url = "http://127.0.0.1:5000/api";

class DataService {
  async getProducts() {
    // use this line below to run the front end without back end
    //return catalog;
    let resp = await axios.get(`${url}/catalog`);
    return resp.data;
  }
  async getCategories() {
    let resp = await axios.get(`${url}/categories`);
    return resp.data;
  }
  async getCoupons() {
    let resp = await axios.get(`${url}/coupons`);
    return resp.data;
  }
  async postProduct(data) {
    let resp = await axios.post(`${url}/catalog`, data);
    return resp.data;
  }
  async postCoupon(data) {
    let resp = await axios.post(`${url}/coupons`, data);
    return resp.data;
  }
  async deleteProduct(id) {
    let resp = await axios.delete(`${url}/products/${id}`, id);
    return resp.data;
  }
  async deleteCoupon(data) {
    let resp = await axios.delete(`${url}/coupons/${data}`, data);
    return resp.data;
  }
}
export default DataService;
