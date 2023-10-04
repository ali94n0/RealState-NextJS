const { default: mongoose, mongo } = require("mongoose");

const ConnectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connect to db");
};

export default ConnectDB;
