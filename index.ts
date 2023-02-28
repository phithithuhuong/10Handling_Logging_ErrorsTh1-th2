import express from "express";
import bodyParser from "body-parser";
import {logger} from "./src/logger/winston";

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
//Tại router (/) tại method GET chúng ta sẽ throw 1 Error.
// Khi đó sẽ nhảy xuống catch và ghi log vào console bằng logger.error(err)
app.get('/', (req, res) => {
    try {
        res.end("<h1>Hello winston!</h1>")
        throw new Error("Error test winston");
    } catch (err) {
        logger.error(err)
    }
})
app.listen(PORT, () => {
    console.info ("App running on port: " + PORT)
});
