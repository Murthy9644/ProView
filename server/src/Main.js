// Package imports
import express from 'express';
import cors from 'cors';

// Function imports
import { getIP, createDirs } from './utils/Utils.js';
import router from './controllers/user.routes.js';
import { writeInitialData } from './file_io/FileIO.js';
import { database_user_info_path } from './GlobalThings.js';

// Check for required folder existences
createDirs();

const app = express();
const PORT = 9999;

app.use(express.json());
app.use("/base", router);
app.use(cors());

app.listen(PORT, "0.0.0.0", () => {
    console.log("Listening on port: " + PORT);
    console.log(`Server accessible locally at - http://localhost:${PORT}`);
    console.log(`Server accessible on LAN at - http://${getIP()}:${PORT}`);
});