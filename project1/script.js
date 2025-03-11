const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

// Fetch random user and add money
const getRandomUser = async () => {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  //   extracting only important information of user
  const user = data.results[0];

  //   creating user object with first name, last name and adding money to them
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
};

getRandomUser();
getRandomUser();
getRandomUser();

// Add new user / new object to data array initialized in above
function addData(obj) {
  data.push(obj);
}
