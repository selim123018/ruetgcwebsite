var express=require('express');
var bodyparser=require('body-parser');
var ejs=require('ejs'); 
var passport=require('passport');
var mongoose=require('mongoose');
var sessions=require('express-session');
var port=process.env.PORT || 5000;

var app=express();


var index=require('./routes/api/index');
var cse=require('./routes/api/cse');
var eee=require('./routes/api/eee');
var ete=require('./routes/api/ete');
var ece=require('./routes/api/ece');
var me=require('./routes/api/me');
var mte=require('./routes/api/mte');
var mse=require('./routes/api/mse');
var gce=require('./routes/api/gce');
var ipe=require('./routes/api/ipe');
var ce=require('./routes/api/ce');
var urp=require('./routes/api/urp');
var archi=require('./routes/api/archi');
var becm=require('./routes/api/becm');
var cfpe=require('./routes/api/cfpe');
var hum=require('./routes/api/hum');
var math=require('./routes/api/math');
var chemistry=require('./routes/api/chemistry');
var physics=require('./routes/api/physics');
var accountsection=require('./routes/api/accountsection');
var computercentre=require('./routes/api/computercentre');
var educationsection=require('./routes/api/educationsection');
var foundationsection=require('./routes/api/foundationsection');
var engineeringsection=require('./routes/api/engineeringsection');
var hall=require('./routes/api/hall');
var library=require('./routes/api/library');
var commite=require('./routes/api/commite');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(sessions({
  secret:'jhuhuhhuhuhu766666',
  resave:false,
  saveUninitialized:true
}))

app.set('view engine','ejs');
app.use('/public',express.static('public'));

var db=mongoose.connect('mongodb://selim:selim12@ds133296.mlab.com:33296/ruet');

app.use(index);
app.use(cse);
app.use(eee);
app.use(ete);
app.use(ece);
app.use(me);
app.use(mte);
app.use(mse);
app.use(gce);
app.use(ipe);
app.use(ce);
app.use(urp);
app.use(archi);
app.use(becm);
app.use(cfpe);
app.use(hum);
app.use(math);
app.use(chemistry);
app.use(physics);
app.use(accountsection);
app.use(computercentre);
app.use(educationsection);
app.use(foundationsection);
app.use(engineeringsection);
app.use(hall);
app.use(library);
app.use(commite);

app.listen(port);
console.log('server is running on port '+port);
