const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Rota para obter todos os projetos ou pesquisar por título ou descrição
router.get('/', async (req, res) => {
  const { search } = req.query; // Obtém o parâmetro de pesquisa

  try {
    let filter = {};
    if (search) {
      filter = {
        $or: [
          { title: { $regex: search, $options: 'i' } }, // Pesquisa no título
          { description: { $regex: search, $options: 'i' } } // Pesquisa na descrição
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
