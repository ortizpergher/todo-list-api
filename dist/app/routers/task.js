"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TaskController = require('../controllers/TaskController'); var _TaskController2 = _interopRequireDefault(_TaskController);
var _tasks = require('../middlewares/tasks');

const routes = new (0, _express.Router)();

routes.get(
  '/tasks',
  _tasks.validaDataList,
  _TaskController2.default.index
  /*
  #swagger.tags = ['tasks'] 
  #swagger.description = 'Rota para buscar as tasks'

  #swagger.parameters['limit'] = {
    in: 'path',
    description: 'Limite',
    required: true,
    type: 'integer'
  }
  #swagger.parameters['page'] = {
    in: 'path',
    description: 'Número da página',
    required: true,
    type: 'integer'
  }
  #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);
routes.get(
  '/tasks/:id',
  _TaskController2.default.show
  /*
  #swagger.tags = ['tasks']

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Id da task',
    required: true,
    type: 'integer'
  }
  #swagger.responses[404] = {
    schema: {
      message: 'NOT_FOUND'
    }
  }
  */
);
routes.post(
  '/tasks',
  _tasks.validateData,
  _TaskController2.default.store
  /*
  #swagger.tags = ['tasks']
  #swagger.description = 'Rota para cadastrar uma nova task'

  #swagger.parameters['text'] = {
    in: 'body',
    description: 'Descrição da tarefa',
    required: true,
    type: 'string'
  }
  #swagger.parameters['done'] = {
    in: 'body',
    description: 'Tarefa efetuada?',
    required: true,
    default: false,
    type: 'boolean'
  }
  */
);
routes.put(
  '/tasks/:id',
  _TaskController2.default.update
  /*
  #swagger.tags = ['tasks']
  #swagger.description = 'Rota para atualizar uma task'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Id da task',
    required: true,
    type: 'integer'
  }

  #swagger.parameters['text'] = {
    in: 'body',
    description: 'Descrição da tarefa',
    required: true,
    type: 'string'
  }
  #swagger.parameters['done'] = {
    in: 'body',
    description: 'Tarefa efetuada?',
    required: true,
    default: false,
    type: 'boolean'
  }
  */
);
routes.delete(
  '/tasks/:id',
  _TaskController2.default.delete
  /*
  #swagger.tags = ['tasks']
  #swagger.description = 'Rota para deletar uma task'

  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Id da task',
    required: true,
    type: 'integer'
  }
  */
);

exports. default = routes;
