function preload(){
  pic = loadImage("pink.jpg")
  song=  loadSound("song.mp3")
  song2= loadSound("nazmnazm.mp3")
  song3= loadSound("happyface.mp3")
}
  

function setup() {
  createCanvas(windowWidth,windowHeight);
  t5=createSlider(0,1,0.1,0.1)
  button=createButton("dear ex best friend")
  button2=createButton("Stop")
  button3=createButton("Nazm Nazm")
  button4=createButton("Happy Face")
  button.mousePressed(startsong)
  button2.mousePressed(stopsong)
  button3.mousePressed(startsong2)
  button2.mousePressed(stopsong)
  button4.mousePressed(startsong3)
  button2.mousePressed(stopsong)
  
}

function draw() {
  background(pic);
  song.setVolume(t5.value())
  song2.setVolume(t5.value())
  song3.setVolume(t5.value())
}

function startsong(){
  song.play()
  song2.stop()
  song3.stop()
}


function startsong2(){
  song2.play() 
  song.stop()
  song3.stop()
}


function startsong3(){
  song3.play()
  song2.stop()
  song.stop()
}

function stopsong(){
  song.stop() 
  song2.stop()
  song3.stop()
}
