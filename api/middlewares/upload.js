const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const {title, description, content, categoryId} = req.body;
        if(!title || !description || !content || !categoryId){
            return cb(new Error("This is an error from the image uploader, It seems that you have forgotten one of the required fields."));
        }
        cb(null, 'uploads/');
        
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }

    cb(null, false)
}

const upload = multer({
    // dest: 'uploads/',
    storage,
    limits: {fileSize: 1024 * 1024 * 2},
    fileFilter
});
    

module.exports = upload;