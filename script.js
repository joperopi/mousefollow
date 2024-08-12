console.log("test");

const container = document.getElementById('container');
const follow = document.getElementById("follow");
let ufoPosX = follow.offsetLeft;
let ufoPosY = follow.offsetTop;

container.addEventListener('mousemove', chase);

console.log(follow.offsetLeft, follow.offsetTop);

function chase(e){
    if (ufoPosX > e.clientX) {
        ufoPosX = ufoPosX - 2;
    } else if (ufoPosX < e.clientX) {
        ufoPosX = ufoPosX + 2;
    }

    if (ufoPosY > e.clientY) {
        ufoPosY = ufoPosY - 2;
    } else if (ufoPosY < e.clientY) {
        ufoPosY = ufoPosY + 2;
    }
    console.log(ufoPosX, e.clientX)
    follow.style.left = `${ufoPosX}px`;
    follow.style.top = `${ufoPosY}px`;
}