import type {ValidationChain} from 'express-validator'
import {validationResult} from 'express-validator'
import createError from 'http-errors'
import type {HTTP_TYPES, UTILS_TYPES} from '@rabbit-run/common'

function ok(data: UTILS_TYPES.Dictionary = {}): HTTP_TYPES.HttpMessage {
  return {
    code: 20000,
    msg: 'Ok',
    data
  }
}

function fail(data: UTILS_TYPES.Dictionary = {}): HTTP_TYPES.HttpMessage {
  return {
    code: 50001,
    msg: 'Fail',
    data
  }
}

function notFound(data: UTILS_TYPES.Dictionary = {}): HTTP_TYPES.HttpMessage {
  return {
    code: 50404,
    msg: 'Not Found',
    data
  }
}

function illegalToken(data: UTILS_TYPES.Dictionary = {}): HTTP_TYPES.HttpMessage {
  return {
    code: 50008,
    msg: 'Illegal token',
    data
  }
}

function otherLogin(data: UTILS_TYPES.Dictionary = {}): HTTP_TYPES.HttpMessage {
  return {
    code: 50012,
    msg: 'Other clients logged in',
    data
  }
}

function expired(data: UTILS_TYPES.Dictionary = {}): HTTP_TYPES.HttpMessage {
  return {
    code: 50014,
    msg: 'Token expired',
    data
  }
}

function validate(validations: ValidationChain[]) {
  return async (req, res, next) => {
    for (let validation of validations) {
      let result = await validation.run(req)
      if (!result.isEmpty()) {
        break
      }
    }

    let errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    res.json(fail({errors: errors.array()}))
  }
}

function throwHttpError(msg: string) {
  throw createError(msg)
}

export default {
  ok,
  fail,
  notFound,
  illegalToken,
  otherLogin,
  expired,

  validate,
  throwHttpError
}
