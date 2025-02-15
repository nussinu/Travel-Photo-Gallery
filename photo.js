const header = document.querySelector("header")
const headerbutton = document.querySelector(".back")
const headerh1 = document.querySelector("header h1")
const headerp = document.querySelector("header p")
const gridhead = document.querySelector(".gridhead")
const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const grid1 = document.querySelector(".grid1")
const grid2 = document.querySelector(".grid2")
const grid3 = document.querySelector(".grid3")

b1.onclick = showPictures1;
b2.onclick = showPictures2;
b3.onclick = showPictures3;
headerbutton.onclick = goBack;

function showPictures1() {
    header.style.marginBottom = "1.7rem";
    headerh1.style.display = "none";
    headerp.style.display = "none";
    headerbutton.style.display = "inline";
    gridhead.style.display = "none";
    grid1.style.display = "grid";
}

function showPictures2() {
    header.style.marginBottom = "1.7rem";
    headerh1.style.display = "none";
    headerp.style.display = "none";
    headerbutton.style.display = "inline";
    gridhead.style.display = "none";
    grid2.style.display = "grid";
}

function showPictures3() {
    header.style.marginBottom = "1.7rem";
    headerh1.style.display = "none";
    headerp.style.display = "none";
    headerbutton.style.display = "inline";
    gridhead.style.display = "none";
    grid3.style.display = "grid";
}

function goBack() {
    grid1.style.display = "none";
    grid2.style.display = "none";
    grid3.style.display = "none";
    header.style.textAlign = "center";
    header.style.marginBottom = "4rem";
    headerh1.style.display = "block";
    headerp.style.display = "block";
    gridhead.style.display = "grid";
    headerbutton.style.display = "none";
}