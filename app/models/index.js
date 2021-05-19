const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const db={};
db.users=require('./users')(mongoose);
db.transactions=require('./transaction')(mongoose);
module.exports=db;