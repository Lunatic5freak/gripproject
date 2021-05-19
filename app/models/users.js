module.exports=(mongoose)=>{
    var schema=mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        balance:{
            type:Number,
            required:true
        }
    })
    var User=mongoose.model('User',schema);
    return User;
}