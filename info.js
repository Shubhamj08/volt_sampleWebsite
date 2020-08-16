const products = document.getElementsByClassName("item");

const item = localStorage.getItem("detailView");
console.log(item);

if (!item) {
  location = "index.html";
} else {
  products[item].style.display = "block";
}
