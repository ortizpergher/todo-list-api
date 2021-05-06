import createError from 'http-errors';
import TaskConstants from '../constants/task';
import HttpConstants from '../constants/http';

function validaDataList(request, response, next) {
  const { limit, page } = request.query;

  // se são numeros, se são numeros acima de 0
  if (!limit || !page) {
    // throw createError(HttpConstants.BadRequest, TaskConstants.InvalidParams);
  }

  next();
}

function validateData(request, response, next) {
  const { text, done } = request.body;

  if (typeof text !== 'string' || typeof done !== 'boolean') {
    throw createError(HttpConstants.BadRequest, TaskConstants.InvalidParams);
  }

  next();
}

export { validateData, validaDataList };
