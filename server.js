const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors())

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

app.get("/flats", (req, res) => {
  readFile((data) => {
    res.send(data.flats);
  }, true);
});

app.post("/flats", (req, res) => {
  readFile((data) => {
    data.flats[req.body.id] = req.body;
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.delete("/flats/:id", (req, res) => {
  readFile((data) => {
    const id = req.params["id"];
    delete data.flats[id];
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.get("/rating", (req, res) => {
  readFile((data) => {
    res.send(data.rating);
  }, true);
});

app.post("/rating", (req, res) => {
  readFile((data) => {
    data.rating[req.body.id] = req.body;
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.delete("/rating/:id", (req, res) => {
  readFile((data) => {
    const id = req.params["id"];
    delete data.rating[id];
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.get("/seen", (req, res) => {
  readFile((data) => {
    res.send(data.seen);
  }, true);
});

app.post("/seen", (req, res) => {
  readFile((data) => {
    data.seen[req.body.id] = true;
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.delete("/seen/:id", (req, res) => {
  readFile((data) => {
    const id = req.params["id"];
    delete data.seen[id];
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send();
    });
  }, true);
});

app.use(express.static(process.cwd()+"/dist/aqar/"))

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/dist/aqar/index.html")
});

const server = app.listen(4000, () => {
  console.log("listening on port %s...", server.address().port);
});
