import createError from 'http-errors';

import TaskService from '../services/task';

import HttpConstants from '../constants/http';

class TaskController {
  async index(request, response) {
    const { limit, page } = request.query;
    
    try {
      const tasks = await TaskService.getAll(limit ?? 10, page ?? 1);

      return response.json(tasks);
    } catch (error) {
      return response.status(error.status || HttpConstants.BadRequest).json(error);
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const task = await TaskService.find(id);

      return response.json(task);
    } catch (error)  {
      return response.status(error.status || HttpConstants.BadRequest).json(error);
    }
  }

  async store(request, response) {
    const { text, done } = request.body;

    try {
      const task = await TaskService.create(text, done);

      return response.status(HttpConstants.Created).json(task);
    } catch (error) {
      return response.status(error.status || HttpConstants.BadRequest).json(error);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { text, done } = request.body;
    
    try {
      const task = await TaskService.update(id, text, done);

      return response.json(task);
    } catch (error) {
      return response.status(error.status || HttpConstants.BadRequest).json(error);
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      await TaskService.delete(id);

      return response.sendStatus(HttpConstants.NoContent);
    } catch (error) {
      return response.status(error.status || HttpConstants.BadRequest).json(error);
    }
  }
}

export default new TaskController();
