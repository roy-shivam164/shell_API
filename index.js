const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let details = [
  {
    uid: "21MCI1150",
    name: "SHIVAM KUMAR RAI",
    age: "23",
    course: "MCA-AIML"
  },
  {
    uid: "21MCI1010",
    name: "SRIKANT SINGH",
    age: "22",
    course: "MCA-AIML"
  },
  {
    uid: "21MCI1154",
    name: "PRASHANT KUMAR",
    age: "21",
    course: "MCA-AIML"
  }
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

app.delete("/details/:uid", (req, res) => {
  // Reading isbn from the URL
  const uid = req.params.uid;
  console.log(uid);
  // Remove item from the books array
  details = details.filter((i) => {
    if (i.uid !== uid) {
      return true;
    }
    return false;
  });

  res.send("Record is deleted");
});

app.get("/details/:uid", (req, res) => {
  // Reading isbn from the URL
  const uid = req.params.uid;

  // Searching books for the isbn
  for (let data of details) {
    if (data.uid === uid) {
      res.json(data);
      return;
    }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send("Record not found");
});

app.post("/details/:uid", (req, res) => {
  // Reading uid from the URL
  const uid = req.params.uid;
  const newData = req.body;

  // Remove item from the details array
  for (let i = 0; i < details.length; i++) {
    let item = details[i];
    if (item.uid === uid) {
      item[i] = newData;
    }
  }

  res.send("Record is Updated");
});

app.listen(port, () => console.log(`Listening at Port :${port}`));
