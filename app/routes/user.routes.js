module.exports=(app)=>{
    const router=require('express').Router()
    const users=require('./../controllers/users.controller')

    // router.post('/',users.create)
    router.get('/',users.viewAll)
    router.get("/:id",users.findbyid)
    router.post('/',users.doTransaction)
    router.get('/view/transaction',users.viewAllTransaction);

    app.use('/api/user',router);
}