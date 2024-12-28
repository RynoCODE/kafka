const {kafkaClient} = require('./client');

async function init() {
    const consumer = kafkaClient.consumer({groupId: 'user-1'});
    await consumer.connect();
    console.log("Consumer Client Connected.");

    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true
    });
    await consumer.run({
        eachMessage: async({ topic,partition,message,heartbeat,pause }) => {
            console.log(`[${topic}]: Part:${partition}: `,message.value.toString())
        }
    })
}
init();