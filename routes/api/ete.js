const router = require('express').Router();
var eteuser=require('../../models/ete');

router.get('/eteadmin',function(req,res){
    res.render('eteadmin');
});

router.get('/etedata',function(req,res){
  if(req.query.etesession){
    eteuser.findOne({_id:req.query.etesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('etedata',{eteuser:doc});
    }
  });
  }
});

router.post('/eteadmin',function(req,res){
  session=req.session;
  if(req.body.username=='eteadmin' && req.body.password=='eteadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ete');
})

router.get('/etelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/eteadmin');
  })
})

router.get('/ete',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ete');
  }
  else
  {
    res.end('who are you');
  }
});


router.post('/etenew',function(req,res){
  new eteuser({
  _id                 :req.body.session,
  etetotalbscstudent  :req.body.etetotalbscstudent,
  etemalebscstudent   :req.body.etemalebscstudent,
  etefemalebscstudent :req.body.etefemalebscstudent,
  etetotalmscstudent  :req.body.etetotalmscstudent,
  etemalemscstudent   :req.body.etemalemscstudent,
  etefemalemscstudent :req.body.etefemalemscstudent,
  etetotalmfilstudent :req.body.etetotalmfilstudent,
  etemalemfilstudent  :req.body.etemalemfilstudent,
  etefemalemfilstudent:req.body.etefemalemfilstudent,
  etetotalphdstudent  :req.body.etetotalphdstudent,
  etemalephdstudent   :req.body.etemalephdstudent,
  etefemalephdstudent :req.body.etefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  etefulltimemfilmaleteacher  :req.body.etefulltimemfilmaleteacher,
  etefulltimemfilfemaleteacher:req.body.etefulltimemfilfemaleteacher,
  eteparttimemfilmaleteacher  :req.body.eteparttimemfilmaleteacher,
  eteparttimemfilfemaleteacher:req.body.eteparttimemfilfemaleteacher,
  etefulltimephdmaleteacher   :req.body.etefulltimephdmaleteacher,
  etefulltimephdfemaleteacher :req.body.etefulltimephdfemaleteacher,
  eteparttimephdmaleteacher   :req.body.eteparttimephdmaleteacher,
  eteparttimephdfemaleteacher :req.body.eteparttimephdfemaleteacher,
  etefulltimemscmaleteacher   :req.body.etefulltimemscmaleteacher,
  etefulltimemscfemaleteacher :req.body.etefulltimemscfemaleteacher,
  eteparttimemscmaleteacher   :req.body.eteparttimemscmaleteacher,
  eteparttimemscfemaleteacher :req.body.eteparttimemscfemaleteacher,
  etefulltimebscmaleteacher   :req.body.etefulltimebscmaleteacher,
  etefulltimebscfemaleteacher :req.body.etefulltimebscfemaleteacher,
  eteparttimebscmaleteacher   :req.body.eteparttimebscmaleteacher,
  eteparttimebscfemaleteacher :req.body.eteparttimebscfemaleteacher,
  etefulltimeothermaleteacher :req.body.etefulltimeothermaleteacher,
  etefulltimeotherfemaleteacher:req.body.etefulltimeotherfemaleteacher,
  eteparttimeothermaleteacher  :req.body.eteparttimeothermaleteacher,
  eteparttimeotherfemaleteacher:req.body.eteparttimeotherfemaleteacher,
  eteresearch1  :req.body.eteresearch1,
  eteresearch2  :req.body.eteresearch2,
  eteresearch3  :req.body.eteresearch3,
  eteresearch4  :req.body.eteresearch4,
  eteresearch5  :req.body.eteresearch5,
  eteresearch6  :req.body.eteresearch6,
  etejournal    :req.body.etejournal,
  eteconference :req.body.eteconference,
  eteresearch9  :req.body.eteresearch8,
  eteresearch9  :req.body.eteresearch9,
  eteresearch10 :req.body.eteresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('etedata',{eteuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  eteuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.eteuserId=doc;
        next();
      }
  });
});

router.get('/eteuser/:id/edit',function(req,res){
  res.render('etedataupdate',{eteuser:req.eteuserId});
});

// for updating data
router.post('/eteuser/:id', function(req, res){
  eteuser.updateOne({_id: req.params.id},
    { $set:{
  etetotalbscstudent  :req.body.etetotalbscstudent,
  etemalebscstudent   :req.body.etemalebscstudent,
  etefemalebscstudent :req.body.etefemalebscstudent,
  etetotalmscstudent  :req.body.etetotalmscstudent,
  etemalemscstudent   :req.body.etemalemscstudent,
  etefemalemscstudent :req.body.etefemalemscstudent,
  etetotalmfilstudent :req.body.etetotalmfilstudent,
  etemalemfilstudent  :req.body.etemalemfilstudent,
  etefemalemfilstudent:req.body.etefemalemfilstudent,
  etetotalphdstudent  :req.body.etetotalphdstudent,
  etemalephdstudent   :req.body.etemalephdstudent,
  etefemalephdstudent :req.body.etefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  etefulltimemfilmaleteacher  :req.body.etefulltimemfilmaleteacher,
  etefulltimemfilfemaleteacher:req.body.etefulltimemfilfemaleteacher,
  eteparttimemfilmaleteacher  :req.body.eteparttimemfilmaleteacher,
  eteparttimemfilfemaleteacher:req.body.eteparttimemfilfemaleteacher,
  etefulltimephdmaleteacher   :req.body.etefulltimephdmaleteacher,
  etefulltimephdfemaleteacher :req.body.etefulltimephdfemaleteacher,
  eteparttimephdmaleteacher   :req.body.eteparttimephdmaleteacher,
  eteparttimephdfemaleteacher :req.body.eteparttimephdfemaleteacher,
  etefulltimemscmaleteacher   :req.body.etefulltimemscmaleteacher,
  etefulltimemscfemaleteacher :req.body.etefulltimemscfemaleteacher,
  eteparttimemscmaleteacher   :req.body.eteparttimemscmaleteacher,
  eteparttimemscfemaleteacher :req.body.eteparttimemscfemaleteacher,
  etefulltimebscmaleteacher   :req.body.etefulltimebscmaleteacher,
  etefulltimebscfemaleteacher :req.body.etefulltimebscfemaleteacher,
  eteparttimebscmaleteacher   :req.body.eteparttimebscmaleteacher,
  eteparttimebscfemaleteacher :req.body.eteparttimebscfemaleteacher,
  etefulltimeothermaleteacher :req.body.etefulltimeothermaleteacher,
  etefulltimeotherfemaleteacher:req.body.etefulltimeotherfemaleteacher,
  eteparttimeothermaleteacher  :req.body.eteparttimeothermaleteacher,
  eteparttimeotherfemaleteacher:req.body.eteparttimeotherfemaleteacher,
  eteresearch1  :req.body.eteresearch1,
  eteresearch2  :req.body.eteresearch2,
  eteresearch3  :req.body.eteresearch3,
  eteresearch4  :req.body.eteresearch4,
  eteresearch5  :req.body.eteresearch5,
  eteresearch6  :req.body.eteresearch6,
  etejournal    :req.body.etejournal,
  eteconference :req.body.eteconference,
  eteresearch8  :req.body.eteresearch8,
  eteresearch9  :req.body.eteresearch9,
  eteresearch10 :req.body.eteresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/eteuser/'+req.params.id);
          }
        });
});

// to show the view page
router.get('/eteuser/:id',function(req,res){
  res.render('etedata',{eteuser:req.eteuserId});
});
router.get('/eteuser/:id/delete', function(req,res){
  eteuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ete');
  });
});

module.exports=router;