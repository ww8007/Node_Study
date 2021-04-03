const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

client.hmset("fruit", {
  lemon: 5000,
  green: 2000,
});

client.hgetall("fruit", (err, res) => {
  console.log(res);
});
