import { Express } from "express";

const app = Express();

app.get("/all-customers", (req, res) => {
  res.json({ body: "Hello World" + Date.now() });
});

app.listen(4000, () => {
  console.log("server running");
});
