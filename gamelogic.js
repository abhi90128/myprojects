score = 0;
cross = true;
song = new Audio("Excuses.mp3")
setTimeout(() => {
    song.play()
}, 1000);
   


document.onkeydown = function (m) {
    console.log("keycode is ", m.keyCode)
    if (m.keyCode == 38) {
        console.log("chl rha hai")
        Player = document.querySelector(".player")
        Player.classList.add("animateplayer")
        setTimeout(() => {
            Player.classList.remove("animateplayer")

        }, 700);
    }
    if (m.keyCode == 39) {
        Player = document.querySelector(".player")
        Player.style.transform="rotateY(360deg)"
        dinox = parseInt(window.getComputedStyle(Player, null).getPropertyValue("left"))
        Player.style.left = dinox + 60 + "px"

    }
    else if (m.keyCode == 37) {

        Player = document.querySelector(".player")
        Player.style.transform="rotateY(180deg)"
        dinox = parseInt(window.getComputedStyle(Player, null).getPropertyValue("left"))
        Player.style.left = dinox - 60 + "px"

    }
}
window.obstacle = document.querySelector(".obstacle")
setInterval(() => {
    Player = document.querySelector(".player")
    obstacle = document.querySelector(".obstacle")

    gameover = document.querySelector(".gameover")
    dx = parseInt(window.getComputedStyle(Player, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(Player, null).getPropertyValue("top"))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))
    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)
    console.log(offsetX, offsetY)
    if (offsetX < 59 && offsetY < 160) {

        gameover.style.visibility = "visible"
        obstacle.classList.remove("obstacleani")
        Player.style.transform="rotateY(270deg)"


    }
    else if (offsetX < 100 && cross) {
        score += 1
        updatescore(score)
        cross = false
        setTimeout(() => {
            cross = true;

        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"))
            newdur = anidur - .01
            obstacle.style.animationDuration = newdur + "s"

          

            

        }, 100);

    }



}, 1);
function updatescore(score) {
    scorecount.innerHTML = "your Score is :" + score
}

