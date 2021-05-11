import axios from "axios";

axios.defaults.timeout = 100000;
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.baseURL = 'http://localhost:3000/'
// axios.defaults.headers["Access-Control-Allow-Headers"]='Origin, X-Requested-With, content-Type, Accept, Authorization'
axios.defaults.headers["Access-Control-Allow-Methods"] =
  "GET, POST, PUT,DELETE,OPTIONS,PATCH";
/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    let token = window.localStorage.getItem("token");
    config.headers = {
      ...config.headers,
      Authorization: token,
    };
    return config;
  },
  (error) => {
    console.log("请求超时");
    return Promise.reject(error);
  }
);

/** 添加响应拦截器  **/
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      console.log("响应超时");
      return Promise.reject(response.data.message);
    }
  },
  (error) => {
    console.log("请求超时");

    return Promise.reject(error);
  }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */


export function get(url: string, params = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({ method: "get", url, params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/* 统一封装post请求  */
export const post = (url: string, data = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url,
      data,
      ...config,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
