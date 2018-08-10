var mongoose=require('mongoose');

var computercentreSchema=new mongoose.Schema({
  _id                 :Number,
  totalstudentcomputer:Number,
  totalinternetconnectedcomputer:Number,
  totaladministratorcomputer    :Number,
  studentandcomputer  :String
});

module.exports=computercentreuser=mongoose.model('computercentre',computercentreSchema);
