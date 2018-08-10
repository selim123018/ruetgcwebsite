const router = require('express').Router();
var mteuser=require('../../models/mte');

router.get('/mteadmin',function(req,res){
    res.render('mteadmin');
});

router.get('/mtedata',function(req,res){
  if(req.query.mtesession){
    mteuser.findOne({_id:req.query.mtesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('mtedata',{mteuser:doc});
    }
  });
  }
});

router.post('/mteadmin',function(req,res){
  session=req.session;
  if(req.body.username=='mteadmin' && req.body.password=='mteadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/mte');
})

router.get('/mtelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/mteadmin');
  })
})

router.get('/mte',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('mte');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/mtenew',function(req,res){
  new mteuser({
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
    res.render('mtedata',{mteuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  mteuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.mteuserId=doc;
        next();
      }
  });
});

router.get('/mteuser/:id/edit',function(req,res){
  res.render('mtedataupdate',{mteuser:req.mteuserId});
});

// for updating data
router.post('/mteuser/:id', function(req, res){
  mteuser.updateOne({_id: req.params.id},
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
            res.redirect('/mteuser/'+req.params.id);
          }
        });
});

router.get('/mteuser/:id',function(req,res){
  res.render('mtedata',{mteuser:req.mteuserId});
});
router.get('/mteuser/:id/delete', function(req,res){
  mteuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/mte');
  });
});

module.exports=router;