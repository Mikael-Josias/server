import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/form', (req, res) => {
    res.sendStatus(201);
});

app.listen(5000, () => {
    console.log("Server iniciado na porta 5000");
});