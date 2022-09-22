import type {AxiosPromise} from 'axios'
import {HTTP_TYPES} from '@rabbit-run/common'

import request from '@/utils/request'

export function getEasemobToken(): AxiosPromise<HTTP_TYPES.HttpTokenMessage> {
  return request({
    url: '/easemob/token',
    method: 'GET'
  })
}
