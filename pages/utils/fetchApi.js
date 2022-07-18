import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'c4531e8ea8msh75c46693635071cp132a11jsn09e621c8bb9e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}