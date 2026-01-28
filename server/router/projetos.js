const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  const { search } = req.query; 

  try {
    let filter = {};
    if (search) {
      filter = {
        $or: [
          { title: { $regex: search, $options: 'i' } }, 
          { description: { $regex: search, $options: 'i' } } 
        ]
      };
    }

    const projects = await Project.find(filter);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter projetos' });
  }
});

module.exports = router;
