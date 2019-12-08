const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const dotenv = require('dotenv');

const server = express();

const Projects = require('./models/project-model');

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(bodyParser.json());

dotenv.config();

const db = process.env.Mongo_URI;

mongoose.connect(db, {useUnifiedTopology:
true})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));


server.get('/', (req, res) =>{
  res.status(200).json({message: "We're connected!"})
});

exports.listAllProjects = (req, res) =>{
  Projects.find({}, (err, project) =>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).json(project);
  });
};

server
.route('/quotes')
.get(this.listAllProjects);

module.exports = server;