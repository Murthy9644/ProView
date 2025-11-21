import path from 'path';
import { fileURLToPath } from 'url';

// Imitate things in ESM
// 1.
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// File paths
// 1.
export const database_dir_path = path.join(__dirname, "..", "data_base");
export const database_user_info_path = path.join(database_dir_path, "user_info.json");