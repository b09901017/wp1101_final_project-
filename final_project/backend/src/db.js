const mongoose = require("mongoose")

const urlsschema = new mongoose.Schema({

    origin : String,
    short : String

})

module.exports = mongoose.model("urls",urlsschema)

