var Combinada, Especial, Mexicana ,Napolitana, Pollo, Portenia, espinaca;
var CombinadaImg, EspecialImg, MexicanaImg ,NapolitanaImg, PolloImg, PorteniaImg, espinacaImg;
var CombinadaG, EspecialG, MexicanaG,NapolitanaG, PolloG, PorteniaG, espinacaG;
var Logotipo, logotipoImg;

function preload(){
  
 CombinadaImg = loadImage("COMBINADA.png");
 EspecialImg = loadImage("ESPECIAL.png");
 MexicanaImg = loadImage("MEXICANA.png");
 NapolitanaImg = loadImage("NAPOLITANA.png");
 PolloImg = loadImage("POLLO.png");
 PorteniaImg = loadImage("PORTENIA.png");
 logotipoImg = loadImage("Logo.png");
 espinacaImg = loadImage("ESPINACA.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  Logotipo = createSprite(width/2, height/2, 50,50);
  Logotipo.addImage(logotipoImg);
  Logotipo.scale = width/1000;
  
  CombinadaG = new Group();
  EspecialG = new Group();
  MexicanaG = new Group();
  NapolitanaG = new Group();
  PolloG = new Group();
  PorteniaG = new Group();
  espinacaG = new Group();

  edges = createEdgeSprites();
}

function draw() {
  background("black");
  
  
  var select_pizza = Math.round(random(0,10));
  
  if (World.frameCount % 10 == 0) {
    if (select_pizza == 1) {
      COMBINADA();
    } else if (select_pizza == 2) {
      ESPECIAL();
    } else if (select_pizza == 3) {
      MEXICANA();
    } else if (select_pizza == 4) {
      NAPOLITANA();
    } else if (select_pizza == 5) {
      POLLO();
    } else if (select_pizza == 6) {
      PORTENIA();
    }else {
      ESPINACA();
    }
  }
  
   CombinadaG.bounceOff(Logotipo);
   EspecialG.bounceOff(Logotipo);
   NapolitanaG.bounceOff(Logotipo);
   MexicanaG.bounceOff(Logotipo);
   PolloG.bounceOff(Logotipo);
   PorteniaG.bounceOff(Logotipo);
   espinacaG.bounceOff(Logotipo);
  
  drawSprites();
}

function COMBINADA() {
  var comb = createSprite(Math.round(random(20,1800)),height,50,50);
  comb.addImage(CombinadaImg);
  comb.velocityY = -3;
  comb.lifetime = 250;
  comb.scale = width/4000;
  comb.bounceOff(Logotipo);
  CombinadaG.add(comb);
}

function ESPECIAL() {
  var esp = createSprite(Math.round(random(20,1800)),height, 10, 10);
  esp.addImage(MexicanaImg);
  esp.velocityY = -3;
  esp.lifetime = 250;
  esp.scale = width/4000;
  EspecialG.add(esp);
}

function NAPOLITANA() {
  var nap = createSprite(Math.round(random(20,1800)),height, 10, 10);
  nap.addImage(NapolitanaImg);
  nap.velocityY = -3;
  nap.lifetime = 250;
  nap.scale = width/4000;
  NapolitanaG.add(nap);
}

function POLLO() {
  var poll = createSprite(Math.round(random(20,1800)),height, 10, 10);
  poll.addImage(PolloImg);
  poll.velocityY = -3;
  poll.lifetime = 250;
  poll.scale = width/4000;
  PolloG.add(poll);
}

function PORTENIA() {
  var port = createSprite(Math.round(random(20,1800)),height, 10, 10);
  port.addImage(PorteniaImg);
  port.velocityY = -3;
  port.lifetime = 250;
  port.scale = width/4000;
  PorteniaG.add(port);
}

function MEXICANA() {
  var mex = createSprite(Math.round(random(20,1800)),height, 10, 10);
  mex.addImage(CombinadaImg);
  mex.velocityY = -3;
  mex.lifetime = 250;
  mex.scale = width/4000;
  MexicanaG.add(mex);
}

function ESPINACA() {
  var espin = createSprite(Math.round(random(20,1800)),height, 10, 10);
  espin.addImage(CombinadaImg);
  espin.velocityY = -3;
  espin.lifetime = 250;
  espin.scale = width/4000;
  espinacaG.add(espin);
}
