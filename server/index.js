const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(() => {
    console.log("🙌 Server listening"); 
  });
});
