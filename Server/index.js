const express = require('express');
require('./routes/services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;  //Give a dynamic port from the server
app.listen(PORT); 