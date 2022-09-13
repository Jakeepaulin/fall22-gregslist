import { generateId } from "../Utils/generateId.js";

export class Job {
  /**
   * The data needed to make a car
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string, imgUrl: string, id?:string}} data
   */

  constructor(data) {
    this.id = generateId();
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }

  get JobCardTemplate() {
    return /*html*/ `
     <div class="col-md-4 col-lg-3 mb-3">
       <div class="card rounded">
         <img
           src="${this.imgUrl}"
           alt="${this.jobTitle}"
           class="img-fluid"
         />
         <div class="card-body">
           <h5 class="text-uppercase">${this.company}</h5>
           <h6>Job Title: ${this.jobTitle}</h6>
           <p>${this.hours} hours/week</p>
           <p>$ ${this.rate}/hour</p>
           <p>${this.description}</p>
         </div>
       </div>
     </div>`;
  }
}
