var mongoose=require('mongoose');

var commiteSchema=new mongoose.Schema({
  _id                 :Number,
  artsmalestudent     :Number,
  artsfemalestudent   :Number,
  socialsciencemalestudent:Number,
  socialsciencefemalestudent:Number,
  educationmalestudent :Number,
  educationfemalestudent:Number,
  commercemalestudent   :Number,
  commercefemalestudent :Number,
  lawmalestudent        :Number,
  lawfemalestudent      :Number,
  farmecymalestudent    :Number,
  farmecyfemalestudent  :Number,
  sciencemalestudent    :Number,
  sciencefemalestudent  :Number,
  advicemalestudent     :Number,
  advicefemalestudent   :Number,
  agriculturemalestudent:Number,
  agriculturefemalestudent:Number,
  engineeringmalestudent :Number,
  engineeringfemalestudent:Number,
  othermalestudent       :Number,
  otherfemalestudent     :Number,
  totaleeeteacher        :Number,
  eeemalestudent         :Number,
  eeefemalestudent        :Number,
  totaleeestudent        :Number,
  eeeteacheronupatstudent:String,
  totalcseteacher        :Number,
  csemalestudent        :Number,
  csefemalestudent        :Number,
  totalcsestudent        :Number,
  totaleteteacher        :Number,
  etemalestudent        :Number,
  etefemalestudent        :Number,
  totaletestudent        :Number,
  totaleceteacher        :Number,
  ecemalestudent        :Number,
  ecefemalestudent        :Number,
  totalecestudent        :Number,
  totalmeteacher         :Number,
  memalestudent         :Number,
  mefemalestudent         :Number,
  totalmestudent         :Number,
  meteacheronupatstudent :String,
  totalipeteacher        :Number,
  ipemalestudent        :Number,
  ipefemalestudent        :Number,
  totalipestudent        :Number,
  totalgceteacher        :Number,
  gcemalestudent        :Number,
  gcefemalestudent        :Number,
  totalgcestudent        :Number,
  totalmteteacher        :Number,
  mtemalestudent        :Number,
  mtefemalestudent        :Number,
  totalmtestudent        :Number,
  totalmseteacher        :Number,
  msemalestudent        :Number,
  msefemalestudent        :Number,
  totalmsestudent        :Number,
  totalcfpeteacher       :Number,
  cfpemalestudent       :Number,
  cfpefemalestudent       :Number,
  totalcfpestudent       :Number,
  totalceteacher         :Number,
  cemalestudent         :Number,
  cefemalestudent         :Number,
  totalcestudent         :Number,
  ceteacheronupatstudent :String,
  totalarchiteacher      :Number,
  archimalestudent      :Number,
  archifemalestudent      :Number,
  totalarchistudent      :Number,
  totalurpteacher        :Number,
  urpmalestudent        :Number,
  urpfemalestudent        :Number,
  totalurpstudent        :Number,
  totalbecmteacher       :Number,
  becmmalestudent       :Number,
  becmfemalestudent       :Number,
  totalbecmstudent       :Number,
  totalmathteacher       :Number,
  mathmalestudent       :Number,
  mathfemalestudent       :Number,
  totalmathstudent       :Number,
  mathteacheronupatstudent:String,
  totalphysicsteacher    :Number,
  physicsmalestudent    :Number,
  physicsfemalestudent    :Number,
  totalphysicsstudent    :Number,
  totalchemistryteacher  :Number,
  chemistrymalestudent  :Number,
  chemistryfemalestudent  :Number,
  totalchemistrystudent  :Number,
  totalhumteacher        :Number,
  hummalestudent        :Number,
  humfemalestudent        :Number,
  totalhumstudent        :Number,
  teacheronupatstudent   :String,
  officeronupatstudent   :String,
  employeonupatstudent   :String,
  totalland              :String,
  totalteacher           :String,
  totalhall              :String,
  totalfemaleteacher     :String,
  totalfaculty           :String,
  parttimeteacher        :String,
  totaldepartment        :String,
  totalphdteacher        :String,
  totalinstitute         :String,
  totalprofessor         :String,
  totalcollage           :String,
  tatalassociateproffesor:String,
  asistantproffesor      :String,
  totalseat              :String,
  totallecturar          :String,
  totaladmissionstudent  :String,
  approveabsentteacher   :String,
  totalfemalestudent     :String,
  unapprovedteacher      :String,
  totalstudents          :String,
  employeenum            :String,
  totalemployeenum       :String,
  totalbscstudents       :String,
  teacherstudentsratio   :String,
  totalbscsnexttudents   :String,
  employeestudentsratio  :String,
  totalbscsnexttotudents :String,
  totalemployeestudentsratio:String,
  mphilphdtotudents      :String,
  residencemale          :String,
  hum                    :String,
  residencefemale        :String,
  socialscience          :String,
  residenceteacher       :String,
  education              :String,
  residenceemployee      :String,
  management             :String,
  residenceemployeer     :String,
  law                    :String,
  phermacy               :String,
  vatdevelopement        :String,
  science                :String,
  selfincome             :String,
  medical                :String,
  others                 :String,
  agri                   :String,
  edu                    :String,
  engineering            :String,
  research               :String,
  others1                :String,
  researchstipend        :String,
  salary                 :String,
  masters                :String,
  transportsec           :String,
  masterspass            :String,
  electricsection        :String,
  masterstechnical       :String,
  infrasturctures        :String,
  masterspasssss         :String,
  medicalsection         :String,
  masterspassssstechnical:String,
  otherssection          :String,
  mastersmphilothers     :String,
  certificate            :String,
  libarysec              :String,
  collectionnumber       :String,
  suspendclassday        :String,
  researchcollectionnumber:String
});

module.exports=commiteuser=mongoose.model('commite',commiteSchema);