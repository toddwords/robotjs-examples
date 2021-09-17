# RobotJS Intro and Examples

RobotJS is a desktop automation library that allows you to simulate human mouse movement and keyboard presses. More info at [http://robotjs.io/docs/](robotjs.io)

## Getting Started
- If you do not have node installed, install [https://nodejs.org/en/](NodeJS)
- Create a 'robotjs' folder and enter that folder via Terminal/Command Prompt
- In that folder run 'npm install robotjs' to install 
- Copy/Paste or download 'empty-example.js' or one of the other examples and put them in that folder
- Run a script by typing 'node nameofscript.js' in the terminal, where 'nameofscript' is the name of the file, like 'empty-example' or 'drawX'

## Commands
### Mouse
**robot.moveMouse(x, y)**
Will instantly move the mouse to the position x, y. X is the number of pixels from the left side of the screen. Y is the number of pixels from the top

**robot.moveMouseSmooth(x, y)** 
Same as moveMouse, but much slower and creepier, as if the mouse is controlled by a ghost

**robot.mouseClick()**
Will click the mouse once
**robot.mouseClick("right")**
Will right-click the mouse
**robot.mouseClick("left", true)**
Will double-click the mouse

**robot.mouseToggle("down")** // **robot.mouseToggle("up")
Will hold the mouse button down, or lift it up respectively

**robot.dragMouse(x, y)**
Will drag the mouse to the X, Y position. Must use *robot.mouseToggle("down")* beforehand to drag with mouse held down.

### Keyboard

**robot.keyTap("enter")**
Presses the enter key. Any key can be given to this function, i.e. *robot.keyTap("d")* or *robot.keyTap("backspace")*. Full key list (http://robotjs.io/docs/syntax#keys)[here].

**robot.typeString("Hello World")**
Types out the given string instantly

**robot.typeStringDelayed("Hello World", 100)** 
Types out the string one letter at a time. The second number is the speed in character per minute, the higher it is the faster it will be typed

### Timing
**sleep(milliseconds)**
Will wait for that number of milliseconds before moving on. 1000ms = 1 second. This is not part of RobotJS but is very useful. Included in each example script
