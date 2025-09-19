const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

let requestCount = 0;

app.use(cors());

app.get("/", (req, res) => {
    requestCount++;

    const now = new Date().toISOString();
    console.log(`Request #${requestCount} at ${now}`);

    res.json({
        message: "Request received",
        requestCount: requestCount,
        time: now
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
