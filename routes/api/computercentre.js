const router = require('express').Router();
var computercentreuser=require('../../models/computercentre');


router.get('/computercentreadmin',function(req,res){
    res.render('computercentreadmin');
});

router.get('/computercentredata',function(req,res){
  if(req.query.computercentresession){
    computercentreuser.findOne({_id:req.query.computercentresession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('computercentredata',{computercentreuser:doc});
    }
  });
  }
});

router.post('/computercentreadmin',function(req,res){
  session=req.session;
  if(req.body.username=='computercentreadmin' && req.body.password=='computercentreadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/computercentre');
})

router.get('/computercentrelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/computercentreadmin');
  })
})

router.get('/computercentre',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('computercentre');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/computercentrenew',function(req,res){
  new computercentreuser({
  _id                 :req.body.session,
  totalstudentcomputer:req.body.totalstudentcomputer,
  totalinternetconnectedcomputer:req.body.totalinternetconnectedcomputer,
  totaladministratorcomputer    :req.body.totaladministratorcomputer,
  studentandcomputer  :req.body.studentandcomputer
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('computercentredata',{computercentreuser:doc});
  });
});

router.param('id',function(req,res,next,id){
  computercentreuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.computercentreuserId=doc;
        next();
      }
  });
});

router.get('/computercentreuser/:id/edit',function(req,res){
  res.render('computercentredataupdate',{computercentreuser:req.computercentreuserId});
});

// for updating data
router.post('/computercentreuser/:id', function(req, res){
  computercentreuser.updateOne({_id: req.params.id},
    { $set:{
  totalstudentcomputer:req.body.totalstudentcomputer,
  totalinternetconnectedcomputer:req.body.totalinternetconnectedcomputer,
  totaladministratorcomputer    :req.body.totaladministratorcomputer,
  studentandcomputer  :req.body.studentandcomputer
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/computercentreuser/'+req.params.id);
          }
        });
});

router.get('/computercentreuser/:id',function(req,res){
  res.render('computercentredata',{computercentreuser:req.computercentreuserId});
});
router.get('/computercentreuser/:id/delete', function(req,res){
  computercentreuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/computercentre');
  });
});

module.exports=router;