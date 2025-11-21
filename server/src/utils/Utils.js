import os from 'os';
import fs from 'fs';

import { database_user_info_path, database_dir_path } from '../GlobalThings.js';

export function getIP(){
    const nets = os.networkInterfaces();
    let localIP = "127.0.0.1";

    for (const net of Object.keys(nets)){

        for (const each of nets[net])
        if (each.family === "IPv4" && ! each.internal) return each.address;
    }

    return localIP;
}

export function createDirs(){

    if (fs.existsSync(database_dir_path))
        fs.writeFileSync(database_dir_path, "{}");
}