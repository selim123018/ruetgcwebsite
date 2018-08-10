const router = require('express').Router();
var eceuser=require('../../models/ece');


router.get('/eceadmin',function(req,res){
    res.render('eceadmin');
});

router.get('/ecedata',function(req,res){
  if(req.query.ecesession){
    eceuser.findOne({_id:req.query.ecesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('ecedata',{eceuser:doc});
    }
  });
  }
});

router.post('/eceadmin',function(req,res){
  session=req.session;
  if(req.body.username=='eceadmin' && req.body.password=='eceadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ece');
})

router.get('/ecelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/eceadmin');
  })
})

router.get('/ece',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ece');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/ecenew',function(req,res){
  new eceuser({
  _id                 :req.body.session,
 ecetotalbscstudent  :req.body.ecetotalbscstudent,
  ecemalebscstudent   :req.body.ecemalebscstudent,
  ecefemalebscstudent :req.body.ecefemalebscstudent,
  ecetotalmscstudent  :req.body.ecetotalmscstudent,
  ecemalemscstudent   :req.body.ecemalemscstudent,
  ecefemalemscstudent :req.body.ecefemalemscstudent,
  ecetotalmfilstudent :req.body.ecetotalmfilstudent,
  ecemalemfilstudent  :req.body.ecemalemfilstudent,
  ecefemalemfilstudent:req.body.ecefemalemfilstudent,
  ecetotalphdstudent  :req.body.ecetotalphdstudent,
  ecemalephdstudent   :req.body.ecemalephdstudent,
  ecefemalephdstudent :req.body.ecefemalephdstudent,
  eceforeignmalebscstudent   :req.body.eceforeignmalebscstudent,
  eceforeignfemalebscstudent :req.body.eceforeignfemalebscstudent,
  eceforeignmalemscstudent   :req.body.eceforeignmalemscstudent,
  eceforeignfemalemscstudent :req.body.eceforeignfemalemscstudent,
  eceforeignmalemfilstudent  :req.body.eceforeignmalemfilstudent,
  eceforeignfemalemfilstudent:req.body.eceforeignfemalemfilstudent,
  eceforeignmalephdstudent   :req.body.eceforeignmalephdstudent,
  eceforeignfemalephdstudent :req.body.eceforeignfemalephdstudent,
  ecefulltimemfilmaleteacher  :req.body.ecefulltimemfilmaleteacher,
  ecefulltimemfilfemaleteacher:req.body.ecefulltimemfilfemaleteacher,
  eceparttimemfilmaleteacher  :req.body.eceparttimemfilmaleteacher,
  eceparttimemfilfemaleteacher:req.body.eceparttimemfilfemaleteacher,
  ecefulltimephdmaleteacher   :req.body.ecefulltimephdmaleteacher,
  ecefulltimephdfemaleteacher :req.body.ecefulltimephdfemaleteacher,
  eceparttimephdmaleteacher   :req.body.eceparttimephdmaleteacher,
  eceparttimephdfemaleteacher :req.body.eceparttimephdfemaleteacher,
  ecefulltimemscmaleteacher   :req.body.ecefulltimemscmaleteacher,
  ecefulltimemscfemaleteacher :req.body.ecefulltimemscfemaleteacher,
  eceparttimemscmaleteacher   :req.body.eceparttimemscmaleteacher,
  eceparttimemscfemaleteacher :req.body.eceparttimemscfemaleteacher,
  ecefulltimebscmaleteacher   :req.body.ecefulltimebscmaleteacher,
  ecefulltimebscfemaleteacher :req.body.ecefulltimebscfemaleteacher,
  eceparttimebscmaleteacher   :req.body.eceparttimebscmaleteacher,
  eceparttimebscfemaleteacher :req.body.eceparttimebscfemaleteacher,
  ecefulltimeothermaleteacher :req.body.ecefulltimeothermaleteacher,
  ecefulltimeotherfemaleteacher:req.body.ecefulltimeotherfemaleteacher,
  eceparttimeothermaleteacher  :req.body.eceparttimeothermaleteacher,
  eceparttimeotherfemaleteacher:req.body.eceparttimeotherfemaleteacher,
  eceresearch1  :req.body.eceresearch1,
  eceresearch2  :req.body.eceresearch2,
  eceresearch3  :req.body.eceresearch3,
  eceresearch4  :req.body.eceresearch4,
  eceresearch5  :req.body.eceresearch5,
  eceresearch6  :req.body.eceresearch6,
  ecejournal    :req.body.ecejournal,
  ececonference :req.body.ececonference,
  eceresearch8  :req.body.eceresearch8,
  eceresearch9  :req.body.eceresearch9,
  eceresearch10 :req.body.eceresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('ecedata',{eceuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  eceuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.eceuserId=doc;
        next();
      }
  });
});

router.get('/eceuser/:id/edit',function(req,res){
  res.render('ecedataupdate',{eceuser:req.eceuserId});
});

// for updating data
router.post('/eceuser/:id', function(req, res){
  eceuser.updateOne({_id: req.params.id},
    { $set:{
  ecetotalbscstudent  :req.body.ecetotalbscstudent,
  ecemalebscstudent   :req.body.ecemalebscstudent,
  ecefemalebscstudent :req.body.ecefemalebscstudent,
  ecetotalmscstudent  :req.body.ecetotalmscstudent,
  ecemalemscstudent   :req.body.ecemalemscstudent,
  ecefemalemscstudent :req.body.ecefemalemscstudent,
  ecetotalmfilstudent :req.body.ecetotalmfilstudent,
  ecemalemfilstudent  :req.body.ecemalemfilstudent,
  ecefemalemfilstudent:req.body.ecefemalemfilstudent,
  ecetotalphdstudent  :req.body.ecetotalphdstudent,
  ecemalephdstudent   :req.body.ecemalephdstudent,
  ecefemalephdstudent :req.body.ecefemalephdstudent,
  eceforeignmalebscstudent   :req.body.eceforeignmalebscstudent,
  eceforeignfemalebscstudent :req.body.eceforeignfemalebscstudent,
  eceforeignmalemscstudent   :req.body.eceforeignmalemscstudent,
  eceforeignfemalemscstudent :req.body.eceforeignfemalemscstudent,
  eceforeignmalemfilstudent  :req.body.eceforeignmalemfilstudent,
  eceforeignfemalemfilstudent:req.body.eceforeignfemalemfilstudent,
  eceforeignmalephdstudent   :req.body.eceforeignmalephdstudent,
  eceforeignfemalephdstudent :req.body.eceforeignfemalephdstudent,
  ecefulltimemfilmaleteacher  :req.body.ecefulltimemfilmaleteacher,
  ecefulltimemfilfemaleteacher:req.body.ecefulltimemfilfemaleteacher,
  eceparttimemfilmaleteacher  :req.body.eceparttimemfilmaleteacher,
  eceparttimemfilfemaleteacher:req.body.eceparttimemfilfemaleteacher,
  ecefulltimephdmaleteacher   :req.body.ecefulltimephdmaleteacher,
  ecefulltimephdfemaleteacher :req.body.ecefulltimephdfemaleteacher,
  eceparttimephdmaleteacher   :req.body.eceparttimephdmaleteacher,
  eceparttimephdfemaleteacher :req.body.eceparttimephdfemaleteacher,
  ecefulltimemscmaleteacher   :req.body.ecefulltimemscmaleteacher,
  ecefulltimemscfemaleteacher :req.body.ecefulltimemscfemaleteacher,
  eceparttimemscmaleteacher   :req.body.eceparttimemscmaleteacher,
  eceparttimemscfemaleteacher :req.body.eceparttimemscfemaleteacher,
  ecefulltimebscmaleteacher   :req.body.ecefulltimebscmaleteacher,
  ecefulltimebscfemaleteacher :req.body.ecefulltimebscfemaleteacher,
  eceparttimebscmaleteacher   :req.body.eceparttimebscmaleteacher,
  eceparttimebscfemaleteacher :req.body.eceparttimebscfemaleteacher,
  ecefulltimeothermaleteacher :req.body.ecefulltimeothermaleteacher,
  ecefulltimeotherfemaleteacher:req.body.ecefulltimeotherfemaleteacher,
  eceparttimeothermaleteacher  :req.body.eceparttimeothermaleteacher,
  eceparttimeotherfemaleteacher:req.body.eceparttimeotherfemaleteacher,
  eceresearch1  :req.body.eceresearch1,
  eceresearch2  :req.body.eceresearch2,
  eceresearch3  :req.body.eceresearch3,
  eceresearch4  :req.body.eceresearch4,
  eceresearch5  :req.body.eceresearch5,
  eceresearch6  :req.body.eceresearch6,
  ecejournal    :req.body.ecejournal,
  ececonference :req.body.ececonference,
  eceresearch8  :req.body.eceresearch8,
  eceresearch9  :req.body.eceresearch9,
  eceresearch10 :req.body.eceresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/eceuser/'+req.params.id);
          }
        });
});

router.get('/eceuser/:id',function(req,res){
  res.render('ecedata',{eceuser:req.eceuserId});
});
router.get('/eceuser/:id/delete', function(req,res){
  eceuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ece');
  });
});

module.exports=router;