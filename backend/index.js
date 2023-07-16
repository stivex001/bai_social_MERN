import  express  from "express";

const app = express();

app.listen(8080, () => {
    try {
        console.log("connected to port 8080");
    } catch (error) {
        if (error) throw error;
    }
    
})