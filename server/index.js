const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.AZURE_POSTGRESQL_PORT || 3000;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`🙌 Server listening at ${port}`); 
  });
});
