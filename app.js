const express= require('express');
const helmet= require('helmet');
const cors= require('cors');
const morgan = require('morgan');  
const app = express();

app.use(morgan(
"combined"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/',require('./routes/router'));

app.listen(6000,()=>{
    console.log("el servidor esta  andado en http://localhost:6000");
})