const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let details = [
  {
    UID: "21MCI1150",
    NAME: "SHIVAM KUMAR RAI",
    AGE: "23",
    COURSE: "MCA-AIML",
  },
  {
    UID: "21MCI1010",
    NAME: "SRIKANT SINGH",
    AGE: "22",
    COURSE: "MCA-AIML",
  },
  {
    UID: "21MCI1154",
    NAME: "PRASHANT KUMAR",
    AGE: "21",
    COURSE: "MCA-AIML",
  },
];

app.get("/details", (req, res) => {
  res.json(details);
});

app.post("/details", (req, res) => {
  const det = req.body;
  console.log("name added");
  details.push(det);
  res.send("Details Added");
});

app.listen(port, () => console.log(`Listening at Port :${port}`));
