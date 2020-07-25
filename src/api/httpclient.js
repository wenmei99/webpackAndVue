import axios from 'axios'

// 错误处理
const errorHandler  = (error)=>{
  if(error.response){
    const status = error.response.status;
    if(status === 401){
      return Promise.reject('用户信息失效，请重新登录')
    }else if(status === 404){
      return Promise.reject('请求地址有误')
    }else{
      return Promise.reject('请求失败，请稍后重试')
    }
  }else{
    return Promise.reject(error);
  }
}

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config);
  config.headers = {
    ... config.headers,
    token:'wnmmmmm'
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


const getRequest = ({method,dataType})=>({
  data={},
  url,
  headers={crmVersion:111}
})=>{
  const options = {
    method,
    headers,
    url,
    [dataType]:data
  }
  
  return axios.request(options).then((response)=>{
    const { status,data } = response
    if(status === 200){
      return data
    }else{
      throw new Error('请求失败，请稍后重试～')
    }
  }).catch(errorHandler)
}


export default {
  requestGroup() {
    return {
      post: getRequest({ method: 'post', dataType: 'data' }),
      get: getRequest({ method: 'get', dataType: 'params' }),
    };
  },
}