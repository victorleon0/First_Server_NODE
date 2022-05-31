const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hola Mundo')
});

router.get("/paises", (req, res) => {
    const paises = ["España", "Francia", "Italia", "Alemania", "Reino unido"]
    res.send(paises)
})


module.exports = router