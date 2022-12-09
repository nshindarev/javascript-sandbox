import axios from 'axios';

// axios.get(`https://api.chucknorris.io/jokes/random`)
//     .then(res => {
//         console.log(res.data)
//     }).catch(err => {
//         console.log(err);
//     })

// convert into async-await:
const fetchJoke = async(url) => {
    try{
        const res = await axios.get(url)
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}

fetchJoke("https://api.chucknorris.io/jokes/random");
