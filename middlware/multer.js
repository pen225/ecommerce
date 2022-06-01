const multer = require('multer');


const uploadArticle = multer({storage : multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploadArticle')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
  })

})

module.exports = uploadArticle;