import httpClient from './httpclient'


const wmClient = httpClient.requestGroup()

console.log(wmClient);

export default {
  getJson :(data) =>wmClient.get({url:'/static/msg.json'},data)
}