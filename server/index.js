const server = require('./server');
require('sequelize');

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
