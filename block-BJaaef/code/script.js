{
  /* <li>
  <div class="flex space-between">
    <img
      src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
      alt="box-pic 1"
    />
    <h2>'Eddard "Ned" Stark'</h2>
  </div>
  <p>
    Lord of Winterfell - Warden of the North - Hand of the King - Married to
    Catelyn (Tully) Stark
  </p>
  <button>Learn More</button>
</li>; */
}

{
  /* <li>
<div class="box-header">
  <img
    src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
    alt=""
  />
  <h2>Eddard "Ned" Stark</h2>
</div>
<p>
  Lord of Winterfell - Warden of the North - Hand of the King -
  Married to Catelyn (Tully) Stark
</p>
<button>Learn More!</button>
</li> */
}

let parentElm = document.querySelector("ul");
let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

allPeople.forEach((person) => {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = person.image;
  img.alt = person.name;
  let h2 = document.createElement("h2");
  h2.innerText = person.name;
  div.append(img, h2);
  let p = document.createElement("p");
  p.innerText = person.description;
  let button = document.createElement("button");
  button.innerText = "Learn More !";
  li.append(div, p, button);
  parentElm.append(li);
});

// let cardHtml = allPeople.map((person) => {
//   return `<li>
//     <div class="flex space-between">
//       <img
//         src= ${person.image}
//         alt=${person.name}
//       />
//       <h2>${person.name}</h2>
//     </div>
//     <p>
//     ${person.description}
//     </p>
//     <a href=${person.wikiLink} class="button">Learn More</a>
//   </li>`;
// });
// parentElm.innerHtml = cardHtml;
