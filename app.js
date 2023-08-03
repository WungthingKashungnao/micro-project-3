import data from "./food.json" assert { type: "json" };
// const result = JSON.stringify(myJson);
// const data = JSON.parse(result);

let all = document.getElementById("all");
let veg = document.getElementById("veg");
let fruit = document.getElementById("fruit");
let protein = document.getElementById("protein");
let nuts = document.getElementById("nuts");
let grains = document.getElementById("grains");
let dairy = document.getElementById("dairy");
let highCalorie = document.getElementById("highCalorie");
let lowCalorie = document.getElementById("lowCalorie");
let sortProtein = document.getElementById("sortProtein");
let sortCab = document.getElementById("sortCab");
// res output declearation start
let resultOutput = document.getElementById("result");
// res output declearation end

// resultOutput.innerHTML = "he im the result";
//tsaks functions start

// function to display all food items
const displayAll = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("Displaying all food items");
  for (const iterator of data) {
    let p = document.createElement("p");
    let hr = document.createElement("hr");
    let pText = document.createTextNode(
      `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
    );
    p.appendChild(pText);
    document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode

    resultOutput.appendChild(p);
    resultOutput.appendChild(hr);
    console.log(iterator);
  }
};

const displayVegetables = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with category vegetables items");
  for (const iterator of data) {
    if (iterator.category === "Vegetable") {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayFruit = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with category fruit items");
  for (const iterator of data) {
    if (iterator.category === "Fruit") {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayProtein = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with category protein items");
  for (const iterator of data) {
    if (iterator.category === "Protein") {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayNuts = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with category nuts items");
  for (const iterator of data) {
    if (iterator.category === "Nuts") {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayGrains = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with category Grains items");
  for (const iterator of data) {
    if (iterator.category === "Grain") {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayDairy = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with category Dairy items");
  for (const iterator of data) {
    if (iterator.category === "Dairy") {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayHighCalorie = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with calorie above 100");
  for (const iterator of data) {
    if (iterator.calorie > 100) {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category} \nCalorie: ${iterator.calorie}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displayLowCalorie = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log("displaying all the food items with calorie below 100");
  for (const iterator of data) {
    if (iterator.calorie < 100) {
      let p = document.createElement("p");
      let hr = document.createElement("hr");
      let pText = document.createTextNode(
        `Name: ${iterator.foodname} \nCategory: ${iterator.category} \nCalorie: ${iterator.calorie}`
      );
      p.appendChild(pText);
      document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
      resultOutput.appendChild(p);
      resultOutput.appendChild(hr);
      console.log(iterator);
    }
  }
};

const displaySortProtein = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log(
    "displaying all the food items with highest protien content to lowest"
  );

  // sorting the data based on proteins and displaying on output
  let newData = data;
  let sorted = newData.sort((a, b) => {
    return b.protiens - a.protiens;
  });

  for (const iterator of sorted) {
    let p = document.createElement("p");
    let hr = document.createElement("hr");
    let pText = document.createTextNode(
      `Name: ${iterator.foodname} \nCategory: ${iterator.category} \nProteins: ${iterator.protiens}`
    );
    p.appendChild(pText);
    document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
    resultOutput.appendChild(p);
    resultOutput.appendChild(hr);
    console.log(iterator);
  }
};

const displaySortCab = () => {
  resultOutput.innerHTML = "";
  console.clear();
  console.log(
    "displaying all the food items with lowest cab content to highest"
  );

  // sorting the data based on cab and displaying on output
  let newData = data;
  let sorted = newData.sort((a, b) => {
    return a.cab - b.cab;
  });

  for (const iterator of sorted) {
    let p = document.createElement("p");
    let hr = document.createElement("hr");
    let pText = document.createTextNode(
      `Name: ${iterator.foodname} \nCategory: ${iterator.category} \nCab: ${iterator.cab}`
    );
    p.appendChild(pText);
    document.body.style = "white-space: pre;"; //so that we can use white spaces in createtextnode
    resultOutput.appendChild(p);
    resultOutput.appendChild(hr);
    console.log(iterator);
  }
};
//tsaks functions end

// calling function on button click
all.onclick = displayAll;
veg.onclick = displayVegetables;
fruit.onclick = displayFruit;
protein.onclick = displayProtein;
nuts.onclick = displayNuts;
grains.onclick = displayGrains;
dairy.onclick = displayDairy;
highCalorie.onclick = displayHighCalorie;
lowCalorie.onclick = displayLowCalorie;
sortProtein.onclick = displaySortProtein;
sortCab.onclick = displaySortCab;
