// const h1 = document.querySelector("h1");
// console.log(h1);

// const headings = document.querySelectorAll("h1");
// console.log(headings);

// const p = document.querySelector(".text");
// console.log(p);

// const texts = document.querySelectorAll(".text");
// console.log(texts);

// const input = document.querySelector("#textInput");
// console.log(input);

// let container = document.querySelector(".container");
// let p = document.createElement("p");
// p.textContent = "Davlatov Muhriddin";
// container.append(p);
// console.log(p);

const friends = [
  "Muhriddin",
  "Abduvali",
  "Olim",
  "Xurshd",
  "Raxmatillo",
  "Shohjahon",
  "Xislat",
  "Ikrom",
  "Dilshod",
  "Odil",
];

let container = document.querySelector(".container");

friends.forEach((friend) => {
  const h1 = document.createElement("h1");
  h1.textContent = friend;
  container.append(h1);
});
