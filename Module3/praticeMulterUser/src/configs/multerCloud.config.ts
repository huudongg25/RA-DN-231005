import { CloudinaryStorage } from "multer-storage-cloudinary"
import { v2 as cloudinary } from 'cloudinary'
import multer from "multer";

cloudinary.config({
    cloud_name: 'djjerl84e',
    api_key: '982943187224164',
    api_secret: 'Z79k-udr8-9oM_uHcYca7qJS9-E'
})

const store = new CloudinaryStorage({
    cloudinary,
    params: async (req, file: any) => {
        return {
            folder: 'avatar',
            format: 'png',
        };
    }
})

const fileFilter = (req: any, file: any, cb: any) => {
    // Kiểm tra kiểu file
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        const maxSize = 5 * 1024 * 1024; // 5MB
        console.log(file);
        if (file.size > maxSize) {
            cb(null, false);
        } else {
            cb(null, true);
        }
    } else {
        cb('Upload failed', false);
    }
};

const uploadCloud = multer({
    storage: store, fileFilter
})

export default uploadCloud