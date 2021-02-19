const slider = document.getElementById("range");
const sliderProgress = document.querySelector(".content__slidebar__progress");
const pageviews = document.querySelector(".content__pageviews__amount");
const price = document.querySelector(".content__price__number");
const toggle = document
  .querySelector(".content__toggle__switch")
  .querySelector("input");
console.log(toggle.checked);
const time = document.querySelector(".content__price__time");

console.log(sliderProgress);
console.log(slider);

slider.addEventListener("input", modifyPrice);

toggle.addEventListener("click", () => {
  modifyPrice();
  if (toggle.checked) {
    time.textContent = "/year";
  } else {
    time.textContent = "/month";
  }
});

function calcAnualPrice(price) {
  if (toggle.checked) {
    let total = price * 12;
    console.log(total);
    return total - (total / 100) * 25;
  }
  return price;
}

function modifyPrice() {
  let index = slider.value;
  let amount = 0;

  if (index == 1) {
    sliderProgress.style.width = "0%";
    amount = 8;
    amount = calcAnualPrice(amount);
    price.textContent = "$" + amount;
    pageviews.textContent = "10k";
  } else if (index == 2) {
    sliderProgress.style.width = "23%";
    amount = 12;
    amount = calcAnualPrice(amount);
    price.textContent = "$" + amount;
    pageviews.textContent = "50k";
  } else if (index == 3) {
    sliderProgress.style.width = "46%";
    amount = 16;
    amount = calcAnualPrice(amount);
    price.textContent = "$" + amount;
    pageviews.textContent = "100k";
  } else if (index == 4) {
    sliderProgress.style.width = "69%";
    amount = 24;
    amount = calcAnualPrice(amount);
    price.textContent = "$" + amount;
    pageviews.textContent = "500k";
  } else {
    sliderProgress.style.width = "92%";
    amount = 36;
    amount = calcAnualPrice(amount);
    price.textContent = "$" + amount;
    pageviews.textContent = "1m";
  }
}
