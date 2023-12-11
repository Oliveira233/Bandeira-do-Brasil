function setup() {
    createCanvas(1000, 700);
    fill("green");
    rect(0, 0, 1000, 700);
    fill("yellow");
    noStroke();
    triangle(500, 100, 100, 350, 500, 600);
    triangle(500, 100, 900, 350, 500, 600);
    fill("blue");
    circle(500, 350, 300);
    fill("white");
    rect(350, 323, 300, 45);
    fill("green")
    textSize(30)
    let palavra = "Ordem e Progresso"
    text(palavra, 370, 355)
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill("white")
      circle(mouseX, mouseY, random(1, 7))
    }
  }
  