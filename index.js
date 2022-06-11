const getHtmlElement = (selector, type) => {
  return type === "all"
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
};

const enableBtn = () => {
  const btn = getHtmlElement(".card__btn");
  btn.classList.remove("disabled");
};

const handleSelect = (e) => {
  enableBtn();
  const ratings = getHtmlElement(".number", "all");
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
  const ratingCard = getHtmlElement("#card");
  const thksCard = getHtmlElement("#card--thks");
  if (value && value > 0 && value <= 5) {
    ratingCard.style.display = "none";
    displayRatingVaue(value);
    thksCard.style.display = "initial";
  }
};

const attachEvents = () => {
  let value = "";
  const ratings = getHtmlElement(".number", "all");
  for (rate of ratings) {
    rate.addEventListener("click", (e) => {
      value = handleSelect(e, value);
    });
  }

  const btn = getHtmlElement(".card__btn");
  btn.addEventListener("click", () => handleSubmit(value));
  return value;
};

const displayRatingVaue = (value) => {
  const node = getHtmlElement("#thks__fb");
  node.textContent = `You selected ${value} of 5`;
};

attachEvents();
