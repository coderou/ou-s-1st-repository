import axios from '@/api/axios'

export const getBannerData = () => {
  return axios.request({
    url: 'banner',
    method: 'get',
  })
}
/* export const getUserData = () => {
  return axios.request({
    url: 'user',
    // url: 'username',
    method: 'get',
  })
} */

export const getPosiData = () => {
  return axios.request({
    url: 'posi',
    method: 'get',
  })
}
export const getIndexEntryData = () => {
  return axios.request({
    url: 'index_entry',
    method: 'get',
  })
}
export const getRestaurantsData = () => {
  return axios.request({
    url: 'restaurants',
    method: 'get',
  })
}
