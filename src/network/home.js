import { request } from "./request";

export function getHomeMultidata(){
  return request ({
    url:'/home/multidata',
    methods:'get'
  })
}