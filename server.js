const express = require("express");
const cors = require("cors");
const app = express();

require("./app/routes/tutorials.routes.js")(app);

var corsOptions = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/" , (req, res) => {
    res.json({message: "Welcom to my application"})
})

const PORT = process.env.PORT||8080

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}.`);
})




