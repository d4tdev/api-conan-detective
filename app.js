const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => {
   console.log(`Server running on port ${process.env.PORT || 3000}`);
});
