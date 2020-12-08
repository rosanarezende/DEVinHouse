const card = document.getElementsByClassName("card")[0];
const cardBody = document.getElementsByClassName("card-body")[0];
const cardText = document.getElementsByClassName("card-text")[0];
const img = document.createElement("img");

const thisMonth = new Date().getMonth() + 1;
let season;

switch (thisMonth) {
  case 1:
  case 2:
  case 3:
    // season = "verão";
    img.src = "./images/verao.jpg";
    img.alt = "verão";
    card.insertBefore(img, cardBody);
    cardText.innerHTML = "Verão";
    break;

  case 4:
  case 5:
  case 6:
    // season = "outono";
    img.src = "./images/outono.jpg";
    img.alt = "outono";
    card.insertBefore(img, cardBody);
    cardText.innerHTML = "Outono";
    break;
    break;

  case 7:
  case 8:
  case 9:
    img.src = "./images/inverno.jpg";
    img.alt = "inverno";
    card.insertBefore(img, cardBody);
    cardText.innerHTML = "Inverno";
    break;
    // season = "inverno";
    break;

  case 10:
  case 11:
  case 12:
    img.src = "./images/primavera.jpg";
    img.alt = "primavera";
    card.insertBefore(img, cardBody);
    cardText.innerHTML = "Primavera";
    break;
    // season = "primavera";
    break;

  default:
    break;
}
