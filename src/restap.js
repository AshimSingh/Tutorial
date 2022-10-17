import React from 'react'
import axios from "axios";

const Restapi=()=>{
    const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'd68de7f6camshe3304b937898240p152053jsnf41f0d144361',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    return(
        <h1>Hello Rest Apo</h1>
    )
}
export default Restapi