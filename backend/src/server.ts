import { config } from "dotenv";
import app from "./app";

config();

const PORT = process.env.PORT;
if (!PORT || PORT === "$PORT_NUMBER") throw Error("⛔ Error! No port configuration found in env ⛔");

app.listen(PORT, () => console.log(`Express listening on port ${PORT}`));
