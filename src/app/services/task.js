import TaskRepository from '../repositories/task';
import Cache from '../utils/Cache';
import Format from '../utils/Format';

class TaskService {
  async getAll(limit, page) {
    // const tasksCache = await Cache.get(`tasks-${page}`);

    // if (tasksCache) {
    //   return JSON.parse(tasksCache);
    // }

    const tasks = await TaskRepository.getAll(limit, page);
    // await Cache.set(`tasks-${page}`, JSON.stringify(tasks));

    return tasks;
  }

  async find(id) {
    const task = await TaskRepository.find(id);

    return task;
  }

  async create(text, done) {
    const task = await TaskRepository.create(
      Format.removeSpecialsCharacters(text),
      done
    );
    return task;
  }
  
  async update(id, text, done) {
    console.log(id, text, done)
    const task = await TaskRepository.update(
      id,
      Format.removeSpecialsCharacters(text),
      done
    );
    return task;
  }

  async delete(id) {
    return await TaskRepository.delete(id)
  }
}

export default new TaskService();
