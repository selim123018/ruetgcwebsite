const router = require('express').Router();
var educationsectionuser=require('../../models/educationsection');

router.get('/educationsectionadmin',function(req,res){
    res.render('educationsectionadmin');
});

router.get('/educationsectiondata',function(req,res){
  if(req.query.educationsectionsession){
    educationsectionuser.findOne({_id:req.query.educationsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('educationsectiondata',{educationsectionuser:doc});
    }
  });
  }
});

router.post('/educationsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='educationsectionadmin' && req.body.password=='educationsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/educationsection');
})

router.get('/educationsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/educationsectionadmin');
  })
})

router.get('/educationsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('educationsection');
  }
  else
  {
    res.end('who are you');
  }
});



router.post('/educationsectionnew',function(req,res){
  new educationsectionuser({
  _id                 :req.body.session,
  cseforeignbscmalestudent:req.body.cseforeignbscmalestudent,
  cseforeignbsctfemalestudent:req.body.cseforeignbsctfemalestudent,
  gender1                    :req.body.gender1,
  faculty1                   :req.body.faculty1,
  department1                :req.body.department1,
  degree1                    :req.body.degree1,
  foreignstudentcountry1     :req.body.foreignstudentcountry1,
  foreignschoolarshipbscstudent1:req.body.foreignschoolarshipbscstudent1,
  foreignownexpensebscstudent1:req.body.foreignownexpensebscstudent1,
  gender2                    :req.body.gender2,
  faculty2                   :req.body.faculty2,
  department2                :req.body.department2,
  degree2                    :req.body.degree2,
  foreignstudentcountry2     :req.body.foreignstudentcountry2,
  foreignschoolarshipbscstudent2:req.body.foreignschoolarshipbscstudent2,
  foreignownexpensebscstudent2:req.body.foreignownexpensebscstudent2,
  gender3                    :req.body.gender3,
  faculty3                   :req.body.faculty3,
  department3                :req.body.department3,
  degree3                    :req.body.degree3,
  foreignstudentcountry3     :req.body.foreignstudentcountry3,
  foreignschoolarshipbscstudent3:req.body.foreignschoolarshipbscstudent3,
  foreignownexpensebscstudent3:req.body.foreignownexpensebscstudent3,
  gender4                    :req.body.gender4,
  faculty4                   :req.body.faculty4,
  department4                :req.body.department4,
  degree4                    :req.body.degree4,
  foreignstudentcountry4     :req.body.foreignstudentcountry4,
  foreignschoolarshipbscstudent4:req.body.foreignschoolarshipbscstudent4,
  foreignownexpensebscstudent4:req.body.foreignownexpensebscstudent4,
  gender5                    :req.body.gender5,
  faculty5                   :req.body.faculty5,
  department5                :req.body.department5,
  degree5                    :req.body.degree5,
  foreignstudentcountry5     :req.body.foreignstudentcountry5,
  foreignschoolarshipbscstudent5:req.body.foreignschoolarshipbscstudent5,
  foreignownexpensebscstudent5:req.body.foreignownexpensebscstudent5,
  gender6                    :req.body.gender6,
  faculty6                   :req.body.faculty6,
  department6                :req.body.department6,
  degree6                    :req.body.degree6,
  foreignstudentcountry6     :req.body.foreignstudentcountry6,
  foreignschoolarshipbscstudent6:req.body.foreignschoolarshipbscstudent6,
  foreignownexpensebscstudent6:req.body.foreignownexpensebscstudent6,
  gender7                    :req.body.gender7,
  faculty7                   :req.body.faculty7,
  department7                :req.body.department7,
  degree7                    :req.body.degree7,
  foreignstudentcountry7     :req.body.foreignstudentcountry7,
  foreignschoolarshipbscstudent7:req.body.foreignschoolarshipbscstudent7,
  foreignownexpensebscstudent7:req.body.foreignownexpensebscstudent7,
  dropoutfaculty1             :req.body.dropoutfaculty1,
  dropoutdepartment1          :req.body.dropoutdepartment1,
  dropoutmalestudent1         :req.body.dropoutmalestudent1,
  dropoutfemalestudent1       :req.body.dropoutfemalestudent1,
  dropoutfaculty2             :req.body.dropoutfaculty2,
  dropoutdepartment2          :req.body.dropoutdepartment2,
  dropoutmalestudent2         :req.body.dropoutmalestudent2,
  dropoutfemalestudent2       :req.body.dropoutfemalestudent2,
  dropoutfaculty3             :req.body.dropoutfaculty3,
  dropoutdepartment3          :req.body.dropoutdepartment3,
  dropoutmalestudent3         :req.body.dropoutmalestudent3,
  dropoutfemalestudent3       :req.body.dropoutfemalestudent3,
  dropoutfaculty4             :req.body.dropoutfaculty4,
  dropoutdepartment4          :req.body.dropoutdepartment4,
  dropoutmalestudent4         :req.body.dropoutmalestudent4,
  dropoutfemalestudent4       :req.body.dropoutfemalestudent4,
  dropoutfaculty5             :req.body.dropoutfaculty5,
  dropoutdepartment5          :req.body.dropoutdepartment5,
  dropoutmalestudent5         :req.body.dropoutmalestudent5,
  dropoutfemalestudent5       :req.body.dropoutfemalestudent5,
  fullfreemalestudent         :req.body.fullfreemalestudent,
  fullfreefemalestudent       :req.body.fullfreefemalestudent,
  schoolarshipandfeloshipmalestudent:req.body.schoolarshipandfeloshipmalestudent,
  schoolarshipandfeloshipfemalestudent:req.body.schoolarshipandfeloshipfemalestudent,
  schoolarshipmalestudent     :req.body.schoolarshipmalestudent,
  schoolarshipfemalestudent   :req.body.schoolarshipfemalestudent,
  feloshipmalestudent         :req.body.feloshipmalestudent,
  feloshipfemalestudent       :req.body.feloshipfemalestudent,
  otherschoolarshipmalestudent:req.body.otherschoolarshipmalestudent,
  otherschoolarshipfemalestudent:req.body.otherschoolarshipfemalestudent,
  bscpasssession              :req.body.bscpasssession,
  bscadmitmalestudent         :req.body.bscadmitmalestudent,
  bscadmitfemalestudent       :req.body.bscadmitfemalestudent,
  bscpassmalestudent          :req.body.bscpassmalestudent,
  bscpassfemalestudent        :req.body.bscpassfemalestudent,
  percentageofbscpass         :req.body.percentageofbscpass,
  mscpasssession              :req.body.mscpasssession,
  mscadmitmalestudent         :req.body.mscadmitmalestudent,
  mscadmitfemalestudent       :req.body.mscadmitfemalestudent,
  mscpassmalestudent          :req.body.mscpassmalestudent,
  mscpassfemalestudent        :req.body.mscpassfemalestudent,
  percentageofmscpass         :req.body.percentageofmscpass,
  mfilpasssession             :req.body.mfilpasssession,
  mfiladmitmalestudent        :req.body.mfiladmitmalestudent,
  mfiladmitfemalestudent      :req.body.mfiladmitfemalestudent,
  mfilpassmalestudent         :req.body.mfilpassmalestudent,
  mfilpassfemalestudent       :req.body.mfilpassfemalestudent,
  percentageofmfilpass        :req.body.percentageofmfilpass,
  phdpasssession              :req.body.phdpasssession,
  phdadmitmalestudent         :req.body.phdadmitmalestudent,
  phdadmitfemalestudent       :req.body.phdadmitfemalestudent,
  phdpassmalestudent          :req.body.phdpassmalestudent,
  phdpassfemalestudent        :req.body.phdpassfemalestudent,
  percentageofphdpass         :req.body.percentageofphdpass
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('educationsectiondata',{educationsectionuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  educationsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.educationsectionuserId=doc;
        next();
      }
  });
});

router.get('/educationsectionuser/:id/edit',function(req,res){
  res.render('educationsectiondataupdate',{educationsectionuser:req.educationsectionuserId});
});

// for updating data
router.post('/educationsectionuser/:id', function(req, res){
  educationsectionuser.updateOne({_id: req.params.id},
    { $set:{
  cseforeignbscmalestudent:req.body.cseforeignbscmalestudent,
  cseforeignbsctfemalestudent:req.body.cseforeignbsctfemalestudent,
  gender1                    :req.body.gender1,
  faculty1                   :req.body.faculty1,
  department1                :req.body.department1,
  degree1                    :req.body.degree1,
  foreignstudentcountry1     :req.body.foreignstudentcountry1,
  foreignschoolarshipbscstudent1:req.body.foreignschoolarshipbscstudent1,
  foreignownexpensebscstudent1:req.body.foreignownexpensebscstudent1,
  gender2                    :req.body.gender2,
  faculty2                   :req.body.faculty2,
  department2                :req.body.department2,
  degree2                    :req.body.degree2,
  foreignstudentcountry2     :req.body.foreignstudentcountry2,
  foreignschoolarshipbscstudent2:req.body.foreignschoolarshipbscstudent2,
  foreignownexpensebscstudent2:req.body.foreignownexpensebscstudent2,
  gender3                    :req.body.gender3,
  faculty3                   :req.body.faculty3,
  department3                :req.body.department3,
  degree3                    :req.body.degree3,
  foreignstudentcountry3     :req.body.foreignstudentcountry3,
  foreignschoolarshipbscstudent3:req.body.foreignschoolarshipbscstudent3,
  foreignownexpensebscstudent3:req.body.foreignownexpensebscstudent3,
  gender4                    :req.body.gender4,
  faculty4                   :req.body.faculty4,
  department4                :req.body.department4,
  degree4                    :req.body.degree4,
  foreignstudentcountry4     :req.body.foreignstudentcountry4,
  foreignschoolarshipbscstudent4:req.body.foreignschoolarshipbscstudent4,
  foreignownexpensebscstudent4:req.body.foreignownexpensebscstudent4,
  gender5                    :req.body.gender5,
  faculty5                   :req.body.faculty5,
  department5                :req.body.department5,
  degree5                    :req.body.degree5,
  foreignstudentcountry5     :req.body.foreignstudentcountry5,
  foreignschoolarshipbscstudent5:req.body.foreignschoolarshipbscstudent5,
  foreignownexpensebscstudent5:req.body.foreignownexpensebscstudent5,
  gender6                    :req.body.gender6,
  faculty6                   :req.body.faculty6,
  department6                :req.body.department6,
  degree6                    :req.body.degree6,
  foreignstudentcountry6     :req.body.foreignstudentcountry6,
  foreignschoolarshipbscstudent6:req.body.foreignschoolarshipbscstudent6,
  foreignownexpensebscstudent6:req.body.foreignownexpensebscstudent6,
  gender7                    :req.body.gender7,
  faculty7                   :req.body.faculty7,
  department7                :req.body.department7,
  degree7                    :req.body.degree7,
  foreignstudentcountry7     :req.body.foreignstudentcountry7,
  foreignschoolarshipbscstudent7:req.body.foreignschoolarshipbscstudent7,
  foreignownexpensebscstudent7:req.body.foreignownexpensebscstudent7,
  dropoutfaculty1             :req.body.dropoutfaculty1,
  dropoutdepartment1          :req.body.dropoutdepartment1,
  dropoutmalestudent1         :req.body.dropoutmalestudent1,
  dropoutfemalestudent1       :req.body.dropoutfemalestudent1,
  dropoutfaculty2             :req.body.dropoutfaculty2,
  dropoutdepartment2          :req.body.dropoutdepartment2,
  dropoutmalestudent2         :req.body.dropoutmalestudent2,
  dropoutfemalestudent2       :req.body.dropoutfemalestudent2,
  dropoutfaculty3             :req.body.dropoutfaculty3,
  dropoutdepartment3          :req.body.dropoutdepartment3,
  dropoutmalestudent3         :req.body.dropoutmalestudent3,
  dropoutfemalestudent3       :req.body.dropoutfemalestudent3,
  dropoutfaculty4             :req.body.dropoutfaculty4,
  dropoutdepartment4          :req.body.dropoutdepartment4,
  dropoutmalestudent4         :req.body.dropoutmalestudent4,
  dropoutfemalestudent4       :req.body.dropoutfemalestudent4,
  dropoutfaculty5             :req.body.dropoutfaculty5,
  dropoutdepartment5          :req.body.dropoutdepartment5,
  dropoutmalestudent5         :req.body.dropoutmalestudent5,
  dropoutfemalestudent5       :req.body.dropoutfemalestudent5,
  fullfreemalestudent         :req.body.fullfreemalestudent,
  fullfreefemalestudent       :req.body.fullfreefemalestudent,
  schoolarshipandfeloshipmalestudent:req.body.schoolarshipandfeloshipmalestudent,
  schoolarshipandfeloshipfemalestudent:req.body.schoolarshipandfeloshipfemalestudent,
  schoolarshipmalestudent     :req.body.schoolarshipmalestudent,
  schoolarshipfemalestudent   :req.body.schoolarshipfemalestudent,
  feloshipmalestudent         :req.body.feloshipmalestudent,
  feloshipfemalestudent       :req.body.feloshipfemalestudent,
  otherschoolarshipmalestudent:req.body.otherschoolarshipmalestudent,
  otherschoolarshipfemalestudent:req.body.otherschoolarshipfemalestudent,
  bscpasssession              :req.body.bscpasssession,
  bscadmitmalestudent         :req.body.bscadmitmalestudent,
  bscadmitfemalestudent       :req.body.bscadmitfemalestudent,
  bscpassmalestudent          :req.body.bscpassmalestudent,
  bscpassfemalestudent        :req.body.bscpassfemalestudent,
  percentageofbscpass         :req.body.percentageofbscpass,
  mscpasssession              :req.body.mscpasssession,
  mscadmitmalestudent         :req.body.mscadmitmalestudent,
  mscadmitfemalestudent       :req.body.mscadmitfemalestudent,
  mscpassmalestudent          :req.body.mscpassmalestudent,
  mscpassfemalestudent        :req.body.mscpassfemalestudent,
  percentageofmscpass         :req.body.percentageofmscpass,
  mfilpasssession             :req.body.mfilpasssession,
  mfiladmitmalestudent        :req.body.mfiladmitmalestudent,
  mfiladmitfemalestudent      :req.body.mfiladmitfemalestudent,
  mfilpassmalestudent         :req.body.mfilpassmalestudent,
  mfilpassfemalestudent       :req.body.mfilpassfemalestudent,
  percentageofmfilpass        :req.body.percentageofmfilpass,
  phdpasssession              :req.body.phdpasssession,
  phdadmitmalestudent         :req.body.phdadmitmalestudent,
  phdadmitfemalestudent       :req.body.phdadmitfemalestudent,
  phdpassmalestudent          :req.body.phdpassmalestudent,
  phdpassfemalestudent        :req.body.phdpassfemalestudent,
  percentageofphdpass         :req.body.percentageofphdpass
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/educationsectionuser/'+req.params.id);
          }
        });
});

router.get('/educationsectionuser/:id',function(req,res){
  res.render('educationsectiondata',{educationsectionuser:req.educationsectionuserId});
});
router.get('/educationsectionuser/:id/delete', function(req,res){
  educationsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/educationsection');
  });
});

module.exports=router;