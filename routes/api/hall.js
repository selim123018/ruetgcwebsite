const router = require('express').Router();
var halluser=require('../../models/hall');


router.get('/halladmin',function(req,res){
    res.render('halladmin');
});

router.get('/halldata',function(req,res){
  if(req.query.hallsession){
    halluser.findOne({_id:req.query.hallsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('halldata',{halluser:doc});
    }
  });
  }
});


router.post('/halladmin',function(req,res){
  session=req.session;
  if(req.body.username=='halladmin' && req.body.password=='halladmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/hall');
})

router.get('/halllogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/halladmin');
  })
})

router.get('/hall',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('hall');
  }
  else
  {
    res.end('who are you');
  }
});




router.get('/hall',function(req,res){
  res.render('hall');
});

router.post('/hallnew',function(req,res){
  new halluser({
  _id                 :req.body.session,
  bongobondhuhallmalestudent  :req.body.bongobondhuhallmalestudent,
  bongobondhuhallfemalestudent:req.body.bongobondhuhallfemalestudent,
  ziahallmalestudent          :req.body.ziahallmalestudent,
  ziahallfemalestudent        :req.body.ziahallfemalestudent,
  selimhallmalestudent        :req.body.selimhallmalestudent,
  selimhallfemalestudent      :req.body.selimhallfemalestudent,
  shohidulhallmalestudent     :req.body.shohidulhallmalestudent,
  shohidulhallfemalestudent   :req.body.shohidulhallfemalestudent,
  hamidhallmalestudent        :req.body.hamidhallmalestudent,
  hamidhallfemalestudent      :req.body.hamidhallfemalestudent,
  tinshedhallmalestudent      :req.body.tinshedhallmalestudent,
  tinshedhallfemalestudent    :req.body.tinshedhallfemalestudent,
  shekhhasinahallmalestudent  :req.body.shekhhasinahallmalestudent,
  shekhhasinahallfemalestudent:req.body.shekhhasinahallfemalestudent
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('halldata',{halluser:doc});
  });
});


router.param('id',function(req,res,next,id){
  halluser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.halluserId=doc;
        next();
      }
  });
});

router.get('/halluser/:id/edit',function(req,res){
  res.render('halldataupdate',{halluser:req.halluserId});
});

// for updating data
router.post('/halluser/:id', function(req, res){
  halluser.updateOne({_id: req.params.id},
    { $set:{
  bongobondhuhallmalestudent  :req.body.bongobondhuhallmalestudent,
  bongobondhuhallfemalestudent:req.body.bongobondhuhallfemalestudent,
  ziahallmalestudent          :req.body.ziahallmalestudent,
  ziahallfemalestudent        :req.body.ziahallfemalestudent,
  selimhallmalestudent        :req.body.selimhallmalestudent,
  selimhallfemalestudent      :req.body.selimhallfemalestudent,
  shohidulhallmalestudent     :req.body.shohidulhallmalestudent,
  shohidulhallfemalestudent   :req.body.shohidulhallfemalestudent,
  hamidhallmalestudent        :req.body.hamidhallmalestudent,
  hamidhallfemalestudent      :req.body.hamidhallfemalestudent,
  tinshedhallmalestudent      :req.body.tinshedhallmalestudent,
  tinshedhallfemalestudent    :req.body.tinshedhallfemalestudent,
  shekhhasinahallmalestudent  :req.body.shekhhasinahallmalestudent,
  shekhhasinahallfemalestudent:req.body.shekhhasinahallfemalestudent
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/halluser/'+req.params.id);
          }
        });
});

router.get('/halluser/:id',function(req,res){
  res.render('halldata',{halluser:req.halluserId});
});
router.get('/halluser/:id/delete', function(req,res){
  halluser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/hall');
  });
});

module.exports=router;