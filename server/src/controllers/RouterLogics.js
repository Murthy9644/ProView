import { fileIO } from "../file_io/FileIO.js";
import { database_user_info_path } from "../GlobalThings.js";

export default function routerLogics(route, req_body = null){

    switch (route){
        case "register":

            if (! data) return false;
            
            let data = fileIO("read", database_user_info_path);
            data[req_body.username] = req_body;
            fileIO("write", database_user_info_path, data);

            return true;
    }
}