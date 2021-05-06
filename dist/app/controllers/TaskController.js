"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _httperrors = require('http-errors'); var _httperrors2 = _interopRequireDefault(_httperrors);

var _task = require('../services/task'); var _task2 = _interopRequireDefault(_task);

var _http = require('../constants/http'); var _http2 = _interopRequireDefault(_http);

class TaskController {
  async index(request, response) {
    const { limit, page } = request.query;
    
    try {
      const tasks = await _task2.default.getAll(_nullishCoalesce(limit, () => ( 10)), _nullishCoalesce(page, () => ( 1)));

      return response.json(tasks);
    } catch (error) {
      return response.status(error.status || _http2.default.BadRequest).json(error);
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const task = await _task2.default.find(id);

      return response.json(task);
    } catch (error)  {
      return response.status(error.status || _http2.default.BadRequest).json(error);
    }
  }

  async store(request, response) {
    const { text, done } = request.body;

    try {
      const task = await _task2.default.create(text, done);

      return response.status(_http2.default.Created).json(task);
    } catch (error) {
      return response.status(error.status || _http2.default.BadRequest).json(error);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { text, done } = request.body;
    
    try {
      const task = await _task2.default.update(id, text, done);

      return response.json(task);
    } catch (error) {
      return response.status(error.status || _http2.default.BadRequest).json(error);
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      await _task2.default.delete(id);

      return response.sendStatus(_http2.default.NoContent);
    } catch (error) {
      return response.status(error.status || _http2.default.BadRequest).json(error);
    }
  }
}

exports. default = new TaskController();
