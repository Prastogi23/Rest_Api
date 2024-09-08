const express = require("express");
const app = express();
const port = 8080 || process.env.port;

const connectDB = require("./DB/connect");

const product_routes = require("./routes/products");

app.get("/",(req,res)=>{
    res.send("Its a live");
})

app.use("/api/products",product_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(port,()=>{
            console.log(`Server is listening at Port:${port}`);
        })
    } catch (error) {
        console.log(error);
    }}

start();