const div = document.querySelector(".square")
div.addEventListener("click",changeColorFn)


const changeColorFn = ev => {
    ev.target.style.backgroundColor = "red";
    ev.stopPropagation();
}