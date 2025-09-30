const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({

    origin: "http://localhost:3000",
    credentials: true

}))

app.get('/adobo', async (req, res) => {
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Adobo");
        const data = await response.json();
        res.json(data);
    }
    catch(error){
        console.error(error)
        res.status(500).json({error: "Adobo not found"})
    }
})

app.listen(3001, () => {
    console.log("Running in 3001");
});