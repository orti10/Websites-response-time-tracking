const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const getDomainResponseTime = require('./domainResponseTime');
const axios = require('axios');

// middleware
app.use(cors());
app.use(express.json());

// create a domain
app.post("/domains", async (req, res) => {
  try {
    const { description } = req.body;
    const responseTime = await getDomainResponseTime(`http://${description}`);
    const newDomain = await pool.query(
      "INSERT INTO domain (description, response_time) VALUES ($1, $2) RETURNING *",
      [description, responseTime]
    );

    res.json(newDomain.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// endpoint to get response time for a list of domains
app.post("/domains/responseTime", async (req, res) => {
  try {
    const { domains } = req.body;
    const data = domains.flat(1)
    const promises = data.map(async domain => {
      const response = await axios.get('http://' + domain.description);
      const end = Date.now();
      const start = response.headers.get("date");
      const responseTime = end - new Date(start).getTime();
      return { ...domain, responseTime };
    });

    const domainsWithResponseTime = await Promise.all(promises);

    res.json(domainsWithResponseTime);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get all domains
app.get("/domains", async (req, res) => {
  try {
    const allDomains = await pool.query("SELECT domain_id, description, response_time FROM domain");
    res.json(allDomains.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// get a domain
app.get("/domains/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const domain = await pool.query("SELECT * FROM domain WHERE domain_id = $1", [
      id
    ]);

    if (domain.rows.length === 0) {
      return res.status(404).json({ error: "Domain not found" });
    }

    res.json(domain.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// update a domain
app.put("/domains/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const responseTime = await getDomainResponseTime(`http://${description}`);
    const updateDomain = await pool.query(
      "UPDATE domain SET description = $1, response_time = $2 WHERE domain_id = $3",
      [description, responseTime, id]
    );

    if (updateDomain.rowCount === 0) {
      return res.status(404).json({ error: "Domain not found" });
    }

    res.json("Domain was updated!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// recalculate response time for a domain
app.put("/domains/:id/responseTime", async (req, res) => {
  try {
    const { id } = req.params;
    const domain = await pool.query("SELECT * FROM domain WHERE domain_id = $1", [
      id
    ]);

    if (domain.rows.length === 0) {
      return res.status(404).json({ error: "Domain not found" });
    }

    const { description } = domain.rows[0];
    const responseTime = await getDomainResponseTime(`http://${description}`);

    const updateDomain = await pool.query(
      "UPDATE domain SET response_time = $1 WHERE domain_id = $2",
      [responseTime, id]
    );

    if (updateDomain.rowCount === 0) {
      return res.status(404).json({ error: "Domain not found" });
    }

    res.json({ message: "Domain response time updated successfully!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});


// delete a domain
app.delete("/domains/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDomain = await pool.query(
      "DELETE FROM domain WHERE domain_id = $1",
      [id]
    );

    if (deleteDomain.rowCount === 0) {
      return res.status(404).json({ error: "Domain not found" });
    }

    res.json("Domain was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
