import axios from 'axios'
export function getCountry(){
  return axios({
    url:'/common/countryData',
    method:'get',
  })
}