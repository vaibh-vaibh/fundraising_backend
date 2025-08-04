const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
