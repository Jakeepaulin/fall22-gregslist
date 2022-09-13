import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function drawJobs() {
  let template = "";
  appState.jobs.forEach((job) => (template += job.JobCardTemplate));
  setHTML("listings", template);
}

export class JobsController {
  constructor() {
    console.log("Jobs Incoming");
    drawJobs();
    appState.on("jobs", drawJobs);
  }

  showJobs() {
    drawJobs();
  }
}
