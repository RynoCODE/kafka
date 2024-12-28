# Kafka Learn

A simple Node.js project using **KafkaJS** to demonstrate the basic functionality of Apache Kafka, including producing, consuming, and managing topics.

## Features
- **Producer**: Sends messages to the Kafka topic.
- **Consumer**: Listens for messages from the Kafka topic.
- **Admin**: Creates and manages Kafka topics.

## Prerequisites
- Docker installed on your system.
- Apache Kafka and Zookeeper running in Docker containers.

## Setting Up Kafka and Zookeeper
1. Start Zookeeper:
   ```bash
   docker run -d --name zookeeper -p 2181:2181 confluentinc/cp-zookeeper:latest
   ```

2. Start Kafka:
   ```bash
   docker run -d --name kafka -p 9092:9092 \
     --env KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
     --env KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
     --env KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
     --network host \
     confluentinc/cp-kafka:latest
   ```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RynoCODE/kafka-learn.git
   cd kafka-learn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### 1. Admin (Create Topic)
Run the `admin.js` script to create a topic:
```bash
node admin.js
```

### 2. Producer
Send messages to the `rider-updates` topic:
```bash
node producer.js
```

### 3. Consumer
Listen for messages on the `rider-updates` topic:
```bash
node consumer.js
```

## Code Overview

### File Structure
- **client.js**: Initializes the Kafka client.
- **admin.js**: Handles topic creation using the Kafka admin client.
- **producer.js**: Produces messages to the Kafka topic.
- **consumer.js**: Consumes messages from the Kafka topic.

### Dependencies
- [KafkaJS](https://kafka.js.org/): A modern Apache Kafka client for Node.js.

## Contributing
Feel free to fork this repository, open issues, or submit pull requests to improve the project.

## License
This project is licensed under the MIT License.

---

Created by **RynoCODE**

