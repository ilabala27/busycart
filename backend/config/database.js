const mongoose =require('mongoose');

const createDatabase =() =>{

    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MONGODB IS CONNECTED THE HOST: ${con.connection.host}`)
    }).catch((err)=>{
        console.log(err);
    })

}

module.exports= createDatabase;