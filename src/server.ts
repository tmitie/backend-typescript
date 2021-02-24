import express, { request } from 'express';

const app = express();

/*
*/
app.get("/", (request, response) => {
    //return response.send("No Users on Database!")
    return response.json({ message: "Nothing on Database!", code: 404 })
});

app.post("/", (request, response) => {
    return response.send("Nothing to save!")
})

app.listen(3333, () => console.log("Server is Running!"));
