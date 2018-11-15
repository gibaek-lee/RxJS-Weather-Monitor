import axios from 'axios';

/* https://openweathermap.org/ 에 가입하고 API ID 무료버전 기본으로 배부받음 */
const APPID = 'APPID';

export default function getTemperature(zipcode) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},us&units=imperial&appid=${APPID}`)
  .then(function (response) {
    console.log("Success to get results");
    console.log(response);
    return response;
   })
   .catch(function (error) {
    console.log(error);
   });
}
