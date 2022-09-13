import { generateId } from "../Utils/generateId.js";

export class Car {
  /**
   * The data needed to make a car
   * @param {{make: string, model: string, year: number, price: number, description: string, imgUrl: string, id?:string}} data
   */
  constructor(data) {
    this.id = data.id || generateId();
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
    this.imgUrl =
      data.imgUrl || "https://www.autolist.com/assets/listings/default_car.jpg";
  }

  get CarCardTemplate() {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="${this.make}-${this.model}" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.make} | ${this.model} ${this.year}
          </h5>
          <p>
            <strong>$ ${this.price}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `;
  }
}
