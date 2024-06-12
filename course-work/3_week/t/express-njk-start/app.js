import express from 'express'
import lodash from "lodash";
import morgan from "morgan";
import nunjucks from "nunjucks";
import path from "path";
import url from "url";

// The project root directory
const rootDir = url.fileURLToPath(new URL(".", import.meta.url));

const app = express()

// Configure the Express app
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

nunjucks.configure("views", {
    autoescape: true,
    express: app,
}); 


const sayHello = (req, res) => {
    res.send("hello, world");
}
`      endpoint,  handler, a callback function with two parameters (request, response)
          v          v     ` 
app.get(`/hello`, sayHello)
//get is a response

//request is an object made by the user: a slip with the book they want
//response is the object we respond with: the book we are giving back
    // short them to req, res

app.listen(`8500`, () => {
    console.log(`My very first Server is running at http://localhost:8500`)
})
