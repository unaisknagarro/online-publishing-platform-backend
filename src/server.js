require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');


connectDB();


// app.listen(process.env.PORT, () => {
// console.log(`Server running on port ${process.env.PORT}`);
// });

app.listen(5000, () => {
console.log(`Server running on port ${5000}`);
});