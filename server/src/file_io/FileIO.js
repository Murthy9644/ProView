import fs from 'fs';

export function fileIO(mode, file_path, block = null){
    let data = null;

    switch (mode){

        case "read":
            fs.readFile(file_path, "utf-8", (err, json_str) => {
                data = JSON.parse(json_str);
            });

        break;

        case "write":
            fs.writeFile(file_path, block, "utf-8", err => {
                if (err) return false;
            });

        break;
    }

    return data;
}