let score=0;
let cross=true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

scoreCont=document.querySelector(".scoreCont");

setTimeout(() => {
  audio.play()
}, 1000);

document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode)
  if (e.keyCode == 38) {
    mario = document.querySelector('.mario');
    mario.classList.add('animateDino');
      setTimeout(() => {
        mario.classList.remove('animateDino')
      }, 700);
  }

  
  if (e.keyCode == 39) {
    mario = document.querySelector('.mario');
    marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    mario.style.left = marioX + 200 + "px";
}


if (e.keyCode == 37) {
  mario = document.querySelector('.mario');
  marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
  mario.style.left = (marioX - 200) + "px";
}


}

setInterval(() => {
  mario = document.querySelector('.mario');
  gameOver=document.querySelector(".gameOver");
  obstacle=document.querySelector(".obstacle");
  
  marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
  marioY = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

  obstacleX=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  obstacleY=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

  offsetX=Math.abs(marioX-obstacleX);
  offsetY=Math.abs(marioY-obstacleY);

  if(offsetX < 73 && offsetY < 52)
  {
    gameOver.innerHTML="Reload to Start the Game Again"
    obstacle.classList.remove('obstacleAni');
    cross=false;
    audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);

  }

  else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);

    
    setTimeout(() => {
      aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.05;
      obstacle.style.animationDuration = newDur + 's';
     // console.log('New animation duration: ', newDur)
  }, 500);

  }

}, 100);

function updateScore(score) {
   scoreCont.innerText="Your Score :"+score;
  
}
