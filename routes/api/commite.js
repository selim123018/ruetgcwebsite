const router = require('express').Router();
var commiteuser=require('../../models/commite');


router.get('/commiteadmin',function(req,res){
    res.render('commiteadmin');
});

router.get('/commitedata',function(req,res){
  if(req.query.commitesession){
    commiteuser.findOne({_id:req.query.commitesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('commitedata',{commiteuser:doc});
    }
  });
  }
});

router.post('/commiteadmin',function(req,res){
  session=req.session;
  if(req.body.username=='commiteadmin' && req.body.password=='commiteadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/commite');
})

router.get('/commitelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/commiteadmin');
  })
})

router.get('/commite',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('commite');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/commitenew',function(req,res){
  new commiteuser({
  _id                 :req.body.session,
  artsmalestudent     :req.body.artsmalestudent,
  artsfemalestudent   :req.body.artsfemalestudent,
  socialsciencemalestudent:req.body.socialsciencemalestudent,
  socialsciencefemalestudent:req.body.socialsciencefemalestudent,
  educationmalestudent  :req.body.educationmalestudent,
  educationfemalestudent:req.body.educationfemalestudent,
  commercemalestudent   :req.body.commercemalestudent,
  commercefemalestudent :req.body.commercefemalestudent,
  lawmalestudent        :req.body.lawmalestudent,
  lawfemalestudent      :req.body.lawfemalestudent,
  farmecymalestudent    :req.body.farmecymalestudent,
  farmecyfemalestudent  :req.body.farmecyfemalestudent,
  sciencemalestudent    :req.body.sciencemalestudent,
  sciencefemalestudent  :req.body.sciencefemalestudent,
  advicemalestudent     :req.body.advicemalestudent,
  advicefemalestudent   :req.body.advicefemalestudent,
  agriculturemalestudent:req.body.agriculturemalestudent,
  agriculturefemalestudent:req.body.agriculturefemalestudent,
  engineeringmalestudent :req.body.engineeringmalestudent,
  engineeringfemalestudent:req.body.engineeringfemalestudent,
  othermalestudent       :req.body.othermalestudent,
  otherfemalestudent     :req.body.otherfemalestudent,
  totaleeeteacher        :req.body.totaleeeteacher,
  eeemalestudent         :req.body.eeemalestudent,
  eeefemalestudent       :req.body.eeefemalestudent,
  totaleeestudent        :req.body.totaleeestudent,
  eeeteacheronupatstudent:req.body.eeeteacheronupatstudent,
  totalcseteacher        :req.body.totalcseteacher,
  csemalestudent         :req.body.csemalestudent,
  csefemalestudent       :req.body.csefemalestudent,
  totalcsestudent        :req.body.totalcsestudent,
  totaleteteacher        :req.body.totaleteteacher,
  etemalestudent         :req.body.etemalestudent,
  etefemalestudent       :req.body.etefemalestudent,
  totaletestudent        :req.body.totaletestudent,
  totaleceteacher        :req.body.totaleceteacher,
  ecemalestudent         :req.body.ecemalestudent,
  ecefemalestudent       :req.body.ecefemalestudent,
  totalecestudent        :req.body.totalecestudent,
  totalmeteacher         :req.body.totalmeteacher,
  memalestudent          :req.body.memalestudent,
  mefemalestudent        :req.body.mefemalestudent,
  totalmestudent         :req.body.totalmestudent,
  meteacheronupatstudent :req.body.meteacheronupatstudent,
  totalipeteacher        :req.body.totalipeteacher,
  ipemalestudent         :req.body.ipemalestudent,
  ipefemalestudent       :req.body.ipefemalestudent,
  totalipestudent        :req.body.totalipestudent,
  totalgceteacher        :req.body.totalgceteacher,
  gcemalestudent         :req.body.gcemalestudent,
  gcefemalestudent       :req.body.gcefemalestudent,
  totalgcestudent        :req.body.totalgcestudent,
  totalmteteacher        :req.body.totalmteteacher,
  mtemalestudent         :req.body.mtemalestudent,
  mtefemalestudent       :req.body.mtefemalestudent,
  totalmtestudent        :req.body.totalmtestudent,
  totalmseteacher        :req.body.totalmseteacher,
  msemalestudent         :req.body.msemalestudent,
  msefemalestudent       :req.body.msefemalestudent,
  totalmsestudent        :req.body.totalmsestudent,
  totalcfpeteacher       :req.body.totalcfpeteacher,
  cfpemalestudent        :req.body.cfpemalestudent,
  cfpefemalestudent      :req.body.cfpefemalestudent,
  totalcfpestudent       :req.body.totalcfpestudent,
  totalceteacher         :req.body.totalceteacher,
  cemalestudent          :req.body.cemalestudent,
  cefemalestudent        :req.body.cefemalestudent,
  totalcestudent         :req.body.totalcestudent,
  ceteacheronupatstudent :req.body.ceteacheronupatstudent,
  totalarchiteacher      :req.body.totalarchiteacher,
  archimalestudent       :req.body.archimalestudent,
  archifemalestudent     :req.body.archifemalestudent,
  totalarchistudent      :req.body.totalarchistudent,
  totalurpteacher        :req.body.totalurpteacher,
  urpmalestudent         :req.body.urpmalestudent,
  urpfemalestudent       :req.body.urpfemalestudent,
  totalurpstudent        :req.body.totalurpstudent,
  totalbecmteacher       :req.body.totalbecmteacher,
  becmmalestudent        :req.body.becmmalestudent,
  becmfemalestudent      :req.body.becmfemalestudent,
  totalbecmstudent       :req.body.totalbecmstudent,
  totalmathteacher       :req.body.totalmathteacher,
  mathmalestudent        :req.body.mathmalestudent,
  mathfemalestudent      :req.body.mathfemalestudent,
  totalmathstudent       :req.body.totalmathstudent,
  mathteacheronupatstudent:req.body.mathteacheronupatstudent,
  totalphysicsteacher    :req.body.totalphysicsteacher,
  physicsmalestudent     :req.body.physicsmalestudent,
  physicsfemalestudent   :req.body.physicsfemalestudent,
  totalphysicsstudent    :req.body.totalphysicsstudent,
  totalchemistryteacher  :req.body.totalchemistryteacher,
  chemistrymalestudent   :req.body.chemistrymalestudent,
  chemistryfemalestudent :req.body.chemistryfemalestudent,
  totalchemistrystudent  :req.body.totalchemistrystudent,
  totalhumteacher        :req.body.totalhumteacher,
  hummalestudent         :req.body.hummalestudent,
  humfemalestudent       :req.body.humfemalestudent,
  totalhumstudent        :req.body.totalhumstudent,
  teacheronupatstudent   :req.body.teacheronupatstudent,
  officeronupatstudent   :req.body.officeronupatstudent,
  employeonupatstudent   :req.body.employeonupatstudent,
  totalland              :req.body.totalland,
  totalteacher           :req.body.totalteacher,
  totalhall              :req.body.totalhall,
  totalfemaleteacher     :req.body.totalfemaleteacher,
  totalfaculty           :req.body.totalfaculty,
  parttimeteacher        :req.body.parttimeteacher,
  totaldepartment        :req.body.totaldepartment,
  totalphdteacher        :req.body.totalphdteacher,
  totalinstitute         :req.body.totalinstitute,
  totalprofessor         :req.body.totalprofessor,
  totalcollage           :req.body.totalcollage,
  tatalassociateproffesor:req.body.tatalassociateproffesor,
  asistantproffesor      :req.body.asistantproffesor,
  totalseat              :req.body.totalseat,
  totallecturar          :req.body.totallecturar,
  totaladmissionstudent  :req.body.totaladmissionstudent,
  approveabsentteacher   :req.body.approveabsentteacher,
  totalfemalestudent     :req.body.totalfemalestudent,
  unapprovedteacher      :req.body.unapprovedteacher,
  totalstudents          :req.body.totalstudents,
  employeenum            :req.body.employeenum,
  totalemployeenum       :req.body.totalemployeenum,
  totalbscstudents       :req.body.totalbscstudents,
  teacherstudentsratio   :req.body.teacherstudentsratio,
  totalbscsnexttudents   :req.body.totalbscsnexttudents,
  employeestudentsratio  :req.body.employeestudentsratio,
  totalbscsnexttotudents :req.body.totalbscsnexttotudents,
  totalemployeestudentsratio:req.body.totalemployeestudentsratio,
  mphilphdtotudents      :req.body.mphilphdtotudents,
  residencemale          :req.body.residencemale,
  hum                    :req.body.hum,
  residencefemale        :req.body.residencefemale,
  socialscience          :req.body.socialscience,
  residenceteacher       :req.body.residenceteacher,
  education              :req.body.education,
  residenceemployee      :req.body.residenceemployee,
  management             :req.body.management,
  residenceemployeer     :req.body.residenceemployeer,
  law                    :req.body.law,
  phermacy               :req.body.phermacy,
  vatdevelopement        :req.body.vatdevelopement,
  science                :req.body.science,
  selfincome             :req.body.selfincome,
  medical                :req.body.medical,
  others                 :req.body.others,
  agri                   :req.body.agri,
  edu                    :req.body.edu,
  engineering            :req.body.engineering,
  research               :req.body.research,
  others1                :req.body.others1,
  researchstipend        :req.body.researchstipend,
  salary                 :req.body.salary,
  masters                :req.body.masters,
  transportsec           :req.body.transportsec,
  masterspass            :req.body.masterspass,
  electricsection        :req.body.electricsection,
  masterstechnical       :req.body.masterstechnical,
  infrasturctures        :req.body.infrasturctures,
  masterspasssss         :req.body.masterspasssss,
  medicalsection         :req.body.medicalsection,
  masterspassssstechnical:req.body.masterspassssstechnical,
  otherssection          :req.body.otherssection,
  mastersmphilothers     :req.body.mastersmphilothers,
  certificate            :req.body.certificate,
  libarysec              :req.body.libarysec,
  collectionnumber       :req.body.collectionnumber,
  suspendclassday        :req.body.suspendclassday,
  researchcollectionnumber:req.body.researchcollectionnumber
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('commitedata',{commiteuser:doc});
  });
});

router.param('id',function(req,res,next,id){
  commiteuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.commiteuserId=doc;
        next();
      }
  });
});

router.get('/commiteuser/:id/edit',function(req,res){
  res.render('commitedataupdate',{commiteuser:req.commiteuserId});
});

// for updating data
router.post('/commiteuser/:id', function(req, res){
  commiteuser.updateOne({_id: req.params.id},
    { $set:{
  artsmalestudent     :req.body.artsmalestudent,
  artsfemalestudent   :req.body.artsfemalestudent,
  socialsciencemalestudent:req.body.socialsciencemalestudent,
  socialsciencefemalestudent:req.body.socialsciencefemalestudent,
  educationmalestudent  :req.body.educationmalestudent,
  educationfemalestudent:req.body.educationfemalestudent,
  commercemalestudent   :req.body.commercemalestudent,
  commercefemalestudent :req.body.commercefemalestudent,
  lawmalestudent        :req.body.lawmalestudent,
  lawfemalestudent      :req.body.lawfemalestudent,
  farmecymalestudent    :req.body.farmecymalestudent,
  farmecyfemalestudent  :req.body.farmecyfemalestudent,
  sciencemalestudent    :req.body.sciencemalestudent,
  sciencefemalestudent  :req.body.sciencefemalestudent,
  advicemalestudent     :req.body.advicemalestudent,
  advicefemalestudent   :req.body.advicefemalestudent,
  agriculturemalestudent:req.body.agriculturemalestudent,
  agriculturefemalestudent:req.body.agriculturefemalestudent,
  engineeringmalestudent :req.body.engineeringmalestudent,
  engineeringfemalestudent:req.body.engineeringfemalestudent,
  othermalestudent       :req.body.othermalestudent,
  otherfemalestudent     :req.body.otherfemalestudent,
  totaleeeteacher        :req.body.totaleeeteacher,
  eeemalestudent        :req.body.eeemalestudent,
  eeefemalestudent        :req.body.eeefemalestudent,
  totaleeestudent        :req.body.totaleeestudent,
  eeeteacheronupatstudent:req.body.eeeteacheronupatstudent,
  totalcseteacher        :req.body.totalcseteacher,
  csemalestudent        :req.body.csemalestudent,
  csefemalestudent        :req.body.csefemalestudent,
  totalcsestudent        :req.body.totalcsestudent,
  totaleteteacher        :req.body.totaleteteacher,
  etemalestudent        :req.body.etemalestudent,
  etefemalestudent        :req.body.etefemalestudent,
  totaletestudent        :req.body.totaletestudent,
  totaleceteacher        :req.body.totaleceteacher,
  ecemalestudent        :req.body.ecemalestudent,
  ecefemalestudent        :req.body.ecefemalestudent,
  totalecestudent        :req.body.totalecestudent,
  totalmeteacher         :req.body.totalmeteacher,
  memalestudent         :req.body.memalestudent,
  mefemalestudent         :req.body.mefemalestudent,
  totalmestudent         :req.body.totalmestudent,
  meteacheronupatstudent :req.body.meteacheronupatstudent,
  totalipeteacher        :req.body.totalipeteacher,
  ipemalestudent        :req.body.ipemalestudent,
  ipefemalestudent        :req.body.ipefemalestudent,
  totalipestudent        :req.body.totalipestudent,
  totalgceteacher        :req.body.totalgceteacher,
  gcemalestudent        :req.body.gcemalestudent,
  gcefemalestudent        :req.body.gcefemalestudent,
  totalgcestudent        :req.body.totalgcestudent,
  totalmteteacher        :req.body.totalmteteacher,
  mtemalestudent        :req.body.mtemalestudent,
  mtefemalestudent        :req.body.mtefemalestudent,
  totalmtestudent        :req.body.totalmtestudent,
  totalmseteacher        :req.body.totalmseteacher,
  msemalestudent        :req.body.msemalestudent,
  msefemalestudent        :req.body.msefemalestudent,
  totalmsestudent        :req.body.totalmsestudent,
  totalcfpeteacher       :req.body.totalcfpeteacher,
  cfpemalestudent       :req.body.cfpemalestudent,
  cfpefemalestudent       :req.body.cfpefemalestudent,
  totalcfpestudent       :req.body.totalcfpestudent,
  totalceteacher         :req.body.totalceteacher,
  cemalestudent         :req.body.cemalestudent,
  cefemalestudent         :req.body.cefemalestudent,
  totalcestudent         :req.body.totalcestudent,
  ceteacheronupatstudent :req.body.ceteacheronupatstudent,
  totalarchiteacher      :req.body.totalarchiteacher,
  archimalestudent      :req.body.archimalestudent,
  archifemalestudent      :req.body.archifemalestudent,
  totalarchistudent      :req.body.totalarchistudent,
  totalurpteacher        :req.body.totalurpteacher,
  urpmalestudent        :req.body.urpmalestudent,
  urpfemalestudent        :req.body.urpfemalestudent,
  totalurpstudent        :req.body.totalurpstudent,
  totalbecmteacher       :req.body.totalbecmteacher,
  becmmalestudent       :req.body.becmmalestudent,
  becmfemalestudent       :req.body.becmfemalestudent,
  totalbecmstudent       :req.body.totalbecmstudent,
  totalmathteacher       :req.body.totalmathteacher,
  mathmalestudent       :req.body.mathmalestudent,
  mathfemalestudent       :req.body.mathfemalestudent,
  totalmathstudent       :req.body.totalmathstudent,
  mathteacheronupatstudent:req.body.mathteacheronupatstudent,
  totalphysicsteacher    :req.body.totalphysicsteacher,
  physicsmalestudent    :req.body.physicsmalestudent,
  physicsfemalestudent    :req.body.physicsfemalestudent,
  totalphysicsstudent    :req.body.totalphysicsstudent,
  totalchemistryteacher  :req.body.totalchemistryteacher,
  chemistrymalestudent  :req.body.chemistrymalestudent,
  chemistryfemalestudent  :req.body.chemistryfemalestudent,
  totalchemistrystudent  :req.body.totalchemistrystudent,
  totalhumteacher        :req.body.totalhumteacher,
  hummalestudent        :req.body.hummalestudent,
  humfemalestudent        :req.body.humfemalestudent,
  totalhumstudent        :req.body.totalhumstudent,
  teacheronupatstudent   :req.body.teacheronupatstudent,
  officeronupatstudent   :req.body.officeronupatstudent,
  employeonupatstudent   :req.body.employeonupatstudent,
  totalland              :req.body.totalland,
  totalteacher           :req.body.totalteacher,
  totalhall              :req.body.totalhall,
  totalfemaleteacher     :req.body.totalfemaleteacher,
  totalfaculty           :req.body.totalfaculty,
  parttimeteacher        :req.body.parttimeteacher,
  totaldepartment        :req.body.totaldepartment,
  totalphdteacher        :req.body.totalphdteacher,
  totalinstitute         :req.body.totalinstitute,
  totalprofessor         :req.body.totalprofessor,
  totalcollage           :req.body.totalcollage,
  tatalassociateproffesor:req.body.tatalassociateproffesor,
  asistantproffesor      :req.body.asistantproffesor,
  totalseat              :req.body.totalseat,
  totallecturar          :req.body.totallecturar,
  totaladmissionstudent  :req.body.totaladmissionstudent,
  approveabsentteacher   :req.body.approveabsentteacher,
  totalfemalestudent     :req.body.totalfemalestudent,
  unapprovedteacher      :req.body.unapprovedteacher,
  totalstudents          :req.body.totalstudents,
  employeenum            :req.body.employeenum,
  totalemployeenum       :req.body.totalemployeenum,
  totalbscstudents       :req.body.totalbscstudents,
  teacherstudentsratio   :req.body.teacherstudentsratio,
  totalbscsnexttudents   :req.body.totalbscsnexttudents,
  employeestudentsratio  :req.body.employeestudentsratio,
  totalbscsnexttotudents :req.body.totalbscsnexttotudents,
  totalemployeestudentsratio:req.body.totalemployeestudentsratio,
  mphilphdtotudents      :req.body.mphilphdtotudents,
  residencemale          :req.body.residencemale,
  hum                    :req.body.hum,
  residencefemale        :req.body.residencefemale,
  socialscience          :req.body.socialscience,
  residenceteacher       :req.body.residenceteacher,
  education              :req.body.education,
  residenceemployee      :req.body.residenceemployee,
  management             :req.body.management,
  residenceemployeer     :req.body.residenceemployeer,
  law                    :req.body.law,
  phermacy               :req.body.phermacy,
  vatdevelopement        :req.body.vatdevelopement,
  science                :req.body.science,
  selfincome             :req.body.selfincome,
  medical                :req.body.medical,
  others                 :req.body.others,
  agri                   :req.body.agri,
  edu                    :req.body.edu,
  engineering            :req.body.engineering,
  research               :req.body.research,
  others1                :req.body.others1,
  researchstipend        :req.body.researchstipend,
  salary                 :req.body.salary,
  masters                :req.body.masters,
  transportsec           :req.body.transportsec,
  masterspass            :req.body.masterspass,
  electricsection        :req.body.electricsection,
  masterstechnical       :req.body.masterstechnical,
  infrasturctures        :req.body.infrasturctures,
  masterspasssss         :req.body.masterspasssss,
  medicalsection         :req.body.medicalsection,
  masterspassssstechnical:req.body.masterspassssstechnical,
  otherssection          :req.body.otherssection,
  mastersmphilothers     :req.body.mastersmphilothers,
  certificate            :req.body.certificate,
  libarysec              :req.body.libarysec,
  collectionnumber       :req.body.collectionnumber,
  suspendclassday        :req.body.suspendclassday,
  researchcollectionnumber:req.body.researchcollectionnumber
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/commiteuser/'+req.params.id);
          }
        });
});

router.get('/commiteuser/:id',function(req,res){
  res.render('commitedata',{commiteuser:req.commiteuserId});
});

router.get('/commiteuser/:id/delete', function(req,res){
  commiteuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/commite');
  });
});

module.exports=router;