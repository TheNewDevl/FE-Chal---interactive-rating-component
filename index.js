const getRatings = () => {
  return document.querySelectorAll(".number");
};

const handleSelect = (e) => {
  const ratings = getRatings();
  for (let rate of ratings) {
    rate.removeAttribute("style");
  }
  const selectedRate = e.currentTarget;
  const value = selectedRate.textContent;

  selectedRate.style.backgroundColor = "hsl(25, 97%, 53%)";
  selectedRate.style.color = "#FFF";
  return value;
};

const handleSubmit = (value) => {
  console.log(value);
};

const attachEvents = (first) => {
  let value = "";
  const ratings = getRatings();
  for (rate of ratings) {
    rate.addEventListener("click", (e) => {
      value = handleSelect(e, value);
    });
  }

  const btn = document.querySelector(".card__btn");
  btn.addEventListener("click", () => handleSubmit(value));
  return value;
};

attachEvents();
