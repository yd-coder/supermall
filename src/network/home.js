import { request } from "./request";

export function getHomeMultidata(){
  return request ({
    url:'/home/multidata',
    methods:'get'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    methods:'get',
    params: {
      type,
      page
    }
  })
}