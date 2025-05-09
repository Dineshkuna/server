const express = require('express');
const connectDB = require('./config/db'); 
const cors = require('cors');
require('dotenv').config();

const app = express();


connectDB();
app.use(cors({
  origin:function(origin,callback){
    return callback(null,true)
  }
}))

app.use(express.json({ extended: false }));
// app.use(cors());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/authLogin', require('./routes/authLogin')); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
