const router = require('express').Router();
var accountsectionuser=require('../../models/accountsection');

router.get('/accountsectionadmin',function(req,res){
    res.render('accountsectionadmin');
});

router.get('/accountsectiondata',function(req,res){
  if(req.query.accountsectionsession){
    accountsectionuser.findOne({_id:req.query.accountsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('accountsectiondata',{accountsectionuser:doc});
    }
  });
  }
});

router.post('/accountsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='accountsectionadmin' && req.body.password=='accountsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/accountsection');
})

router.get('/accountsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/accountsectionadmin');
  })
})

router.get('/accountsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('accountsection');
  }
  else
  {
    res.end('who are you');
  }
});


router.post('/accountsectionnew',function(req,res){
  new accountsectionuser({
  _id                 :req.body.session,
  revenueallocation   :req.body.revenueallocation,
  developmentallocation:req.body.developmentallocation,
  ownallocation        :req.body.ownallocation,
  foreignsource        :req.body.foreignsource,
  rrevenueallocation   :req.body.rrevenueallocation,
  revenueallocationexpense:req.body.revenueallocationexpense,
  percentageofrevenueallocation:req.body.percentageofrevenueallocation,
  rdevelopmentallocation :req.body.rdevelopmentallocation,
  developmentallocationexpense :req.body.developmentallocationexpense,
  percentageofdevelopmentallocation:req.body.percentageofdevelopmentallocation,
  rownallocation                   :req.body.rownallocation,
  ownallocationexpense             :req.body.ownallocationexpense,
  percentageofownallocation        :req.body.percentageofownallocation,
  rforeignsource                   :req.body.rforeignsource,
  foreignsourceexpense             :req.body.foreignsourceexpense,
  percentageofforeignsource        :req.body.percentageofforeignsource,
  rothersourceallocation           :req.body.rothersourceallocation,
  othersource                      :req.body.othersource,
  percentageofother                :req.body.percentageofother,
  insolvencygrant                  :req.body.insolvencygrant,
  ownincome                        :req.body.ownincome,
  specialdevelopmentallocation     :req.body.specialdevelopmentallocation,
  otherallocation                  :req.body.otherallocation,
  educationexpense                 :req.body.educationexpense,
  percentageofeducationbudget      :req.body.percentageofeducationbudget,
  researchexpense                  :req.body.researchexpense,
  percentageofresearchbudget       :req.body.percentageofresearchbudget,
  salaryexpense                    :req.body.salaryexpense,
  percentageofsalarybudget         :req.body.percentageofsalarybudget,
  researchschoolarshipexpense      :req.body.researchschoolarshipexpense,
  percentageofresearchschoolarshipbudget:req.body.percentageofresearchschoolarshipbudget,
  transportationexpense            :req.body.transportationexpense,
  percentageoftransportationbudget :req.body.percentageoftransportationbudget,
  electricityexpense               :req.body.electricityexpense,
  percentageofelectricitybudget    :req.body.percentageofelectricitybudget,
  infrastructuralexpense           :req.body.infrastructuralexpense,
  percentageofinfrastructuralbudget:req.body.percentageofinfrastructuralbudget,
  otherexpense                     :req.body.otherexpense,
  percentageofotherbudget          :req.body.percentageofotherbudget,
  medicationexpense                :req.body.medicationexpense,
  percentageofmedication           :req.body.percentageofmedication,
  administrasionexpense            :req.body.administrasionexpense,
  percentageofadministrasionexpense:req.body.percentageofadministrasionexpense,
  pensonexpense                    :req.body.pensonexpense,
  percentageofpensonexpense        :req.body.percentageofpensonexpense,
  residentialadvantagemaleteacher  :req.body.residentialadvantagemaleteacher,
  residentialadvantagefemaleteacher:req.body.residentialadvantagefemaleteacher,
  residentialadvantagemaleofficer  :req.body.residentialadvantagemaleofficer,
  residentialadvantagefemaleofficer:req.body.residentialadvantagefemaleofficer,
  residentialadvantagemalethirdclassemploye:req.body.residentialadvantagemalethirdclassemploye,
  residentialadvantagefemalethirdclassemploye:req.body.residentialadvantagefemalethirdclassemploye,
  residentialadvantagemalefourthclassemploye :req.body.residentialadvantagemalefourthclassemploye,
  residentialadvantagefemalefourthclassemploye:req.body.residentialadvantagefemalefourthclassemploye
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('accountsectiondata',{accountsectionuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  accountsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.accountsectionuserId=doc;
        next();
      }
  });
});

router.get('/accountsectionuser/:id/edit',function(req,res){
  res.render('accountsectiondataupdate',{accountsectionuser:req.accountsectionuserId});
});

// for updating data
router.post('/accountsectionuser/:id', function(req, res){
  accountsectionuser.updateOne({_id: req.params.id},
    { $set:{
  revenueallocation   :req.body.revenueallocation,
  developmentallocation:req.body.developmentallocation,
  ownallocation        :req.body.ownallocation,
  foreignsource        :req.body.foreignsource,
  rrevenueallocation   :req.body.rrevenueallocation,
  revenueallocationexpense:req.body.revenueallocationexpense,
  percentageofrevenueallocation:req.body.percentageofrevenueallocation,
  rdevelopmentallocation :req.body.rdevelopmentallocation,
  developmentallocationexpense :req.body.developmentallocationexpense,
  percentageofdevelopmentallocation:req.body.percentageofdevelopmentallocation,
  rownallocation                   :req.body.rownallocation,
  ownallocationexpense             :req.body.ownallocationexpense,
  percentageofownallocation        :req.body.percentageofownallocation,
  rforeignsource                   :req.body.rforeignsource,
  foreignsourceexpense             :req.body.foreignsourceexpense,
  percentageofforeignsource        :req.body.percentageofforeignsource,
  rothersourceallocation           :req.body.rothersourceallocation,
  othersource                      :req.body.othersource,
  percentageofother                :req.body.percentageofother,
  insolvencygrant                  :req.body.insolvencygrant,
  ownincome                        :req.body.ownincome,
  specialdevelopmentallocation     :req.body.specialdevelopmentallocation,
  otherallocation                  :req.body.otherallocation,
  educationexpense                 :req.body.educationexpense,
  percentageofeducationbudget      :req.body.percentageofeducationbudget,
  researchexpense                  :req.body.researchexpense,
  percentageofresearchbudget       :req.body.percentageofresearchbudget,
  salaryexpense                    :req.body.salaryexpense,
  percentageofsalarybudget         :req.body.percentageofsalarybudget,
  researchschoolarshipexpense      :req.body.researchschoolarshipexpense,
  percentageofresearchschoolarshipbudget:req.body.percentageofresearchschoolarshipbudget,
  transportationexpense            :req.body.transportationexpense,
  percentageoftransportationbudget :req.body.percentageoftransportationbudget,
  electricityexpense               :req.body.electricityexpense,
  percentageofelectricitybudget    :req.body.percentageofelectricitybudget,
  infrastructuralexpense           :req.body.infrastructuralexpense,
  percentageofinfrastructuralbudget:req.body.percentageofinfrastructuralbudget,
  otherexpense                     :req.body.otherexpense,
  percentageofotherbudget          :req.body.percentageofotherbudget,
  medicationexpense                :req.body.medicationexpense,
  percentageofmedication           :req.body.percentageofmedication,
  administrasionexpense            :req.body.administrasionexpense,
  percentageofadministrasionexpense:req.body.percentageofadministrasionexpense,
  pensonexpense                    :req.body.pensonexpense,
  percentageofpensonexpense        :req.body.percentageofpensonexpense,
  residentialadvantagemaleteacher  :req.body.residentialadvantagemaleteacher,
  residentialadvantagefemaleteacher:req.body.residentialadvantagefemaleteacher,
  residentialadvantagemaleofficer  :req.body.residentialadvantagemaleofficer,
  residentialadvantagefemaleofficer:req.body.residentialadvantagefemaleofficer,
  residentialadvantagemalethirdclassemploye:req.body.residentialadvantagemalethirdclassemploye,
  residentialadvantagefemalethirdclassemploye:req.body.residentialadvantagefemalethirdclassemploye,
  residentialadvantagemalefourthclassemploye :req.body.residentialadvantagemalefourthclassemploye,
  residentialadvantagefemalefourthclassemploye:req.body.residentialadvantagefemalefourthclassemploye
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/accountsectionuser/'+req.params.id);
          }
        });
});

router.get('/accountsectionuser/:id',function(req,res){
  res.render('accountsectiondata',{accountsectionuser:req.accountsectionuserId});
});
router.get('/accountsectionuser/:id/delete', function(req,res){
  accountsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/accountsection');
  });
});

module.exports=router;