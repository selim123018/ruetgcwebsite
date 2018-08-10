var mongoose=require('mongoose');

var engineeringsectionSchema=new mongoose.Schema({
  _id                 :Number,
  totalclassroom      :Number,
  totalclassroomvolume:String,
  totaladministratorroom:Number,
  totaladministratorroomvolume:String,
  totallibraryroom       :Number,
  totalalibraryroomvolume:String,
  totallabratoryroom     :Number,
  totallabratoryroomvolume:String,
  totalhallroom           :Number,
  totalhallroomvolume     :String,
  totalauditorium         :Number,
  totalauditoriumvolume   :String,
  totalexerciseroom       :Number,
  totalexerciseroomvolume :String,
  totalplayground         :Number,
  totalplaygroundvolume   :String,
  totalswimingpool        :Number,
  totalswimingpoolvolume  :String,
  totalguesthouse         :Number,
  totalguesthousevolume   :String,
  totalteacherresidentialaccommodation:Number,
  totalteacherresidentialaccommodationvolume:String,
  totalofficerresidentialaccommodation      :Number,
  totalofficerresidentialaccommodationvolume:String,
  totalemployeresidentialaccommodation      :Number,
  totalemployeresidentialaccommodationvolume:String,
  vcbanglo                                  :Number,
  vcbanglovolume                            :String
});

module.exports=engineeringsectionuser=mongoose.model('engineeringsection',engineeringsectionSchema);
