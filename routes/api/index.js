const router = require('express').Router();
var accountsectionuser=require('../../models/accountsection');
var archiuser=require('../../models/archi');
var becmuser=require('../../models/becm');
var ceuser=require('../../models/ce');
var cfpeuser=require('../../models/cfpe');
var chemistryuser=require('../../models/chemistry');
var commiteuser=require('../../models/commite');
var computercentreuser=require('../../models/computercentre');
var user=require('../../models/cse');
var eceuser=require('../../models/ece');
var educationsectionuser=require('../../models/educationsection');
var eeeuser=require('../../models/eee');
var engineeringsectionuser=require('../../models/engineeringsection');
var eteuser=require('../../models/ete');
var foundationsectionuser=require('../../models/foundationsection');
var gceuser=require('../../models/gce');
var halluser=require('../../models/hall');
var humuser=require('../../models/hum');
var ipeuser=require('../../models/ipe');
var libraryuser=require('../../models/library');
var mathuser=require('../../models/math');
var meuser=require('../../models/me');
var mseuser=require('../../models/mse');
var mteuser=require('../../models/mte');
var physicsuser=require('../../models/physics');
var urpuser=require('../../models/urp');


var session;

router.get('/',function(req,res){
  res.render('home');
})

  var eee={};
  var cse={};
  var ete={};
  var ece={};
  var ce={};
  var becm={};
  var urp={};
  var archi={};
  var me={};
  var ipe={};
  var gce={};
  var mte={};
  var cfpe={};
  var mse={};
  var hum={};
  var math={};
  var physics={};
  var chemistry={};
  var educationsection={};
  var commite={};
  var foundationsection={};
  var library={};
  var accountsection={};
  var engineeringsection={};
  var hall={};

router.get('/session',function(req,res){

  if(req.query.session)
  {
    eeeuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       eee=doc;
      }
    });

    user.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       cse=doc;
      }
    });

    eteuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       ete=doc;
      }
    });

    eceuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       ece=doc;
      }
    });

    ceuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       ce=doc;
      }
    });

    becmuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       becm=doc;
      }
    });

    urpuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       urp=doc;
      }
    });

    archiuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       archi=doc;
      }
    });

    meuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       me=doc;
      }
    });

    ipeuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       ipe=doc;
      }
    });

    gceuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       gce=doc;
      }
    });

    mteuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       mte=doc;
      }
    });

    cfpeuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       cfpe=doc;
      }
    });

    mseuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       mse=doc;
      }
    });


     humuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       hum=doc;
      }
    });


    mathuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       math=doc;
      }
    });

    physicsuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       physics=doc;
      }
    });

    chemistryuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       chemistry=doc;
      }
    });

    educationsectionuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       educationsection=doc;
      }
    });

    commiteuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       commite=doc;
      }
    });

    foundationsectionuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       foundationsection=doc;
      }
    });

    libraryuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       library=doc;
      }
    });

    accountsectionuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       accountsection=doc;
      }
    });

    engineeringsectionuser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       engineeringsection=doc;
      }
    });

    halluser.findOne({ _id:req.query.session},function(err,doc){
      if(err) throw err;
      else{
       hall=doc;
       res.render('index',{eeeuser:eee, user:cse, eteuser:ete, eceuser:ece, ceuser:ce, becmuser:becm,
      urpuser:urp, archiuser:archi, meuser:me, ipeuser:ipe, gceuser:gce, mteuser:mte, cfpeuser:cfpe,
      mseuser:mse, mathuser:math, physicsuser:physics, chemistryuser:chemistry, 
      educationsectionuser:educationsection, commiteuser:commite, foundationsectionuser:foundationsection, 
      humuser:hum, libraryuser:library, accountsectionuser:accountsection,
      engineeringsectionuser:engineeringsection, halluser:hall });
      }
    });
  }
});

module.exports=router;