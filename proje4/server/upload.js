const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const randomstring = require('randomstring');

aws.config.update({
  secretAccessKey: "rQVfoDiTPhZiJbiBpXtw5BtDVee1uzqQ4BHk3eno",
  accessKeyId: "AKIAIF2OKNML4ZQ25LHQ",
  region: 'us-east-1'
});
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'yeditepe',
    acl: 'public-read',
    metadata: function (req, file, cb) {

      cb(null, {fieldName: `${file.fieldname}`});
    },
    key: function (req, file, cb) {

        const str = randomstring.generate({
            length: 16,
            charset: 'abcdefghijklmnopqrst0123456789'
          });

        const mimeType = file.mimetype;
        const extArr = mimeType.split('/');
        const ext = extArr[1];
      cb(null, `${str}-${Date.now().toString()}.${ext}`);
    }
  })
})

module.exports = upload;