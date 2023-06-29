// Initialize score and scoreChange variables
score=0;
scoreChange=true;

// Initialize audio elements
audio=new Audio('audios/music.mp3');
audiogo=new Audio("audios/gameover.mp3");

// Play background music after a delay
setTimeout(() => {
    audio.play();
}, 1000);



document.addEventListener("keydown", function(event) {
     // Move the dino element to the left on ArrowUp key press
    if (event.key === "ArrowUp") {
      console.log("Up arrow key pressed!");
      dino=document.querySelector(".player");
      dino.classList.add("animateDino");
      setTimeout(() => {
        dino.classList.remove("animateDino");
      }, 700);

    }else if(event.key === "ArrowRight"){
        // Move the dino element to the right on ArrowRight key press
        dino=document.querySelector(".player");
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=dinox+112+"px";
    }else if(event.key==="ArrowLeft"){
         // Move the dino element to the left on ArrowLeft key press
        dino=document.querySelector(".player");
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left=dinox-112+"px";
    }
  });

// Check collision and update score
setInterval(() => {
    dino=document.querySelector(".player");
    gameOver=document.querySelector(".gameOver");
    obstacle=document.querySelector(".obstacle");
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    offSetx=Math.abs(dx-ox);
    offSety=Math.abs(dy-oy);
    // console.log(offSetx,offSety);
    if(offSetx<73 && offSety<52){
        // Game over condition
        gameOver.innerHTML="Game Over";
        obstacle.classList.remove("animateObstacle");
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
        dino.classList.add("godown");
        setTimeout(() => {
            dino.style.visibility="hidden";
        }, 500);
        
    }
    else if(offSetx<145 && scoreChange){
        // Increment score and update animation duration
        score+=1;
        updateScore(score);
        scoreChange=false;
        setTimeout(() => {
            scoreChange=true;
        }, 1000);

        setTimeout(() => {
            animationDuration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
            newanimationDuration=animationDuration-0.1;
            obstacle.style.animationDuration=newanimationDuration+'s';
        }, 500);
        
    }
}, 10);

// Update the score on the web page
function updateScore(score){
    scoreCointainer.innerHTML= "Your Score: "+score;
}