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
sleep(5000)
robot.typeStringDelayed("hello there, i am a ghost living in your computer", 100)
sleep(10000)
robot.keyTap("enter")
robot.keyTap("enter")
robot.keyTap("enter")
robot.keyTap("enter")
robot.keyTap("enter")
robot.typeStringDelayed("BOO", 100)

// 
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}