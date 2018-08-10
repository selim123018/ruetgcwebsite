const router = require('express').Router();
var engineeringsectionuser=require('../../models/engineeringsection');

router.get('/engineeringsectionadmin',function(req,res){
    res.render('engineeringsectionadmin');
});

router.get('/engineeringsectiondata',function(req,res){
  if(req.query.engineeringsectionsession){
    engineeringsectionuser.findOne({_id:req.query.engineeringsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('engineeringsectiondata',{engineeringsectionuser:doc});
    }
  });
  }
});

router.post('/engineeringsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='engineeringsectionadmin' && req.body.password=='engineeringsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/engineeringsection');
})

router.get('/engineeringsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/engineeringsectionadmin');
  })
})

router.get('/engineeringsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('engineeringsection');
  }
  else
  {
    res.end('who are you');
  }
});


router.post('/engineeringsectionnew',function(req,res){
  new engineeringsectionuser({
  _id                 :req.body.session,
  totalclassroom      :req.body.totalclassroom,
  totalclassroomvolume:req.body.totalclassroomvolume,
  totaladministratorroom:req.body.totaladministratorroom,
  totaladministratorroomvolume:req.body.totaladministratorroomvolume,
  totallibraryroom       :req.body.totallibraryroom,
  totalalibraryroomvolume:req.body.totalalibraryroomvolume,
  totallabratoryroom     :req.body.totallabratoryroom,
  totallabratoryroomvolume:req.body.totallabratoryroomvolume,
  totalhallroom           :req.body.totalhallroom,
  totalhallroomvolume     :req.body.totalhallroomvolume,
  totalauditorium         :req.body.totalauditorium,
  totalauditoriumvolume   :req.body.totalauditoriumvolume,
  totalexerciseroom       :req.body.totalexerciseroom,
  totalexerciseroomvolume :req.body.totalexerciseroomvolume,
  totalplayground         :req.body.totalplayground,
  totalplaygroundvolume   :req.body.totalplaygroundvolume,
  totalswimingpool        :req.body.totalswimingpool,
  totalswimingpoolvolume  :req.body.totalswimingpoolvolume,
  totalguesthouse         :req.body.totalguesthouse,
  totalguesthousevolume   :req.body.totalguesthousevolume,
  totalteacherresidentialaccommodation:req.body.totalteacherresidentialaccommodation,
  totalteacherresidentialaccommodationvolume:req.body.totalteacherresidentialaccommodationvolume,
  totalofficerresidentialaccommodation      :req.body.totalofficerresidentialaccommodation,
  totalofficerresidentialaccommodationvolume:req.body.totalofficerresidentialaccommodationvolume,
  totalemployeresidentialaccommodation      :req.body.totalemployeresidentialaccommodation,
  totalemployeresidentialaccommodationvolume:req.body.totalemployeresidentialaccommodationvolume,
  vcbanglo                                  :req.body.vcbanglo,
  vcbanglovolume                            :req.body.vcbanglovolume
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('engineeringsectiondata',{engineeringsectionuser:doc});
    
  });
});


router.param('id',function(req,res,next,id){
  engineeringsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.engineeringsectionuserId=doc;
        next();
      }
  });
});

router.get('/engineeringsectionuser/:id/edit',function(req,res){
  res.render('engineeringsectiondataupdate',{engineeringsectionuser:req.engineeringsectionuserId});
});

// for updating data
router.post('/engineeringsectionuser/:id', function(req, res){
  engineeringsectionuser.updateOne({_id: req.params.id},
    { $set:{
  totalclassroom      :req.body.totalclassroom,
  totalclassroomvolume:req.body.totalclassroomvolume,
  totaladministratorroom:req.body.totaladministratorroom,
  totaladministratorroomvolume:req.body.totaladministratorroomvolume,
  totallibraryroom       :req.body.totallibraryroom,
  totalalibraryroomvolume:req.body.totalalibraryroomvolume,
  totallabratoryroom     :req.body.totallabratoryroom,
  totallabratoryroomvolume:req.body.totallabratoryroomvolume,
  totalhallroom           :req.body.totalhallroom,
  totalhallroomvolume     :req.body.totalhallroomvolume,
  totalauditorium         :req.body.totalauditorium,
  totalauditoriumvolume   :req.body.totalauditoriumvolume,
  totalexerciseroom       :req.body.totalexerciseroom,
  totalexerciseroomvolume :req.body.totalexerciseroomvolume,
  totalplayground         :req.body.totalplayground,
  totalplaygroundvolume   :req.body.totalplaygroundvolume,
  totalswimingpool        :req.body.totalswimingpool,
  totalswimingpoolvolume  :req.body.totalswimingpoolvolume,
  totalguesthouse         :req.body.totalguesthouse,
  totalguesthousevolume   :req.body.totalguesthousevolume,
  totalteacherresidentialaccommodation:req.body.totalteacherresidentialaccommodation,
  totalteacherresidentialaccommodationvolume:req.body.totalteacherresidentialaccommodationvolume,
  totalofficerresidentialaccommodation      :req.body.totalofficerresidentialaccommodation,
  totalofficerresidentialaccommodationvolume:req.body.totalofficerresidentialaccommodationvolume,
  totalemployeresidentialaccommodation      :req.body.totalemployeresidentialaccommodation,
  totalemployeresidentialaccommodationvolume:req.body.totalemployeresidentialaccommodationvolume,
  vcbanglo                                  :req.body.vcbanglo,
  vcbanglovolume                            :req.body.vcbanglovolume
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/engineeringsectionuser/'+req.params.id);
          }
        });
});

router.get('/engineeringsectionuser/:id',function(req,res){
  res.render('engineeringsectiondata',{engineeringsectionuser:req.engineeringsectionuserId});
});
router.get('/engineeringsectionuser/:id/delete', function(req,res){
  engineeringsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/engineeringsection');
  });
});

module.exports=router;