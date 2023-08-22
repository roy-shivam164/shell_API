const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let details = {
  userDetails: {
    name: "PRATIK MALVIYA",
    currentAmountDue: "$0",
    AutopayStatus: "Active",
    usage: "4485 kWh",
    Nextautopay: "08/14/2023",
    "Utility Account/ESIID": "10443720009705482",
    "Last Service Period": "07/07/23  to  08/07/23",
    "Contract Expiration Date": "07/07/2027",
    "Plan Name": "Shell Employee Only",
  },
  BillingDetails: {
    BillingAddress: " 4522 CAPE CHARLES DR PLANO, TX 75024-7341",
    CommunicationEmail: "pratik.malviya@mp2energy.com",
    CommunicationLanguage: "Spanish",
    "Statement Delivery": "eMail",
  },
  MarketingContactPreference: {
    "How may we contact you?": "Email and Phone",
    "Who may contact you?":
      "Shell Energy Solutions and Trusted Partners of Shell Energy Solutions",
  },

  Usage: [
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 4485,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-08-07",
      PeriodBeginDate: "2023-07-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 4002,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-07-07",
      PeriodBeginDate: "2023-06-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 2920,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-06-07",
      PeriodBeginDate: "2023-05-08",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 2008,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-05-08",
      PeriodBeginDate: "2023-04-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1652,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-04-06",
      PeriodBeginDate: "2023-03-08",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1195,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-03-08",
      PeriodBeginDate: "2023-02-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1715,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-02-06",
      PeriodBeginDate: "2023-01-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1525,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2023-01-06",
      PeriodBeginDate: "2022-12-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1687,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-12-06",
      PeriodBeginDate: "2022-11-04",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1787,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-11-04",
      PeriodBeginDate: "2022-10-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 2745,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-10-06",
      PeriodBeginDate: "2022-09-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 3876,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-09-07",
      PeriodBeginDate: "2022-08-08",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 6017,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-08-08",
      PeriodBeginDate: "2022-07-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 4999,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-07-07",
      PeriodBeginDate: "2022-06-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 2803,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-06-07",
      PeriodBeginDate: "2022-05-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1410,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-05-06",
      PeriodBeginDate: "2022-04-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1013,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-04-06",
      PeriodBeginDate: "2022-03-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 949,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-03-07",
      PeriodBeginDate: "2022-02-04",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 842,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-02-04",
      PeriodBeginDate: "2022-01-06",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1282,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2022-01-06",
      PeriodBeginDate: "2021-12-07",
    },
    {
      AccountName: " PRATIK MALVIYA",
      AccountId: "0014L00000Fu0r7QAB",

      Usage: 1509,
      UnitofMeasurement: "kWh",

      PeriodEndDate: "2021-12-07",
      PeriodBeginDate: "2021-11-05",
    },
  ],
  Payments: [
    {
      TransactionSubType: "CC",
      Date: "2023-08-14",
      Amount: -518.48,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2023-07-14",
      Amount: -378.84,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2023-06-15",
      Amount: -262.32,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2023-05-15",
      Amount: -211.32,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2023-03-27",
      Amount: -153.83,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2023-02-27",
      Amount: -233.73,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2023-01-26",
      Amount: -208.21,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2022-12-28",
      Amount: -229.7,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2022-11-28",
      Amount: -699.02,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-10-04",
      Amount: -1301.88,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-09-28",
      Amount: -1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CC",
      Date: "2022-07-27",
      Amount: -358.78,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-06-05",
      Amount: -0.65,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-06-05",
      Amount: -0.51,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-25",
      Amount: -0.03,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-22",
      Amount: -0.01,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-18",
      Amount: -1.9,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-18",
      Amount: -1.8,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-18",
      Amount: -1.1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-18",
      Amount: -9,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-18",
      Amount: -1.2,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -1.3,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -1.4,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -2.1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -1.11,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -1.12,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -1.12,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-17",
      Amount: -1.21,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-16",
      Amount: -0.01,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-16",
      Amount: -0.01,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-16",
      Amount: -10,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-16",
      Amount: -11,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-16",
      Amount: -11,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-16",
      Amount: -1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-16",
      Amount: -272.07,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-16",
      Amount: -100,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-16",
      Amount: -100,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-16",
      Amount: -240.05,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -198.05,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -198.05,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -198.05,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -198.05,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -198.05,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -272.07,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2022-05-16",
      Amount: -272.07,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-14",
      Amount: -1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-14",
      Amount: -10,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-14",
      Amount: -100,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-14",
      Amount: -2,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-14",
      Amount: -20,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-14",
      Amount: -3,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-13",
      Amount: -10,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-13",
      Amount: -10,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-05-12",
      Amount: -0.01,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-12",
      Amount: -10,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-12",
      Amount: -10,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-12",
      Amount: -1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "ACH",
      Date: "2022-05-12",
      Amount: -1,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "WEB",
      Date: "2022-02-10",
      Amount: -255.89,
      AccountNumber: "59390",
    },
    {
      TransactionSubType: "CP",
      Date: "2021-12-18",
      Amount: -179.66,
      AccountNumber: "59390",
    },
  ],
};

app.get("/api/data", (req, res) => {
  res.json(details);
});

app.post("/api/data", (req, res) => {
  const det = req.body;
  console.log("name added");
  details.push(det);
  res.send("Details Added");
});

app.delete("/api/data/:zip", (req, res) => {
  // Reading isbn from the URL
  const zip = req.params.zip;
  console.log(zip);
  // Remove item from the books array
  details = details.filter((i) => {
    if (i.zip !== zip) {
      return true;
    }
    return false;
  });

  res.send("Record is deleted");
});

app.get("/api/data/:zip", (req, res) => {
  // Reading isbn from the URL
  const zip = req.params.zip;

  // Searching books for the isbn
  for (let data of details) {
    if (data.zip === zip) {
      res.json(data);
      return;
    }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send("Record not found");
});

app.post("/api/data/:zip", (req, res) => {
  // Reading zip from the URL
  const zip = req.params.zip;
  const newData = req.body;

  // Remove item from the details array
  for (let i = 0; i < details.length; i++) {
    let item = details[i];
    if (item.zip === zip) {
      item[i] = newData;
    }
  }

  res.send("Record is Updated");
});

app.listen(port, () => console.log(`Listening at Port :${port}`));
