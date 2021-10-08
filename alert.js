const mqtt=require('mqtt')
const client=mqtt.connect("mqtt://broker.hivemq.com:1883");

var topic="/intensity"

client.on('connect',()=>{
    client.subscribe(topic);
    console.log('mqtt connected');
});
client.on('message',(topic,message)=>{
    console.log("topic :"+topic)
    console.log("message: "+message)
});