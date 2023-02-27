const carsData = [
  {
    model: "911 Carrera",
    color: "red",
    type: "coupe",
    production: 2022,
    power: 283,
    price: 593000,
    acceleration: "4.0s",
  },
  {
    model: "718 Boxter GTS",
    color: "green",
    type: "cabrio",
    production: 2022,
    power: 283,
    price: 536000,
    acceleration: "4.0s",
  },
  {
    model: "911 Targa S4",
    color: "black",
    type: "cabrio",
    production: 2022,
    power: 283,
    price: 736000,
    acceleration: "4.0s",
  },
  {
    model: "911 Gt3 RS",
    color: "red",
    type: "silver",
    production: 2022,
    power: 459,
    price: 987000,
    acceleration: "3.2s",
  },
  {
    model: "911 carrera",
    color: "blue",
    type: "coupe",
    production: 2022,
    power: 346,
    price: 693000,
    acceleration: "3.7s",
  },
  {
    model: "911 carrera",
    color: "yellow",
    type: "coupe",
    production: 2022,
    power: 420,
    price: 793000,
    acceleration: "4.0s",
  },
];

const $model = document.getElementById("model_name");
const $production = document.getElementById("production");
const $power = document.getElementById("power");
const $acceleration = document.getElementById("acceleration");
const $price = document.getElementById("price");

$model.innerText = `tu będzie model`;
$production.innerText = `tu będzie production`;
$power.innerText = `tu będzie power`;
$acceleration.innerText = `tu będzie acceleration`;
$price.innerText = `tu będzie cena`;
