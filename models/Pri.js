const mongoose = require('mongoose');

const priSchema = new mongoose.Schema({
  cond: String, //study condistion they are in
  name: String,//participant ID for this study
  time: Number,//ms spent on page
  pri_choice: String, //which choice they made
  did_post: String, //did they make the post?
  
}, { timestamps: true });

const Pri = mongoose.model('Pri', priSchema);

module.exports = Pri;