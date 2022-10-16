const landingProfileGreetings = document.querySelector(
  ".landing-profile__greetings"
);
const landingProfileDesc = document.querySelector(".landing-profile__desc");
const landingProfileHeader = document.querySelector(".landing-profile__header");

let newText = "Hello, my name is";
landingProfileGreetings.innerText = newText;

let description = {
  dev: "Frontend Web Developer",
  ui: "UI/UX Engineer",
  adobePhotoshop: "Graphics Designer",
  lightRoom: "Photographer",
  currentOccupation: "Student",
  programmeOfStudy: "BA. Linguistics",
  country: "Ghana",
  nameOfSchool: "KNUST",
};

landingProfileDesc.innerText = `a ${description.currentOccupation} at ${description.nameOfSchool}, ${description.country}, who is pursuing his first degree in ${description.programmeOfStudy}. I am a self-taught ${description.adobePhotoshop}, ${description.ui}, ${description.lightRoom} & ${description.dev}`;


let firstName ="Evans";
let lastName = "Elabo";

landingProfileHeader.innerText = `${lastName} ${firstName}`.toUpperCase();


let colorChanger = landingProfileHeader;

colorChanger.style.color = "#2C3639";

