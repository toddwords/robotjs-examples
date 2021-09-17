let robot = require("robotjs");
let screenSize = robot.getScreenSize();
let height = screenSize.height;
let width = screenSize.width;

// Commands

// Mouse
// robot.moveMouse(x, y);
// robot.moveMouseSmooth(x, y); MUCH CREEPIER
// robot.mouseClick(); robot.mouseClick("right") for right click; robot.mouseClick("left", true) for double click
// robot.dragMouse(100, 100);

// Keyboard
// robot.typeString("Hello World");
// robot.typeStringDelayed("Hello World", 100) the second number is charactersPerMinute to type
// robot.keyTap("enter");

// sleep(milliseconds)
// Will wait for that number of milliseconds before moving on. 1000ms = 1 second

//Put your code here
//spooky email on gmail
robot.keyTap("s", "command")
robot.typeString("chrome")
robot.keyTap("enter")
robot.typeString("gmail")
robot.keyTap("enter")
sleep(2000)
robot.keyTap("f", "control")
robot.typeString("compose")
robot.keyTap("enter")
robot.keyTap("escape")
robot.keyTap("enter")
robot.keyTap("j")
robot.keyTap("tab")
robot.keyTap("tab")
robot.typeString("hello")
robot.keyTap("tab")
while(true){
  robot.typeString("hello there")
  sleep(2000)
}


function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}