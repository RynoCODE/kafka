// import { kafkaClient } from "./client";
const {kafkaClient} = require('./client');

async function init(){
    const admin = kafkaClient.admin();
    console.log('Admin Connecting->>>');
    admin.connect();
    console.log('Admin Connected.');
    console.log('Creating Topic.');
    await admin.createTopics({
        topics: [
            {
                topic:"rider-updates",
                numPartition: 2,
            },
        ],
    });
    console.log("Topics Created.");
    console.log('Disconnecting Admin');
    await admin.disconnect();
    console.log("Admin disconnected.");
}
init();
