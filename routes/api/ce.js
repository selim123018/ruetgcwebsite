const router = require('express').Router();
var ceuser=require('../../models/ce');

router.get('/ceadmin',function(req,res){
    res.render('ceadmin');
});

router.get('/cedata',function(req,res){
  if(req.query.cesession){
    ceuser.findOne({_id:req.query.cesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('cedata',{ceuser:doc});
    }
  });
  }
});

router.post('/ceadmin',function(req,res){
  session=req.session;
  if(req.body.username=='ceadmin' && req.body.password=='ceadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ce');
})

router.get('/celogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/ceadmin');
  })
})

router.get('/ce',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ce');
  }
  else
  {
    res.end('who are you');
  }
});


router.post('/cenew',function(req,res){
  new ceuser({
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
    res.render('cedata',{ceuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  ceuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.ceuserId=doc;
        next();
      }
  });
});

router.get('/ceuser/:id/edit',function(req,res){
  res.render('cedataupdate',{ceuser:req.ceuserId});
});

// for updating data
router.post('/ceuser/:id', function(req, res){
  ceuser.updateOne({_id: req.params.id},
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
            res.redirect('/ceuser/'+req.params.id);
          }
        });
});

router.get('/ceuser/:id',function(req,res){
  res.render('cedata',{ceuser:req.ceuserId});
});
router.get('/ceuser/:id/delete', function(req,res){
  ceuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ce');
  });
});

module.exports=router;