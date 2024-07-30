import { connect } from "mongoose";
import app from "./app.js";

const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
async function connection() {
  try {
    await connect(DB);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log(error.message);
  }
}
connection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on port " + process.env.PORT);
});
