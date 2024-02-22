/* write a class to calculate the Uber price. */

class UberPrice {
  constructor(dist = 0, rate = 0) {
    this.distance = dist;
    this.price = rate;
  }
  setDistance(distance) {
    this.distance = distance;
  }
  setPrice(price) {
    this.price = price;
  }
  calculatePrice() {
    return this.distance * this.price;
  }
}

let carA = new UberPrice(35, 5).calculatePrice();
console.log(carA);
