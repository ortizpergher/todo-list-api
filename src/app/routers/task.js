import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import { validateData, validaDataList } from '../middlewares/tasks';

const routes = new Router();

routes.get(
  '/tasks',
  validaDataList,
  TaskController.index
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
  TaskController.show
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
  validateData,
  TaskController.store
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
  TaskController.update
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
  TaskController.delete
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

export default routes;
