// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const cursor1 = document.querySelector(".cursor1");
// console.log(mouseMove);
const cursor2 = document.querySelector(".cursor2");
// console.log(cursor);
// console.log(cursor);
const cursor3 = document.querySelector(".cursor3");
// console.log(cursor3);

window.addEventListener("mousemove", (e) => {
  // console.log(e);
  cursor1.style.left = e.pageX + "px";
  cursor1.style.top = e.pageY + "px";
});

window.addEventListener("mousemove", (e) => {
  cursor2.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  // cursor2.transform = "scale(2) translate(-50%  -50%)"
});

window.addEventListener("mousemove", (e) => {
  cursor3.style.left = e.pageX + "px";
  cursor3.style.top = e.pageY + "px";
});

// im sofiane
