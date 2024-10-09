/*
Definir a implementação de um serviço definido na rota
*/

import Cliente from "../models/cliente_model.js";

const store = async (req, res) => {
  try {
    await Cliente.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const index = async (req, res) => {
    try {
      const content = await Cliente.find().exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  const show = async (req, res) => {
    try {
      const content = await Cliente.findByIdAndUpdate(req, params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

    
  const destroy = async (req, res) => {
    try {
      const content = await Cliente.findByIdAndDelete(req, params.id, ).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };