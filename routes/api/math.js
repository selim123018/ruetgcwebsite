const router = require('express').Router();
var mathuser=require('../../models/math');

router.get('/mathadmin',function(req,res){
    res.render('mathadmin');
});

router.get('/mathdata',function(req,res){
  if(req.query.mathsession){
    mathuser.findOne({_id:req.query.mathsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('mathdata',{mathuser:doc});
    }
  });
  }
});

router.post('/mathadmin',function(req,res){
  session=req.session;
  if(req.body.username=='mathadmin' && req.body.password=='mathadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/math');
})

router.get('/mathlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/mathadmin');
  })
})

router.get('/math',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('math');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/mathnew',function(req,res){
  new mathuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('mathdata',{mathuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  mathuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.mathuserId=doc;
        next();
      }
  });
});

router.get('/mathuser/:id/edit',function(req,res){
  res.render('mathdataupdate',{mathuser:req.mathuserId});
});

// for updating data
router.post('/mathuser/:id', function(req, res){
  mathuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/mathuser/'+req.params.id);
          }
        });
});

router.get('/mathuser/:id',function(req,res){
  res.render('mathdata',{mathuser:req.mathuserId});
});
router.get('/mathuser/:id/delete', function(req,res){
  mathuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/math');
  });
});

module.exports=router;