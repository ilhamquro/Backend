import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import PackageRoute from "./routes/PackageRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(PackageRoute);

app.listen(5000, () => console.log('Server Up And Running'));