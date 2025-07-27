const express  = require("express");
const cors = require("cors");
const app = express();
require ("dotenv").config();
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(express.json());

const routes = require("./route");
app.use("/api",routes );

const connectDB  = require("./connectDb");

const port = 5000;

app.listen(port, () => {
     console.log(`Server is listening on http://localhost:${port}`)

});

const startServer  = async () => {
    await connectDB();
    app.listen(port, () => {
     console.log(`Server is listening on http://localhost:${port}`)

});

};
startServer();