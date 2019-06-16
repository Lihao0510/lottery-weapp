import HttpRequest from '../network/HttpRequest';

function helloWorld() {
  return HttpRequest({
    url: 'hello/world'
  })
}

function login(params) {
}

function registry(params) {

}

function getUserInfo() {

}

function updateUserInfo(params) {

}

export default {
  helloWorld,
  login,
  registry,
  getUserInfo,
  updateUserInfo
}
