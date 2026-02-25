const countnumber= document.getElementById("countnumber");
const augmenter= document.getElementById("augmenter");
const reset= document.getElementById("reset");
const diminuer= document.getElementById("diminuer");
let count=0;

augmenter.onclick = function () {
    count++
    countnumber.textContent=count
}
diminuer.onclick = function () {
    count--
    countnumber.textContent=count
}
reset.onclick = function () {
    countnumber.textContent=0
}