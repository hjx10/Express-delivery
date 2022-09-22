import request from '@/utils/request'

export function getAddress() {
  return request({
    url: '/address',
    method: 'GET'
  })
}

export function addAddress(data) {
  return request({
    url: '/address',
    method: 'POST',
    data
  })
}

export function deleteAddress(id) {
  return request({
    url: `/address/${id}`,
    method: 'DELETE'
  })
}
