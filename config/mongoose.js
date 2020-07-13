// Set connection with the database
const mongoose= require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Name of the db is Hospital-COVID-API
mongoose.connect('mongodb://localhost/Hospital-COVID-API');

const db = mongoose.connection;

//for error
db.on('error', console.error.bind(console,"ERROR CONNECTING TO DATABASE!!"));

//on success
db.once('open', ()=>{
  console.log("Conncted to database");
});

module.exports = db;
