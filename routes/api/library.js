const router = require('express').Router();
var libraryuser=require('../../models/library');

router.get('/libraryadmin',function(req,res){
    res.render('libraryadmin');
});

router.get('/librarydata',function(req,res){
  if(req.query.librarysession){
    libraryuser.findOne({_id:req.query.librarysession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('librarydata',{libraryuser:doc});
    }
  });
  }
});

router.post('/libraryadmin',function(req,res){
  session=req.session;
  if(req.body.username=='libraryadmin' && req.body.password=='libraryadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/library');
})

router.get('/librarylogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/libraryadmin');
  })
})

router.get('/library',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('library');
  }
  else
  {
    res.end('who are you');
  }
});


router.post('/librarynew',function(req,res){
  new libraryuser({
  _id               :req.body.session,
  totallibrarybook  :req.body.totallibrarybook,
  totaljournal      :req.body.totaljournal,
  totalaudiovisual  :req.body.totalaudiovisual,
  totalcollectedlibrarybook:req.body.totalcollectedlibrarybook,
  totalcollectedjournal    :req.body.totalcollectedjournal,
  totalcollectedaudiovisual:req.body.totalcollectedaudiovisual,
  totalsubscribedlibrarybook:req.body.totalsubscribedlibrarybook,
  totalsubscribedjournal    :req.body.totalsubscribedjournal,
  totalsubscribedaudiovisual:req.body.totalsubscribedaudiovisual,
  totalotherlibrarybook     :req.body.totalotherlibrarybook,
  totalotherjournal         :req.body.totalotherjournal,
  totalotheraudiovisual     :req.body.totalotheraudiovisual,
  librarygraduatedmale      :req.body.librarygraduatedmale,
  librarygraduatedfemale    :req.body.librarygraduatedfemale,
  libraryothermale          :req.body.libraryothermale,
  libraryotherfemale        :req.body.libraryotherfemale
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('librarydata',{libraryuser:doc});
  });
});


router.param('id',function(req,res,next,id){
  libraryuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.libraryuserId=doc;
        next();
      }
  });
});

router.get('/libraryuser/:id/edit',function(req,res){
  res.render('librarydataupdate',{libraryuser:req.libraryuserId});
});

// for updating data
router.post('/libraryuser/:id', function(req, res){
  libraryuser.updateOne({_id: req.params.id},
    { $set:{
  totallibrarybook  :req.body.totallibrarybook,
  totaljournal      :req.body.totaljournal,
  totalaudiovisual  :req.body.totalaudiovisual,
  totalcollectedlibrarybook:req.body.totalcollectedlibrarybook,
  totalcollectedjournal    :req.body.totalcollectedjournal,
  totalcollectedaudiovisual:req.body.totalcollectedaudiovisual,
  totalsubscribedlibrarybook:req.body.totalsubscribedlibrarybook,
  totalsubscribedjournal    :req.body.totalsubscribedjournal,
  totalsubscribedaudiovisual:req.body.totalsubscribedaudiovisual,
  totalotherlibrarybook     :req.body.totalotherlibrarybook,
  totalotherjournal         :req.body.totalotherjournal,
  totalotheraudiovisual     :req.body.totalotheraudiovisual,
  librarygraduatedmale      :req.body.librarygraduatedmale,
  librarygraduatedfemale    :req.body.librarygraduatedfemale,
  libraryothermale          :req.body.libraryothermale,
  libraryotherfemale        :req.body.libraryotherfemale
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/libraryuser/'+req.params.id);
          }
        });
});

router.get('/libraryuser/:id',function(req,res){
  res.render('librarydata',{libraryuser:req.libraryuserId});
});
router.get('/libraryuser/:id/delete', function(req,res){
  libraryuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/library');
  });
});

module.exports=router;