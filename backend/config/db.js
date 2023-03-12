const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
    `mongo DB connection established :${connect.Connection.name}`  .cyan.underline
    );
  } catch (err) {
    console.log(`error : ${err.message}` .red);
    process.exit(1);
  }
};

module.exports = connectDb;