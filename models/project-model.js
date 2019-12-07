const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  
});

const Projects = mongoose.model('Projects', ProjectsSchema);

module.exports= Projects;