const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const todoRoutes = require('./Routes/todoRoutes'); 

const live_url = "mongodb+srv://isaacemeka2001_db_user:passworld@cluster0.nqjif6c.mongodb.net/?appName=Cluster0"
const local_url = "mongodb://localhost:27017/userDB";

mongoose.connect(live_url)
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log("Connection error: ", err));

const app = express();
app.use(cors());
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 2. REGISTER YOUR ROUTES HERE
app.use('/api/todos', todoRoutes); 


// Note: Ensure your port matches what you type into Postman!
const port = 9229; 
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});