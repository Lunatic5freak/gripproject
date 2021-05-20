const db=require('./../models/index')
const User=db.users;
const Transact=db.transactions;
exports.create=async (req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        balance:req.body.balance
    })
    await user.save();
    res.send({msg:'user created'})
}

exports.viewAll=async(req,res)=>{
    const users=await User.find({});
    res.render('customers.ejs',{users:users});
}

exports.findbyid=async (req,res)=>{
    const user=await User.findOne({email:req.params.id})
    res.render('user.ejs',{user:user})
}

exports.doTransaction=async (req,res)=>{
    const from_customer=req.body.from;
    const to_customer=req.body.to;
    let amt=req.body.amt;
    amt=parseInt(amt);
    console.log(from_customer);
    console.log(to_customer);
    console.log(amt);
    const user1=await User.findOne({email:from_customer});
    const user2=await User.findOne({email:to_customer});
    let date=Date();
    if(user2!==null && user1!==null){
        const amt1=user1.balance-amt;
    const amt2=user2.balance+amt; 
        await User.updateOne({email:from_customer},{$set:{balance:amt1}});
    await User.updateOne({email:to_customer},{$set:{balance:amt2}});
    const transact=new Transact({
        from_customer:from_customer,
        to_customer:to_customer,
        transfer_date:date,
        transfer_amount:amt
    })
    await transact.save();
    res.render('response',{msg:'Transaction sucessfull'});
    } else{
        res.render('response',{msg:'some error occured!please use correct credentials'})
    }
     
}

exports.viewAllTransaction=(req,res)=>{
    Transact.find({},(err,doc)=>{
        res.render('alltransactions',{transactions:doc})
    })
}