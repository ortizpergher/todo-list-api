"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _task = require('../repositories/task'); var _task2 = _interopRequireDefault(_task);
var _Cache = require('../utils/Cache'); var _Cache2 = _interopRequireDefault(_Cache);
var _Format = require('../utils/Format'); var _Format2 = _interopRequireDefault(_Format);

class TaskService {
  async getAll(limit, page) {
    // const tasksCache = await Cache.get(`tasks-${page}`);

    // if (tasksCache) {
    //   return JSON.parse(tasksCache);
    // }

    const tasks = await _task2.default.getAll(limit, page);
    // await Cache.set(`tasks-${page}`, JSON.stringify(tasks));

    return tasks;
  }

  async find(id) {
    const task = await _task2.default.find(id);

    return task;
  }

  async create(text, done) {
    const task = await _task2.default.create(
      _Format2.default.removeSpecialsCharacters(text),
      done
    );
    return task;
  }
  
  async update(id, text, done) {
    const task = await _task2.default.update(
      id,
      _Format2.default.removeSpecialsCharacters(text),
      done
    );
    return task;
  }

  async delete(id) {
    return await _task2.default.delete(id)
  }
}

exports. default = new TaskService();
