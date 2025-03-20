import { config } from "dotenv";
import app from "./app";

config();

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Express listening on port ${PORT}`));
