const { default: mongoose } = require('mongoose');

require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology : true
    };


    try{
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected with the database succes");
    }
    catch(error) {
        console.error("Connexion failed with the data base");
    }
}