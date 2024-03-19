import AWS from 'aws-sdk';

export default function UploadImage(dir, file) {
  const REGION = process.env.REACT_APP_AWS_S3_REGION;
  const BUCKET = process.env.REACT_APP_AWS_S3_BUCKET;
  const ACCESS_KEY_ID = process.env.REACT_APP_AWS_S3_ACCESS_KEY_ID;
  const SECRET_KEY_ID = process.env.REACT_APP_AWS_S3_SECRET_KEY_ID;

  AWS.config.update({
    region: REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_KEY_ID,
  });
  if (file.size >= 5 * 1024 * 1024) {
    alert('5mb 이하의 파일만 업로드 가능합니다.');
  } else {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: BUCKET,
        Key: `${dir}/${Date.now()}-${file.name}`,
        Body: file,
        ContentType: file.type,
      },
    });

    return upload.promise()
      .then((result) => result.Location)
      .catch((err) => console.log(err));
  }
};
