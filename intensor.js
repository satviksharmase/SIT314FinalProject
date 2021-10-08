const Gpio=require('pigpio').Gpio;
 
 const trig=new Gpio(18,{
mode:Gpio.OUTPUT,
pullUpDown:Gpio.PUD_UP,
edge:Gpio.FALLING_EDGE
 });
 
 const echo=new Gpio(24,{
mode:Gpio.INPUT,
pullUpDown:Gpio.PUD_UP,
edge:Gpio.FALLING_EDGE
 });
 
 const led=new Gpio(4,{
mode:Gpio.Output
});

 console.log('GPIO INPUTS');

trig.on('interrupt',function(level){
console.log('trig')
//led.pwmWrite('HIGH');
});

echo.on('interrupt',function(level){
console.log('echo')
//led.pwmWrite('HIGH');
});