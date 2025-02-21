import crypto from 'crypto';
import multer from 'multer';

import { extname , resolve} from 'path';

export default {
    upload(folder: string){
        return {
            //caminho onde vai ser salvo as imagens
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),

                //nao ter conflito de nomes
                filename: (req, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString('hex');
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);
                }
            })
        }
    }
}