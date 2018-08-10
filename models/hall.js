var mongoose=require('mongoose');

var hallSchema=new mongoose.Schema({
  _id                 :Number,
  bongobondhuhallmalestudent:Number,
  bongobondhuhallfemalestudent:Number,
  ziahallmalestudent          :Number,
  ziahallfemalestudent        :Number,
  selimhallmalestudent        :Number,
  selimhallfemalestudent      :Number,
  shohidulhallmalestudent     :Number,
  shohidulhallfemalestudent   :Number,
  hamidhallmalestudent        :Number,
  hamidhallfemalestudent      :Number,
  tinshedhallmalestudent      :Number,
  tinshedhallfemalestudent    :Number,
  shekhhasinahallmalestudent  :Number,
  shekhhasinahallfemalestudent:Number
});

module.exports=halluser=mongoose.model('hall',hallSchema);