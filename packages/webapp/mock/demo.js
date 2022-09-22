module.exports = [
  {
    url: '/api/login',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        msg: 'ok',
        data: {
          token: 'hello token'
        }
      }
    }
  },
  {
    url: '/api/err',
    type: 'post',
    response: () => {
      return {
        code: 50008,
        msg: 'error',
        data: {
          msg: 'hello token'
        }
      }
    }
  }
]
