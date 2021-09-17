let robot = require("robotjs");
let screenSize = robot.getScreenSize();
let height = screenSize.height;
let width = screenSize.width;

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



function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}