var mongoose=require('mongoose');


var humSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

module.exports=humuser=mongoose.model('hum',humSchema);