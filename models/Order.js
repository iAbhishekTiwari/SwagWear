const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  email :  {type: String, required: true, unique: true},
  orderId :  {type: String, required: true},
  paymentInfo :  {type: String, default: ''},
  products:{type: Object, required: true},
  address: {type: String, required: true},
  amount: {type: String, required: true},
  status: {type: String,default: "Pending", required: true},
},{timestamps: true});

mongoose.models = {}

export default mongoose.model("Order", OrderSchema);