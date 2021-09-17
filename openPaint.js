let robot = require("robotjs");
let screenSize = robot.getScreenSize();
let height = screenSize.height;
let width = screenSize.width;

// Commands

// Commands

// Mouse
// robot.moveMouse(x, y);
// robot.moveMouseSmooth(x, y); MUCH CREEPIER
// robot.mouseClick(); robot.mouseClick("right") for right click; robot.mouseClick("left", true) for double click
// robot.mouseToggle("down") / robot.mouseToggle("up")
// robot.dragMouse(100, 100);

// Keyboard
// robot.typeString("Hello World");
// robot.typeStringDelayed("Hello World", 100) the second number is charactersPerMinute to type
// robot.keyTap("enter");

// sleep(milliseconds)
// Will wait for that number of milliseconds before moving on. 1000ms = 1 second

//Put your code here


robot.moveMouseSmooth(0,height)
robot.mouseClick()
robot.typeString("paint")
robot.keyTap("enter")
robot.moveMouseSmooth(200,200)
robot.dragMouse(500,500)
robot.moveMouseSmooth(500,200)
robot.dragMouse(200,500)


function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}