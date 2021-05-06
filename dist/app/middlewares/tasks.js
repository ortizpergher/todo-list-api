"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _httperrors = require('http-errors'); var _httperrors2 = _interopRequireDefault(_httperrors);
var _task = require('../constants/task'); var _task2 = _interopRequireDefault(_task);
var _http = require('../constants/http'); var _http2 = _interopRequireDefault(_http);

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
    throw _httperrors2.default.call(void 0, _http2.default.BadRequest, _task2.default.InvalidParams);
  }

  next();
}

exports.validateData = validateData; exports.validaDataList = validaDataList;
