console.log('artificial art squares');


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120);
  strokeWeight(2);
  frameRate(5);
}


function draw() {

  translate(width / 2, height / 2);

  let angleStep = 10;


  let x1 = random(30, 75);
  let y1 = random(30, 75);
  let x2 = random(30, 75);
  let y2 = random(30, 75);


  for (let i = 0; i < 360; i += angleStep) {

    rotate(angleStep);

    stroke(0);
    fill(0, 0, 200, 40);
    rect(x1, y1, x2, y2);


    if (frameCount > 200) {
      let z1 = random(100, 130);
      let a1 = random(100, 130);
      let z2 = random(100, 130);
      let a2 = random(100, 130);

      stroke(0, 100, 100);
      fill(200, 0, 0, 40);
      rect(z1, a1, z2, a2);

    }

    if (frameCount > 400) {
      let b1 = random(145, 150);
      let c1 = random(145, 150);
      let b2 = random(145, 150);
      let c2 = random(145, 150);

      stroke(128,0,128);
      fill(255,255,102,40);
      rect(b1, c1, b2, c2);

    }

  }

}