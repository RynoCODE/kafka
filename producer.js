const {kafkaClient} =require('./client');

async function init() {
    const producer = kafkaClient.producer();
    console.log('Connecting Producer->>>>');
    await producer.connect();
    console.log("Producer Connected.");
    await producer.send({
        topic: 'rider-updates',
        messages:[
            {
                partition: 0,
                key: 'location-update', 
                value: JSON.stringify({name:'Vignesh',location:'NE'})
            }
        ]
    });
    producer.disconnect();
    console.log("Producer Disconnect.");
}
init();