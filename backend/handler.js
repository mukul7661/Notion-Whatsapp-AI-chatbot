const serverless = require("serverless-http");
const express = require("express");
const app = express();

// const AWS = require("aws-sdk");
// const dynamoDb = new AWS.DynamoDB.DocumentClient();

const token = process.env.TOKEN;

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.get("/webhooks", (req, res) => {
  if (
    req.query["hub.mode"] == "subscribe" &&
    req.query["hub.verify_token"] == token
  ) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(400);
  }
});

app.post("/webhooks", (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body, "body");
  if (body.field !== "messages") {
    // not from the messages webhook so dont process
    return res.sendStatus(400);
  }
  const reviews = body.value.messages.map((message) => {
    const reviewInfo = {
      TableName: process.env.REVIEW_TABLE,
      Item: {
        phonenumber: message.from,
        review: message.text.body,
      },
    };
    // return dynamoDb.put(reviewInfo).promise();
  });
  // return 200 code once all reviews have been written to dynamoDB
  // return Promise.all(reviews).then((data) =>
  res.sendStatus(200);
});
module.exports.handler = serverless(app);

//secret_ije6BuAzisJ3xmKui7Z0FDisZcpumYuy8VK2aSk6h9z
