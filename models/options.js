// importing mongoose instance
const mongoose = require("mongoose");

//creating the option schema with fields option, question, vote, link to vote
const optionSchema = new mongoose.Schema(
  {
    option: {
      type: String,
      required: true,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
    vote: {
      type: Number,
    },
    link_to_vote: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//passing the optionSchema instance to mongoose.model
const Option = mongoose.model("Option", optionSchema);

//exporting the schema to be used further
module.exports = Option;
