const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const readFile = (
  callback,
  returnJson = false,
  filePath = "db.json",
  encoding = "utf8"
) => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
};

const writeFile = (
  fileData,
  callback,
  filePath = "db.json",
  encoding = "utf8"
) => {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
};

app.get("/", (req, res) => {
  readFile((data) => {
    res.send(data);
  }, true);
});

app.post("/", (req, res) => {
  readFile((data) => {
    const createdAt = Date.now().toString();
    data.push({ ...req.body, createdAt });
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.put("/:id", (req, res) => {
  readFile((data) => {
    // add the new user
    const id = req.params["id"];
    const elementIndex = data.findIndex((e) => e.id == id);
    if (elementIndex > -1) data[elementIndex] = req.body;
    else {
      res.status(404).send();
    }

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.delete("/:id", (req, res) => {
  readFile((data) => {
    const id = req.params["id"];
    const elementIndex = data.findIndex((e) => e.id == id);
    if (elementIndex > -1) data.splice(elementIndex, 1);
    else {
      res.status(404).send();
    }

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

const server = app.listen(3000, () => {
  console.log("listening on port %s...", server.address().port);
});
