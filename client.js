const {Kafka} = require('kafkajs');


exports.kafkaClient = new Kafka({
    brokers: ['192.168.0.136:9092'],
    clientid: "my-app"
})