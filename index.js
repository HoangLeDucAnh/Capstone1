//rotate the arrow in the QandA section
let liQandAList = document.querySelectorAll(".liQandA");
let iQandAList = document.querySelectorAll(".iQandA");
liQandAList.forEach((curVal, index) => {
  let isClicked = false;
  curVal.onclick = function () {
    isClicked = !isClicked;
    iQandAList[index].classList.toggle("rollUp", isClicked);
  };
});

//hide and show the right bar
let showBar = document.querySelector(".showBar");
let rightBar = document.querySelector(".rightBar");
showBar.onclick = function () {
  showBar.classList.toggle("click");
  rightBar.classList.toggle("show");
};
