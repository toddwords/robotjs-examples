let robot = require("robotjs");
let screenSize = robot.getScreenSize();
let height = screenSize.height;
let width = screenSize.width;

// Commands
// robot.moveMouse(x, y);
// robot.moveMouseSmooth(x, y); MUCH CREEPIER
// robot.mouseClick(); robot.mouseClick("right") for right click; robot.mouseClick("left", true) for double click
// robot.dragMouse(100, 100);

// robot.typeString("Hello World");
// robot.keyTap("enter");

//Put your code here
sleep(2000)
robot.moveMouse(200,200)
robot.mouseToggle("down")
robot.dragMouse(500,500)
robot.mouseToggle("up")
robot.moveMouseSmooth(500,200)
robot.mouseToggle("down")
robot.dragMouse(200,500)
robot.mouseToggle("up")


//
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}