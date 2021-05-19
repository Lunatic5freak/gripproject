module.exports=(mongoose)=>{
    var schema=mongoose.Schema({
        from_customer:{
            type:String,
            reequired:true
        },
        to_customer:{
            type:String,
            required:true
        },
        transfer_date:{
            type:Date,
            required:true
        },
        transfer_amount:{
            type:Number,
            required:true
        }
    })
    const Transfer=mongoose.model('Transfer',schema)
    return Transfer;
}