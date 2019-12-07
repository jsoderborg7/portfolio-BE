const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  picture: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  },

  stack: {
    type: String,
    required: false
  }
  
});

const Projects = mongoose.model('Projects', ProjectsSchema);

module.exports= Projects;