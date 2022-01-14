const mongoose = require('mongoose');
require('dotenv').config();

export default () => {
    mongoose
    .connect(
        process.env.MONGO_URI, {   //連接DB
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    })
    .then((res) => console.log("mongo db connection created"));
};
