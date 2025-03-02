const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,  // ✅ Fix: Match with Compass data
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" },  // ✅ Added default role field
  createDate: { type: Date, default: Date.now }  // ✅ Added createDate field
}, { collection: "login" });  // ✅ Explicitly set the collection name

module.exports = mongoose.model("User", UserSchema);
