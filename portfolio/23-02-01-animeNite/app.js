const IMG_PATH_1 = "./img/";
const IMG_PATH_3 = ".jpg";

const MOVIES = [
  {
    imgFile: "arcane",
    title: "Arcane",
    description:
      "Amidst the escalating unrest between the rich, utopian city of Piltover and its seedy, oppressed underbelly of Zaun, sisters Vi and Jinx find themselves on opposing sides of a brewing conflict over clashing convictions and arcane technologies.",
  },
  {
    imgFile: "irish",
    title: "The Irishman",
    description:
      "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
  },
  {
    imgFile: "monty",
    title: "Monty Python and the Holy Grail",
    description:
      "A comedic send-up of the grim circumstances of the Middle Ages as told through the story of King Arthur and framed by a modern-day murder investigation. When the mythical king of the Britons leads his knights on a quest for the Holy Grail, they face a wide array of horrors, including a persistent Black Knight, a three-headed giant, a cadre of shrubbery-challenged knights, the perilous Castle Anthrax, a killer rabbit, a house of virgins, and a handful of rude Frenchmen.",
  },
  {
    imgFile: "silent",
    title: "A Silent Voice",
    description:
      "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.",
  },
  {
    imgFile: "zootopia",
    title: "Zootopia",
    description:
      "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde (Jason Bateman), a wily fox who makes her job even harder.",
  },
];

function renderImages() {
  const movieList = document.getElementById("movie-list");

  MOVIES.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "image hov";
    div.style.backgroundImage = `url(${IMG_PATH_1 + movie.imgFile + IMG_PATH_3})`
    movieList.appendChild(div);

    
    const description = document.createElement("span");
    description.className = "tooltiptext";
    description.innerText = movie.description;
    div.appendChild(description);
    

    console.log(`${movie.title} added!`);
  });
}

renderImages();

function pollLink() {
  window.open(
    "https://docs.google.com/spreadsheets/d/1gWlDARVftN27O9v5Pg2EQHu2MH2rlGG20D2nWkBPKFA/edit?usp=sharing",
    "_blank"
  );
}
