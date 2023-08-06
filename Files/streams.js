const fs = require("fs");

const readStream = fs.ReadStream("./docs/Streams.txt", { encoding: "utf8" });
const writeStream = fs.WriteStream("./docs/blog3.txt");

readStream.on("data", (data) => {
  console.log(data);
  writeStream.write("New Data\n");
  writeStream.write(data);
});
