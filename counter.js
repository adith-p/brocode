document.getElementById("dec").onclick = function () {
    let count = Number(document.getElementById("count").innerHTML);
    count--;

    document.getElementById("count").innerHTML = count;

}
document.getElementById("inc").onclick = function () {
    let count = Number(document.getElementById("count").innerHTML);
    count++;

    document.getElementById("count").innerHTML = count;

}
document.getElementById("reset").onclick = function () {
    let count = Number(document.getElementById("count").innerHTML);
    count = 0;

    document.getElementById("count").innerHTML = count;

}