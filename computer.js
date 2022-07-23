
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
  })
  


/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const navigation = document.getElementById("navigation");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

menu && menu.addEventListener("click", () => nav.classList.remove("show"));

/* mudar o header da página quando der scroll */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menor que a altura do header
    header.classList.remove("scroll");
  }
}

const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}
