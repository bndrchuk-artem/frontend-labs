document.getElementById("date").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("style1");
});

document.querySelector(".education").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("style2");
});

const image = document.getElementById("city-image");
const container = document.querySelector(".container");

document.getElementById("add").addEventListener("click", () => {
  if (!document.getElementById("city-image")) {
    container.innerHTML = `<img src="https://volare.volotea.com/wp-content/uploads/2023/04/cgn_city.jpg" alt="Кельн" id="new-pic">`;
  }
});

document.getElementById("zoom-in").addEventListener("click", () => {
  const img = document.getElementById("new-pic");
  if (img) {
    img.style.transform = "scale(2)";
  } else {
    return;
  }
});

document.getElementById("zoom-out").addEventListener("click", () => {
  const img = document.getElementById("new-pic");
  if (img) {
    img.style.transform = "scale(1)";
  } else {
    return;
  }
});

document.getElementById("delete").addEventListener("click", () => {
  const img = document.getElementById("new-pic");
  if (img) {
    img.remove();
  }
});