var mongoose=require('mongoose');

var librarySchema=new mongoose.Schema({
  _id               :Number,
  totallibrarybook  :Number,
  totaljournal      :Number,
  totalaudiovisual  :Number,
  totalcollectedlibrarybook:Number,
  totalcollectedjournal    :Number,
  totalcollectedaudiovisual:Number,
  totalsubscribedlibrarybook:Number,
  totalsubscribedjournal    :Number,
  totalsubscribedaudiovisual:Number,
  totalotherlibrarybook     :Number,
  totalotherjournal         :Number,
  totalotheraudiovisual     :Number,
  librarygraduatedmale      :Number,
  librarygraduatedfemale    :Number,
  libraryothermale          :Number,
  libraryotherfemale        :Number 
});

module.exports=libraryuser=mongoose.model('library',librarySchema);
