import Task from '../models/Task';

class TaskRepository {
  async getAll(limit, page) {
    const tasks = await Task.findAndCountAll({
      limit,
      offset: limit * (page - 1),
    });

    return tasks;
  }

  async find(id) {
    const task = await Task.findOne({
      where: { id },
    });

    return task;
  }

  async create(text, done) {
    const task = await Task.create({ text, done });

    return task;
  }

  async update(id, text, done,) {
    const data = await Task.update(
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
    await Task.destroy({
      where: { id },
    });
  }
}

export default new TaskRepository();
