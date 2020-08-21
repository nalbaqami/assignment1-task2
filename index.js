const express = require('express');
const app = express();

// define static folder
app.use(express.static('public'));


const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on PORT ${PORT}`));