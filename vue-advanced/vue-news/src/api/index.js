import axios from 'axios';

// 1. HTTP Request & Response 관련 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들 정리
function fetchList(pageName) {
  try {
    return axios.get(`${config.baseUrl}${pageName}/1.json`); //Promise 객체 반환
  } catch (error) {
    console.log(error);    
  }
}
function fetchUser(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchList,
  fetchUser,
  fetchItem,
}