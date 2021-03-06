var mongoose=require('mongoose');
var eteSchema=new mongoose.Schema({
  _id                 :Number,
  etetotalbscstudent  :Number,
  etemalebscstudent   :Number,
  etefemalebscstudent :Number,
  etetotalmscstudent  :Number,
  etemalemscstudent   :Number,
  etefemalemscstudent :Number,
  etetotalmfilstudent :Number,
  etemalemfilstudent  :Number,
  etefemalemfilstudent:Number,
  etetotalphdstudent  :Number,
  etemalephdstudent   :Number,
  etefemalephdstudent :Number,
  eeeforeignmalebscstudent   :Number,
  eeeforeignfemalebscstudent :Number,
  eeeforeignmalemscstudent   :Number,
  eeeforeignfemalemscstudent :Number,
  eeeforeignmalemfilstudent  :Number,
  eeeforeignfemalemfilstudent:Number,
  eeeforeignmalephdstudent   :Number,
  eeeforeignfemalephdstudent :Number,
  etefulltimemfilmaleteacher  :Number,
  etefulltimemfilfemaleteacher:Number,
  eteparttimemfilmaleteacher  :Number,
  eteparttimemfilfemaleteacher:Number,
  etefulltimephdmaleteacher   :Number,
  etefulltimephdfemaleteacher :Number,
  eteparttimephdmaleteacher   :Number,
  eteparttimephdfemaleteacher :Number,
  etefulltimemscmaleteacher   :Number,
  etefulltimemscfemaleteacher :Number,
  eteparttimemscmaleteacher   :Number,
  eteparttimemscfemaleteacher :Number,
  etefulltimebscmaleteacher   :Number,
  etefulltimebscfemaleteacher :Number,
  eteparttimebscmaleteacher   :Number,
  eteparttimebscfemaleteacher :Number,
  etefulltimeothermaleteacher :Number,
  etefulltimeotherfemaleteacher:Number,
  eteparttimeothermaleteacher  :Number,
  eteparttimeotherfemaleteacher:Number,
  eteresearch1  :Number,
  eteresearch2  :Number,
  eteresearch3  :Number,
  eteresearch4  :Number,
  eteresearch5  :Number,
  eteresearch6  :Number,
  etejournal    :Number,
  eteconference :Number,
  eteresearch8  :Number,
  eteresearch9  :Number,
  eteresearch10 :Number
});

module.exports=eteuser=mongoose.model('ete',eteSchema);
