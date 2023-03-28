const axios = require("axios")
const {KEY,URL} = process.env;
// const URL  = "http://localhost:3001/rickandmorty";

const getCharDetails = (req,res)=> { 
    const {id} = req.params;

    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then((response)=>{
        const {id,name,species,image,gender}= response.data
        res.status(200).json({id,name,species,gender,image})
    })
    .catch((error)=>{
        res.status(500).json({})
    })
};



module.exports = getCharDetails