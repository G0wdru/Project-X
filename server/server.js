const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
