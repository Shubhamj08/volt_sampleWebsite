const detailButton = document.getElementsByClassName("detail-btn");

for (let i = 0; i < detailButton.length; i++) {
  goToDetailPage(i);
}

function goToDetailPage(i) {
  detailButton[i].addEventListener("click", () => {
    localStorage.setItem("detailView", i);
    console.log(localStorage.getItem("detailView"));
  });
}
