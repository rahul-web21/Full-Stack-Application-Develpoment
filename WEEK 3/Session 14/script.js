let score = 0;
const team = "India";

function addScore() {
  score += 10;
  document.getElementById("score").innerText =
    `${team} Score: ${score}`;
}

const generateReceipt = (price, tip) => {
  alert(`Total Bill: ₹${price + tip}`);
};

// Spread
const collegeFriends = ["A", "B"];
const workFriends = ["C", "D"];
const partyList = ["Me", ...collegeFriends, ...workFriends];

// Promise
let pizza = new Promise((res) => {
  setTimeout(() => res("🍕 Delivered"), 2000);
});

pizza.then(msg => console.log(msg));
