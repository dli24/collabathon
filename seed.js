const db = require('./models')



db.User.deleteMany({}, (err, deletedUser)=>{
    if (err) return err;
    return;

});