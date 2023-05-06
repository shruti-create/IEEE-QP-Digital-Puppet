# IEEE-QP-Digital-Puppet

## Project Goal:

Based on the user's hand movement at the start of the program, different dancing 3D figures are displayed. 

## Usage: 

1) A glove with a sensor connected to an arduino will determine the hand movement and provide output on what it is.
2) JS Server reads the Arduino output and plays an animation based on the hand movement detected. 
3) Server can be opened on any device (ipad/iphone reccomended).
4) Plastic pyramid will be placed on the device so that the animation appears 3-Dimensional by reflecting off the sides. 

## Instructions: 
- npm install --save express nodemon 
- npm install serialport 
- npm install socket.io 
- Connect sensory glove with arduino to Laptop and write path into const port in server.js
- Run the server.js in terminal by typing: node server.js
- Open server in chosen device, put plastic pyramid on device

