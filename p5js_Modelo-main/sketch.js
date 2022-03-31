var ball = {
  x:20,
  y:30,
  d:30,
  xspeed:0,
  yspeed:0,
  color:["blue","red","green","purple"],
};



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(ball.x,ball.y,ball.d);

  fill(ball.color[0]);

  ball.xspeed = 1;

  ball.x += ball.xspeed;


}