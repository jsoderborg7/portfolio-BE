const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: false
  }
  
});

const Projects = mongoose.model('Projects', ProjectsSchema);

module.exports= Projects;