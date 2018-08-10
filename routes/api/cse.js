const router = require('express').Router();
var user=require('../../models/cse');

router.get('/cseadmin',function(req,res){
    res.render('cseadmin');
});

router.get('/csedata',function(req,res){
  if(req.query.csesession){
    user.findOne({_id:req.query.csesession},function(err,doc){
    if(err) throw err;
    if(!doc){
     res.send('404 not found');
   }else{
     res.render('csedata',{user:doc});
   }
  });
  }
});

router.post('/cseadmin',function(req,res){
  session=req.session;
  if(req.body.username==='cseadmin' && req.body.password==='cseadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/cse');
})

router.get('/cselogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/cseadmin');
  })
})

router.get('/cse',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('cse');
  }
  else
  {
    res.end('who are you');
  }
});


router.post('/new',function(req,res){
  new user({
  _id                 :req.body.session,
  csetotalbscstudent  :req.body.csetotalbscstudent,
  csemalebscstudent   :req.body.csemalebscstudent,
  csefemalebscstudent :req.body.csefemalebscstudent,
  csetotalmscstudent  :req.body.csetotalmscstudent,
  csemalemscstudent   :req.body.csemalemscstudent,
  csefemalemscstudent :req.body.csefemalemscstudent,
  csetotalmfilstudent :req.body.csetotalmfilstudent,
  csemalemfilstudent  :req.body.csemalemfilstudent,
  csefemalemfilstudent:req.body.csefemalemfilstudent,
  csetotalphdstudent  :req.body.csetotalphdstudent,
  csemalephdstudent   :req.body.csemalephdstudent,
  csefemalephdstudent :req.body.csefemalephdstudent,
  cseforeignmalebscstudent   :req.body.cseforeignmalebscstudent,
  cseforeignfemalebscstudent :req.body.cseforeignfemalebscstudent,
  cseforeignmalemscstudent   :req.body.cseforeignmalemscstudent,
  cseforeignfemalemscstudent :req.body.cseforeignfemalemscstudent,
  cseforeignmalemfilstudent  :req.body.cseforeignmalemfilstudent,
  cseforeignfemalemfilstudent:req.body.cseforeignfemalemfilstudent,
  cseforeignmalephdstudent   :req.body.cseforeignmalephdstudent,
  cseforeignfemalephdstudent :req.body.cseforeignfemalephdstudent,
  csefulltimemfilmaleteacher  :req.body.csefulltimemfilmaleteacher,
  csefulltimemfilfemaleteacher:req.body.csefulltimemfilfemaleteacher,
  cseparttimemfilmaleteacher  :req.body.cseparttimemfilmaleteacher,
  cseparttimemfilfemaleteacher:req.body.cseparttimemfilfemaleteacher,
  csefulltimephdmaleteacher   :req.body.csefulltimephdmaleteacher,
  csefulltimephdfemaleteacher :req.body.csefulltimephdfemaleteacher,
  cseparttimephdmaleteacher   :req.body.cseparttimephdmaleteacher,
  cseparttimephdfemaleteacher :req.body.cseparttimephdfemaleteacher,
  csefulltimemscmaleteacher   :req.body.csefulltimemscmaleteacher,
  csefulltimemscfemaleteacher :req.body.csefulltimemscfemaleteacher,
  cseparttimemscmaleteacher   :req.body.cseparttimemscmaleteacher,
  cseparttimemscfemaleteacher :req.body.cseparttimemscfemaleteacher,
  csefulltimebscmaleteacher   :req.body.csefulltimebscmaleteacher,
  csefulltimebsefemaleteacher :req.body.csefulltimebsefemaleteacher,
  cseparttimebscmaleteacher   :req.body.cseparttimebscmaleteacher,
  cseparttimebscfemaleteacher :req.body.cseparttimebscfemaleteacher,
  csefulltimeothermaleteacher :req.body.csefulltimeothermaleteacher,
  csefulltimeotherfemaleteacher:req.body.csefulltimeotherfemaleteacher,
  cseparttimeothermaleteacher  :req.body.cseparttimeothermaleteacher,
  cseparttimeotherfemaleteacher:req.body.cseparttimeotherfemaleteacher,
  cseresearch1  :req.body.cseresearch1,
  cseresearch2  :req.body.cseresearch2,
  cseresearch3  :req.body.cseresearch3,
  cseresearch4  :req.body.cseresearch4,
  cseresearch5  :req.body.cseresearch5,
  cseresearch6  :req.body.cseresearch6,
  csejournal    :req.body.csejournal,
  cseconference :req.body.cseconference,
  cseresearch8  :req.body.cseresearch8,
  cseresearch9  :req.body.cseresearch9,
  cseresearch10 :req.body.cseresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('csedata',{user:doc});
  });
});


router.param('id',function(req,res,next,id){
  user.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.userId=doc;
        next();
      }
  });
});

router.get('/user/:id/edit',function(req,res){
  res.render('csedataupdate',{user:req.userId});
});

// for updating data
router.post('/user/:id', function(req, res){
  user.updateOne({_id: req.params.id},
    { $set:{
  csetotalbscstudent  :req.body.csetotalbscstudent,
  csemalebscstudent   :req.body.csemalebscstudent,
  csefemalebscstudent :req.body.csefemalebscstudent,
  csetotalmscstudent  :req.body.csetotalmscstudent,
  csemalemscstudent   :req.body.csemalemscstudent,
  csefemalemscstudent :req.body.csefemalemscstudent,
  csetotalmfilstudent :req.body.csetotalmfilstudent,
  csemalemfilstudent  :req.body.csemalemfilstudent,
  csefemalemfilstudent:req.body.csefemalemfilstudent,
  csetotalphdstudent  :req.body.csetotalphdstudent,
  csemalephdstudent   :req.body.csemalephdstudent,
  csefemalephdstudent :req.body.csefemalephdstudent,
  cseforeignmalebscstudent   :req.body.cseforeignmalebscstudent,
  cseforeignfemalebscstudent :req.body.cseforeignfemalebscstudent,
  cseforeignmalemscstudent   :req.body.cseforeignmalemscstudent,
  cseforeignfemalemscstudent :req.body.cseforeignfemalemscstudent,
  cseforeignmalemfilstudent  :req.body.cseforeignmalemfilstudent,
  cseforeignfemalemfilstudent:req.body.cseforeignfemalemfilstudent,
  cseforeignmalephdstudent   :req.body.cseforeignmalephdstudent,
  cseforeignfemalephdstudent :req.body.cseforeignfemalephdstudent,
  csefulltimemfilmaleteacher  :req.body.csefulltimemfilmaleteacher,
  csefulltimemfilfemaleteacher:req.body.csefulltimemfilfemaleteacher,
  cseparttimemfilmaleteacher  :req.body.cseparttimemfilmaleteacher,
  cseparttimemfilfemaleteacher:req.body.cseparttimemfilfemaleteacher,
  csefulltimephdmaleteacher   :req.body.csefulltimephdmaleteacher,
  csefulltimephdfemaleteacher :req.body.csefulltimephdfemaleteacher,
  cseparttimephdmaleteacher   :req.body.cseparttimephdmaleteacher,
  cseparttimephdfemaleteacher :req.body.cseparttimephdfemaleteacher,
  csefulltimemscmaleteacher   :req.body.csefulltimemscmaleteacher,
  csefulltimemscfemaleteacher :req.body.csefulltimemscfemaleteacher,
  cseparttimemscmaleteacher   :req.body.cseparttimemscmaleteacher,
  cseparttimemscfemaleteacher :req.body.cseparttimemscfemaleteacher,
  csefulltimebscmaleteacher   :req.body.csefulltimebscmaleteacher,
  csefulltimebsefemaleteacher :req.body.csefulltimebsefemaleteacher,
  cseparttimebscmaleteacher   :req.body.cseparttimebscmaleteacher,
  cseparttimebscfemaleteacher :req.body.cseparttimebscfemaleteacher,
  csefulltimeothermaleteacher :req.body.csefulltimeothermaleteacher,
  csefulltimeotherfemaleteacher:req.body.csefulltimeotherfemaleteacher,
  cseparttimeothermaleteacher  :req.body.cseparttimeothermaleteacher,
  cseparttimeotherfemaleteacher:req.body.cseparttimeotherfemaleteacher,
  cseresearch1  :req.body.cseresearch1,
  cseresearch2  :req.body.cseresearch2,
  cseresearch3  :req.body.cseresearch3,
  cseresearch4  :req.body.cseresearch4,
  cseresearch5  :req.body.cseresearch5,
  cseresearch6  :req.body.cseresearch6,
  csejournal    :req.body.csejournal,
  cseconference :req.body.cseconference,
  cseresearch8  :req.body.cseresearch8,
  cseresearch9  :req.body.cseresearch9,
  cseresearch10 :req.body.cseresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/user/'+req.params.id);
          }
        });
});

// to show the view page
router.get('/user/:id',function(req,res){
  res.render('csedata',{user:req.userId});
});

router.get('/user/:id/delete', function(req,res){
  user.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/cse');
  });
});

module.exports=router;