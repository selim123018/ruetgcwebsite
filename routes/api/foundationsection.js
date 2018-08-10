const router = require('express').Router();
var foundationsectionuser=require('../../models/foundationsection');


router.get('/foundationsectionadmin',function(req,res){
    res.render('foundationsectionadmin');
});

router.get('/foundationsectiondata',function(req,res){
  if(req.query.foundationsectionsession){
    foundationsectionuser.findOne({_id:req.query.foundationsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('foundationsectiondata',{foundationsectionuser:doc});
    }
  });
  }
});

router.post('/foundationsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='foundationsectionadmin' && req.body.password=='foundationsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/foundationsection');
})

router.get('/foundationsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/foundationsectionadmin');
  })
})

router.get('/foundationsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('foundationsection');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/foundationsectionnew',function(req,res){
  new foundationsectionuser({
  _id                 :req.body.session,
  totalprofessorapproveseat:req.body.totalprofessorapproveseat,
  approvemaleprofessor     :req.body.approvemaleprofessor,
  approvefemaleprofessor   :req.body.approvefemaleprofessor,
  parttimemaleprofessor    :req.body.parttimemaleprofessor,
  parttimefemaleprofessor  :req.body.parttimefemaleprofessor,
  totalmaleprofessor       :req.body.totalmaleprofessor,
  totalfemaleprofessor     :req.body.totalfemaleprofessor,
  totalassociateprofessorapproveseat:req.body.totalassociateprofessorapproveseat,
  approvemaleassociateprofessor     :req.body.approvemaleassociateprofessor,
  approvefemaleassociateprofessor   :req.body.approvefemaleassociateprofessor,
  parttimemaleassociateprofessor    :req.body.parttimemaleassociateprofessor,
  parttimefemaleassociateprofessor  :req.body.parttimefemaleassociateprofessor,
  totalmaleassociateprofessor       :req.body.totalmaleassociateprofessor,
  totalfemaleassociateprofessor     :req.body.totalfemaleassociateprofessor,
  totalassistantprofessorapproveseat:req.body.totalassistantprofessorapproveseat,
  approvemaleassistantprofessor     :req.body.approvemaleassistantprofessor,
  approvefemaleassistantprofessor   :req.body.approvefemaleassistantprofessor,
  parttimemaleassistantprofessor    :req.body.parttimemaleassistantprofessor,
  parttimefemaleassistantprofessor  :req.body.parttimefemaleassistantprofessor,
  totalmaleassistantprofessor       :req.body.totalmaleassistantprofessor,
  totalfemaleassistantprofessor     :req.body.totalfemaleassistantprofessor,
  totallecturarapproveseat          :req.body.totallecturarapproveseat,
  approvemalelecturar               :req.body.approvemalelecturar,
  approvefemalelecturar             :req.body.approvefemalelecturar,
  parttimemalelecturar              :req.body.parttimemalelecturar,
  parttimefemalelecturar            :req.body.parttimefemalelecturar,
  totalmalelecturar                 :req.body.totalmalelecturar,
  totalfemalelecturar               :req.body.totalfemalelecturar,
  totalteachingassistantapproveseat :req.body.totalteachingassistantapproveseat,
  approvemaleteachingassistant      :req.body.approvemaleteachingassistant,
  approvefemaleteachingassistant    :req.body.approvefemaleteachingassistant,
  parttimemaleteachingassistant     :req.body.parttimemaleteachingassistant,
  parttimefemaleteachingassistant   :req.body.parttimefemaleteachingassistant,
  totalmaleteachingassistant        :req.body.totalmaleteachingassistant,
  totalfemaleteachingassistant      :req.body.totalfemaleteachingassistant,
  totalvisitingprofessorapproveseat :req.body.totalvisitingprofessorapproveseat,
  approvemalevisitingprofessor      :req.body.approvemalevisitingprofessor,
  approvefemalevisitingprofessor    :req.body.approvefemalevisitingprofessor,
  parttimemalevisitingprofessor     :req.body.parttimemalevisitingprofessor,
  parttimefemalevisitingprofessor   :req.body.parttimefemalevisitingprofessor,
  totalmalevisitingprofessor        :req.body.totalmalevisitingprofessor,
  totalfemalevisitingprofessor      :req.body.totalfemalevisitingprofessor,
  totalhonoraryprofessorapproveseat :req.body.totalhonoraryprofessorapproveseat,
  approvemalehonoraryprofessor      :req.body.approvemalehonoraryprofessor,
  approvefemalehonoraryprofessor    :req.body.approvefemalehonoraryprofessor,
  parttimemalehonoraryprofessor     :req.body.parttimemalehonoraryprofessor,
  parttimefemalehonoraryprofessor   :req.body.parttimefemalehonoraryprofessor,
  totalmalehonoraryprofessor        :req.body.totalmalehonoraryprofessor,
  totalfemalehonoraryprofessor      :req.body.totalfemalehonoraryprofessor,
  totalsupernumararyprofessorapproveseat:req.body.totalsupernumararyprofessorapproveseat,
  approvemalesupernumararyprofessor :req.body.approvemalesupernumararyprofessor,
  approvefemalesupernumararyprofessor:req.body.approvefemalesupernumararyprofessor,
  parttimemalesupernumararyprofessor:req.body.parttimemalesupernumararyprofessor,
  parttimefemalesupernumararyprofessor:req.body.parttimefemalesupernumararyprofessor,
  totalmalesupernumararyprofessor    :req.body.totalmalesupernumararyprofessor,
  totalfemalesupernumararyprofessor  :req.body.totalfemalesupernumararyprofessor,
  totalemeritusprofessorapproveseat  :req.body.totalemeritusprofessorapproveseat,
  approvemaleemeritusprofessor       :req.body.approvemaleemeritusprofessor,
  approvefemaleemeritusprofessor     :req.body.approvefemaleemeritusprofessor,
  parttimemaleemeritusprofessor      :req.body.parttimemaleemeritusprofessor,
  parttimefemaleemeritusprofessor    :req.body.parttimefemaleemeritusprofessor,
  totalmaleemeritusprofessor         :req.body.totalmaleemeritusprofessor,
  totalfemaleemeritusprofessor       :req.body.totalfemaleemeritusprofessor,
  totalnationalprofessorapproveseat  :req.body.totalnationalprofessorapproveseat,
  approvemalenationalprofessor       :req.body.approvemalenationalprofessor,
  approvefemalenationalprofessor     :req.body.approvefemalenationalprofessor,
  parttimemalenationalprofessor      :req.body.parttimemalenationalprofessor,
  parttimefemalenationalprofessor    :req.body.parttimefemalenationalprofessor,
  totalmalenationalprofessor         :req.body.totalmalenationalprofessor,
  totalfemalenationalprofessor       :req.body.totalfemalenationalprofessor,
  workingmaleteacher                 :req.body.workingmaleteacher,
  workingfemaleteacher               :req.body.workingfemaleteacher,
  absentmaleteacher                 :req.body.absentmaleteacher,
  absentfemaleteacher               :req.body.absentfemaleteacher,
  maleeducationvacationteacher       :req.body.maleeducationvacationteacher,
  femaleeducationvacationteacher     :req.body.femaleeducationvacationteacher,
  maletransmissionteacher            :req.body.maletransmissionteacher,
  femaletransmissionteacher          :req.body.femaletransmissionteacher,
  maleliyenteacher                   :req.body.maleliyenteacher,
  femaleliyenteacher                 :req.body.femaleliyenteacher,
  malefreesalaryteacher              :req.body.malefreesalaryteacher,
  femalefreesalaryteacher            :req.body.femalefreesalaryteacher,
  maleunapproveteacher               :req.body.maleunapproveteacher,
  femaleunapproveteacher             :req.body.femaleunapproveteacher,
  maleparttimeteacher                :req.body.maleparttimeteacher,
  femaleparttimeteacher              :req.body.femaleparttimeteacher,
  totalpermanentofficerapproveseat   :req.body.totalpermanentofficerapproveseat,
  permanentmaleofficer               :req.body.permanentmaleofficer,
  permanentfemaleofficer             :req.body.permanentfemaleofficer,
  totalcontactualofficerapproveseat  :req.body.totalcontactualofficerapproveseat,
  contactualmaleofficer              :req.body.contactualmaleofficer,
  contactualfemaleofficer            :req.body.contactualfemaleofficer,
  totalthirdclasspermanentemployeapproveseat:req.body.totalthirdclasspermanentemployeapproveseat,
  thirdclasspermanentmaleemploye     :req.body.thirdclasspermanentmaleemploye,
  thirdclasspermanentfemaleemploye   :req.body.thirdclasspermanentfemaleemploye,
  totalfourthclasspermanentemployeapproveseat:req.body.totalfourthclasspermanentemployeapproveseat,
  fourthclasspermanentmaleemploye    :req.body.fourthclasspermanentmaleemploye,
  fourthclasspermanentfemaleemploye  :req.body.fourthclasspermanentfemaleemploye,
  totaladhokemployeapproveseat       :req.body.totaladhokemployeapproveseat,
  adhokmaleeemploye                  :req.body.adhokmaleeemploye,
  adhokfemaleeemploye                :req.body.adhokfemaleeemploye,
  totaldailypresentemployeapproveseat:req.body.totaldailypresentemployeapproveseat,
  dailypresentmaleeemploye           :req.body.dailypresentmaleeemploye,
  dailypresentfemaleeemploye         :req.body.dailypresentfemaleeemploye

  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('foundationsectiondata',{foundationsectionuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  foundationsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.foundationsectionuserId=doc;
        next();
      }
  });
});

router.get('/foundationsectionuser/:id/edit',function(req,res){
  res.render('foundationsectiondataupdate',{foundationsectionuser:req.foundationsectionuserId});
});

// for updating data
router.post('/foundationsectionuser/:id', function(req, res){
  foundationsectionuser.updateOne({_id: req.params.id},
    { $set:{
  
  totalprofessorapproveseat:req.body.totalprofessorapproveseat,
  approvemaleprofessor     :req.body.approvemaleprofessor,
  approvefemaleprofessor   :req.body.approvefemaleprofessor,
  parttimemaleprofessor    :req.body.parttimemaleprofessor,
  parttimefemaleprofessor  :req.body.parttimefemaleprofessor,
  totalmaleprofessor       :req.body.totalmaleprofessor,
  totalfemaleprofessor     :req.body.totalfemaleprofessor,
  totalassociateprofessorapproveseat:req.body.totalassociateprofessorapproveseat,
  approvemaleassociateprofessor     :req.body.approvemaleassociateprofessor,
  approvefemaleassociateprofessor   :req.body.approvefemaleassociateprofessor,
  parttimemaleassociateprofessor    :req.body.parttimemaleassociateprofessor,
  parttimefemaleassociateprofessor  :req.body.parttimefemaleassociateprofessor,
  totalmaleassociateprofessor       :req.body.totalmaleassociateprofessor,
  totalfemaleassociateprofessor     :req.body.totalfemaleassociateprofessor,
  totalassistantprofessorapproveseat:req.body.totalassistantprofessorapproveseat,
  approvemaleassistantprofessor     :req.body.approvemaleassistantprofessor,
  approvefemaleassistantprofessor   :req.body.approvefemaleassistantprofessor,
  parttimemaleassistantprofessor    :req.body.parttimemaleassistantprofessor,
  parttimefemaleassistantprofessor  :req.body.parttimefemaleassistantprofessor,
  totalmaleassistantprofessor       :req.body.totalmaleassistantprofessor,
  totalfemaleassistantprofessor     :req.body.totalfemaleassistantprofessor,
  totallecturarapproveseat          :req.body.totallecturarapproveseat,
  approvemalelecturar               :req.body.approvemalelecturar,
  approvefemalelecturar             :req.body.approvefemalelecturar,
  parttimemalelecturar              :req.body.parttimemalelecturar,
  parttimefemalelecturar            :req.body.parttimefemalelecturar,
  totalmalelecturar                 :req.body.totalmalelecturar,
  totalfemalelecturar               :req.body.totalfemalelecturar,
  totalteachingassistantapproveseat :req.body.totalteachingassistantapproveseat,
  approvemaleteachingassistant      :req.body.approvemaleteachingassistant,
  approvefemaleteachingassistant    :req.body.approvefemaleteachingassistant,
  parttimemaleteachingassistant     :req.body.parttimemaleteachingassistant,
  parttimefemaleteachingassistant   :req.body.parttimefemaleteachingassistant,
  totalmaleteachingassistant        :req.body.totalmaleteachingassistant,
  totalfemaleteachingassistant      :req.body.totalfemaleteachingassistant,
  totalvisitingprofessorapproveseat :req.body.totalvisitingprofessorapproveseat,
  approvemalevisitingprofessor      :req.body.approvemalevisitingprofessor,
  approvefemalevisitingprofessor    :req.body.approvefemalevisitingprofessor,
  parttimemalevisitingprofessor     :req.body.parttimemalevisitingprofessor,
  parttimefemalevisitingprofessor   :req.body.parttimefemalevisitingprofessor,
  totalmalevisitingprofessor        :req.body.totalmalevisitingprofessor,
  totalfemalevisitingprofessor      :req.body.totalfemalevisitingprofessor,
  totalhonoraryprofessorapproveseat :req.body.totalhonoraryprofessorapproveseat,
  approvemalehonoraryprofessor      :req.body.approvemalehonoraryprofessor,
  approvefemalehonoraryprofessor    :req.body.approvefemalehonoraryprofessor,
  parttimemalehonoraryprofessor     :req.body.parttimemalehonoraryprofessor,
  parttimefemalehonoraryprofessor   :req.body.parttimefemalehonoraryprofessor,
  totalmalehonoraryprofessor        :req.body.totalmalehonoraryprofessor,
  totalfemalehonoraryprofessor      :req.body.totalfemalehonoraryprofessor,
  totalsupernumararyprofessorapproveseat:req.body.totalsupernumararyprofessorapproveseat,
  approvemalesupernumararyprofessor :req.body.approvemalesupernumararyprofessor,
  approvefemalesupernumararyprofessor:req.body.approvefemalesupernumararyprofessor,
  parttimemalesupernumararyprofessor:req.body.parttimemalesupernumararyprofessor,
  parttimefemalesupernumararyprofessor:req.body.parttimefemalesupernumararyprofessor,
  totalmalesupernumararyprofessor    :req.body.totalmalesupernumararyprofessor,
  totalfemalesupernumararyprofessor  :req.body.totalfemalesupernumararyprofessor,
  totalemeritusprofessorapproveseat  :req.body.totalemeritusprofessorapproveseat,
  approvemaleemeritusprofessor       :req.body.approvemaleemeritusprofessor,
  approvefemaleemeritusprofessor     :req.body.approvefemaleemeritusprofessor,
  parttimemaleemeritusprofessor      :req.body.parttimemaleemeritusprofessor,
  parttimefemaleemeritusprofessor    :req.body.parttimefemaleemeritusprofessor,
  totalmaleemeritusprofessor         :req.body.totalmaleemeritusprofessor,
  totalfemaleemeritusprofessor       :req.body.totalfemaleemeritusprofessor,
  totalnationalprofessorapproveseat  :req.body.totalnationalprofessorapproveseat,
  approvemalenationalprofessor       :req.body.approvemalenationalprofessor,
  approvefemalenationalprofessor     :req.body.approvefemalenationalprofessor,
  parttimemalenationalprofessor      :req.body.parttimemalenationalprofessor,
  parttimefemalenationalprofessor    :req.body.parttimefemalenationalprofessor,
  totalmalenationalprofessor         :req.body.totalmalenationalprofessor,
  totalfemalenationalprofessor       :req.body.totalfemalenationalprofessor,
  workingmaleteacher                 :req.body.workingmaleteacher,
  workingfemaleteacher               :req.body.workingfemaleteacher,
  absentmaleteacher                 :req.body.absentmaleteacher,
  absentfemaleteacher               :req.body.absentfemaleteacher,
  maleeducationvacationteacher       :req.body.maleeducationvacationteacher,
  femaleeducationvacationteacher     :req.body.femaleeducationvacationteacher,
  maletransmissionteacher            :req.body.maletransmissionteacher,
  femaletransmissionteacher          :req.body.femaletransmissionteacher,
  maleliyenteacher                   :req.body.maleliyenteacher,
  femaleliyenteacher                 :req.body.femaleliyenteacher,
  malefreesalaryteacher              :req.body.malefreesalaryteacher,
  femalefreesalaryteacher            :req.body.femalefreesalaryteacher,
  maleunapproveteacher               :req.body.maleunapproveteacher,
  femaleunapproveteacher             :req.body.femaleunapproveteacher,
  maleparttimeteacher                :req.body.maleparttimeteacher,
  femaleparttimeteacher              :req.body.femaleparttimeteacher,
  totalpermanentofficerapproveseat   :req.body.totalpermanentofficerapproveseat,
  permanentmaleofficer               :req.body.permanentmaleofficer,
  permanentfemaleofficer             :req.body.permanentfemaleofficer,
  totalcontactualofficerapproveseat  :req.body.totalcontactualofficerapproveseat,
  contactualmaleofficer              :req.body.contactualmaleofficer,
  contactualfemaleofficer            :req.body.contactualfemaleofficer,
  totalthirdclasspermanentemployeapproveseat:req.body.totalthirdclasspermanentemployeapproveseat,
  thirdclasspermanentmaleemploye     :req.body.thirdclasspermanentmaleemploye,
  thirdclasspermanentfemaleemploye   :req.body.thirdclasspermanentfemaleemploye,
  totalfourthclasspermanentemployeapproveseat:req.body.totalfourthclasspermanentemployeapproveseat,
  fourthclasspermanentmaleemploye    :req.body.fourthclasspermanentmaleemploye,
  fourthclasspermanentfemaleemploye  :req.body.fourthclasspermanentfemaleemploye,
  totaladhokemployeapproveseat       :req.body.totaladhokemployeapproveseat,
  adhokmaleeemploye                  :req.body.adhokmaleeemploye,
  adhokfemaleeemploye                :req.body.adhokfemaleeemploye,
  totaldailypresentemployeapproveseat:req.body.totaldailypresentemployeapproveseat,
  dailypresentmaleeemploye           :req.body.dailypresentmaleeemploye,
  dailypresentfemaleeemploye         :req.body.dailypresentfemaleeemploye
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/foundationsectionuser/'+req.params.id);
          }
        });
});

router.get('/foundationsectionuser/:id',function(req,res){
  res.render('foundationsectiondata',{foundationsectionuser:req.foundationsectionuserId});
});
router.get('/foundationsectionuser/:id/delete', function(req,res){
  foundationsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/foundationsection');
  });
});

module.exports=router;