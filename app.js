const express = require('express');
const app = express();
const path = require('path');

const PORT= process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(PORT, () => {
    console.log(`Aplicación escuchando en puerto ${PORT}`);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/donaciones',(req,res)=>{
    res.sendFile(__dirname + '/views/donaciones.html')
})

app.get('/nosotros',(req,res)=>{
    res.sendFile(__dirname + '/views/nosotros.html')
})

app.get('/profesionales',(req,res)=>{
    res.sendFile(__dirname + '/views/profesionales.html')
})

app.get('/galeria',(req,res)=>{
    res.sendFile(__dirname + '/views/galeria.html')
})

app.get('/contacto',(req,res)=>{
    res.sendFile(__dirname + '/views/contacto.html')
})

app.get('/enviar',(req,res)=>{
    res.sendFile(__dirname + '/views/enviar.php')
})

