const mongoose=require('mongoose');

const mqtt=require('mqtt')

const client=mqtt.connect("mqtt://broker.hivemq.com:1883");

var topic="/intensity"
var message="Fault in LED"

var plotly=require('plotly')("sharmasat","f36EQa6zvyIpMmiQZ6Vj")

time=Date.now()

reading=Math.random()*100;
if(reading<20){
    client.on('connect',()=>{
        console.log('mqtt connected');
        client.publish(topic,message);
        console.log('published to topic:'+topic+" with message:"+message);
    });
}


var data={
    x:[],
    y:[],
    type:"scatter"
}
setInterval(sensortest,10000);

function sensortest(){

    const Sensor=require('./models/sensor');

    mongoose.connect('mongodb+srv://satvik:sharma@cluster0.dwfow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    start=Date.now();

    const sensordata = {
        id: 0,
        name: "LEDsensor",
        address: "Building 1",
        time: Date.now(),
        led_intensity:10
       }
       
    
    sensordata.led_intensity=reading;
       
    const jsonString=JSON.stringify(sensordata);
    console.log(jsonString);

        
    

    const newSensor = new Sensor({
        id: sensordata.id,
        name: sensordata.name,
        address: sensordata.address,
        time: sensordata.time,
        led_intensity: sensordata.led_intensity
        });

    newSensor.save().then(doc=>{
        console.log(doc);
    }).then(()=>{
        end=Date.now();
        time=end-start;
        data.x.push((new Date()).toISOString());
        data.y.push(time);
        var graphOptions={filename:"LED intensity",fileopt:"overwrite"};
        plotly.plot(data,graphOptions,function(err,msg){
            if(err) return console.log(err);
            console.log(msg);
        });
        mongoose.connection.close();
    });
}
