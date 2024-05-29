let inputelem = document.getElementById("inpu")
let clickbtn = document.querySelector(".btn")
let todoFirst = document.getElementById("todoFirst")
const addtodo = () => {
    todoFirst.textContent = inputelem.value;
}
clickbtn.addEventListener("click", () => {
    addtodo();
});