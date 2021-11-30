const express = require('express');
const path = require("path");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// connect to db
mongoose
    .connect(process.env.DATABASE, {
        
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION ERROR: ', err));

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins
if ((process.env.NODE_ENV = 'development')) {
    app.use(cors({ origin: `http://localhost:3000` }));
}

//For deployment
if ( process.env.NODE_ENV == "production"){
 
    app.use(express.static(path.join(__dirname,"/client/build")));
 
    app.get("*", (req, res) => {
 
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
    }else{
        app.get("/", (req, res) => {
            res.send("Api is Running");
        });
    }


// middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
