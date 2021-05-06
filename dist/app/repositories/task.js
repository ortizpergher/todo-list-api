"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Task = require('../models/Task'); var _Task2 = _interopRequireDefault(_Task);

class TaskRepository {
  async getAll(limit, page) {
    const tasks = await _Task2.default.findAndCountAll({
      limit,
      offset: limit * (page - 1),
    });

    return tasks;
  }

  async find(id) {
    const task = await _Task2.default.findOne({
      where: { id },
    });

    return task;
  }

  async create(text, done) {
    const task = await _Task2.default.create({ text, done });

    return task;
  }

  async update(id, text, done,) {
    const data = await _Task2.default.update(
      {
        text,
        done,
      },
      {
        where: { id },
        returning: ['id', 'text', 'done'],
      }
    );

    return data[1];
  }

  async delete(id) {
    await _Task2.default.destroy({
      where: { id },
    });
  }
}

exports. default = new TaskRepository();
