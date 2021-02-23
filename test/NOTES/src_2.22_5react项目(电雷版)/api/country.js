import axios from 'axios'

export function getCountryData() {
  return axios({
    url: '/common/countryData',
    method: 'get',
  })
}
