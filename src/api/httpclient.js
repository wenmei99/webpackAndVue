import axios from 'axios'

// 错误处理
const errorHandle  = (error)=>{
  console.log(error)
}

const getRequest = ({method,dataType})=>({
  data={},
  url,
  headers={}
})=>{
  const options = {
    method,
    headers,
    url,
    [dataType]:data
  }
  console.log(options);
  
  return axios.request(options).then((response)=>{
    console.log(response);
  })
}


export default {
  requestGroup() {
    return {
      post: getRequest({ method: 'post', dataType: 'data' }),
      get: getRequest({ method: 'get', dataType: 'params' }),
    };
  },
}