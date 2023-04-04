var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add First name"],
  },
  middlename: {
    type: String,
    required: [true, "Please add middle name"],
  },
  lastname: {
    type: String,
    required: [true, "Please add last name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  role: {
    type: String,
    enum: ["user"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  interests: {
    type: [String], // an array of strings
    enum: ["Web-development", "Data-Science", "Ui-Ux", "Management", "AIML"], // possible values for the array
    validate: [
      {
        validator: function (v) {
          return v.length > 0; // validate that the array has at least one item
        },
        message: (props) => `Please add a atleast one interest`,
      },
      {
        validator: function (v) {
          return v.length < 5; // validate that the array has at least one item
        },
        message: (props) => `You can add maximum 4 interest`,
      },
    ],
  },
  college: {
    type: String,
    // required: [true, 'Please add your college name'],
    maxlength: [100, "College name can not be more than 100 characters"],
  },
  degreeType: {
    type: String,
    enum: ["Bachelor", "Master", "Other"],
  },
  academicYear: {
    type: String,
    enum: ["FY", "SY", "TY", "LY"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
