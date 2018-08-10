const router = require('express').Router();
var eeeuser=require('../../models/eee');

router.get('/eeeadmin',function(req,res){
    res.render('eeeadmin');
});


router.get('/eeedata',function(req,res){
  if(req.query.eeesession){
    eeeuser.findOne({_id:req.query.eeesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }
    else{
     res.render('eeedata',{eeeuser:doc});
    }
  });
  }
});



router.post('/eeeadmin',function(req,res){
  session=req.session;
  if(req.body.username=='eeeadmin' && req.body.password=='eeeadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/eee');
})

router.get('/eeelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/eeeadmin');
  })
})

router.get('/eee',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('eee');
  }
  else
  {
    res.end('who are you');
  }
});




router.post('/eeenew',function(req,res){
	new eeeuser({
  _id                 :req.body.session,
  eeetotalbscstudent  :req.body.eeetotalbscstudent,
  eeemalebscstudent   :req.body.eeemalebscstudent,
  eeefemalebscstudent :req.body.eeefemalebscstudent,
  eeetotalmscstudent  :req.body.eeetotalmscstudent,
  eeemalemscstudent   :req.body.eeemalemscstudent,
  eeefemalemscstudent :req.body.eeefemalemscstudent,
  eeetotalmfilstudent :req.body.eeetotalmfilstudent,
  eeemalemfilstudent  :req.body.eeemalemfilstudent,
  eeefemalemfilstudent:req.body.eeefemalemfilstudent,
  eeetotalphdstudent  :req.body.eeetotalphdstudent,
  eeemalephdstudent   :req.body.eeemalephdstudent,
  eeefemalephdstudent :req.body.eeefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  eeefulltimemfilmaleteacher  :req.body.eeefulltimemfilmaleteacher,
  eeefulltimemfilfemaleteacher:req.body.eeefulltimemfilfemaleteacher,
  eeeparttimemfilmaleteacher  :req.body.eeeparttimemfilmaleteacher,
  eeeparttimemfilfemaleteacher:req.body.eeeparttimemfilfemaleteacher,
  eeefulltimephdmaleteacher   :req.body.eeefulltimephdmaleteacher,
  eeefulltimephdfemaleteacher :req.body.eeefulltimephdfemaleteacher,
  eeeparttimephdmaleteacher   :req.body.eeeparttimephdmaleteacher,
  eeeparttimephdfemaleteacher :req.body.eeeparttimephdfemaleteacher,
  eeefulltimemscmaleteacher   :req.body.eeefulltimemscmaleteacher,
  eeefulltimemscfemaleteacher :req.body.eeefulltimemscfemaleteacher,
  eeeparttimemscmaleteacher   :req.body.eeeparttimemscmaleteacher,
  eeeparttimemscfemaleteacher :req.body.eeeparttimemscfemaleteacher,
  eeefulltimebscmaleteacher   :req.body.eeefulltimebscmaleteacher,
  eeefulltimebscfemaleteacher :req.body.eeefulltimebscfemaleteacher,
  eeeparttimebscmaleteacher   :req.body.eeeparttimebscmaleteacher,
  eeeparttimebscfemaleteacher :req.body.eeeparttimebscfemaleteacher,
  eeefulltimeothermaleteacher :req.body.eeefulltimeothermaleteacher,
  eeefulltimeotherfemaleteacher:req.body.eeefulltimeotherfemaleteacher,
  eeeparttimeothermaleteacher  :req.body.eeeparttimeothermaleteacher,
  eeeparttimeotherfemaleteacher:req.body.eeeparttimeotherfemaleteacher,
  eeeresearch1  :req.body.eeeresearch1,
  eeeresearch2  :req.body.eeeresearch2,
  eeeresearch3  :req.body.eeeresearch3,
  eeeresearch4  :req.body.eeeresearch4,
  eeeresearch5  :req.body.eeeresearch5,
  eeeresearch6  :req.body.eeeresearch6,
  eeejournal    :req.body.eeejournal,
  eeeconference :req.body.eeeconference,
  eeeresearch8  :req.body.eeeresearch8,
  eeeresearch9  :req.body.eeeresearch9,
  eeeresearch9  :req.body.eeeresearch10
	}).save(function(err,doc){
		if(err) res.json(err);
		else
			console.log('data inserted successfully');
		res.render('eeedata',{eeeuser:doc});
	});
});


router.param('id',function(req,res,next,id){
  eeeuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.eeeuserId=doc;
        next();
      }
  });
});

router.get('/eeeuser/:id/edit',function(req,res){
  res.render('eeedataupdate',{eeeuser:req.eeeuserId});
});

// for updating data
router.post('/eeeuser/:id', function(req, res){
  eeeuser.updateOne({_id: req.params.id},
    { $set:{
  eeetotalbscstudent  :req.body.eeetotalbscstudent,
  eeemalebscstudent   :req.body.eeemalebscstudent,
  eeefemalebscstudent :req.body.eeefemalebscstudent,
  eeetotalmscstudent  :req.body.eeetotalmscstudent,
  eeemalemscstudent   :req.body.eeemalemscstudent,
  eeefemalemscstudent :req.body.eeefemalemscstudent,
  eeetotalmfilstudent :req.body.eeetotalmfilstudent,
  eeemalemfilstudent  :req.body.eeemalemfilstudent,
  eeefemalemfilstudent:req.body.eeefemalemfilstudent,
  eeetotalphdstudent  :req.body.eeetotalphdstudent,
  eeemalephdstudent   :req.body.eeemalephdstudent,
  eeefemalephdstudent :req.body.eeefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  eeefulltimemfilmaleteacher  :req.body.eeefulltimemfilmaleteacher,
  eeefulltimemfilfemaleteacher:req.body.eeefulltimemfilfemaleteacher,
  eeeparttimemfilmaleteacher  :req.body.eeeparttimemfilmaleteacher,
  eeeparttimemfilfemaleteacher:req.body.eeeparttimemfilfemaleteacher,
  eeefulltimephdmaleteacher   :req.body.eeefulltimephdmaleteacher,
  eeefulltimephdfemaleteacher :req.body.eeefulltimephdfemaleteacher,
  eeeparttimephdmaleteacher   :req.body.eeeparttimephdmaleteacher,
  eeeparttimephdfemaleteacher :req.body.eeeparttimephdfemaleteacher,
  eeefulltimemscmaleteacher   :req.body.eeefulltimemscmaleteacher,
  eeefulltimemscfemaleteacher :req.body.eeefulltimemscfemaleteacher,
  eeeparttimemscmaleteacher   :req.body.eeeparttimemscmaleteacher,
  eeeparttimemscfemaleteacher :req.body.eeeparttimemscfemaleteacher,
  eeefulltimebscmaleteacher   :req.body.eeefulltimebscmaleteacher,
  eeefulltimebscfemaleteacher :req.body.eeefulltimebscfemaleteacher,
  eeeparttimebscmaleteacher   :req.body.eeeparttimebscmaleteacher,
  eeeparttimebscfemaleteacher :req.body.eeeparttimebscfemaleteacher,
  eeefulltimeothermaleteacher :req.body.eeefulltimeothermaleteacher,
  eeefulltimeotherfemaleteacher:req.body.eeefulltimeotherfemaleteacher,
  eeeparttimeothermaleteacher  :req.body.eeeparttimeothermaleteacher,
  eeeparttimeotherfemaleteacher:req.body.eeeparttimeotherfemaleteacher,
  eeeresearch1  :req.body.eeeresearch1,
  eeeresearch2  :req.body.eeeresearch2,
  eeeresearch3  :req.body.eeeresearch3,
  eeeresearch4  :req.body.eeeresearch4,
  eeeresearch5  :req.body.eeeresearch5,
  eeeresearch6  :req.body.eeeresearch6,
  eeejournal    :req.body.eeejournal,
  eeeconference :req.body.eeeconference,
  eeeresearch8  :req.body.eeeresearch8,
  eeeresearch9  :req.body.eeeresearch9,
  eeeresearch10 :req.body.eeeresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/eeeuser/'+req.params.id);
          }
        });
});

router.get('/eeeuser/:id',function(req,res){
  res.render('eeedata',{eeeuser:req.eeeuserId});
});
router.get('/eeeuser/:id/delete', function(req,res){
  eeeuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/eee');
  });
});

module.exports=router;