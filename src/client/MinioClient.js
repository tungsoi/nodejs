require('dotenv').config();
const Minio = require('minio');

class MinioClient {
    constructor() {
        const {
            MINIO_ENDPOINT,
            MINIO_PORT,
            MINIO_USESSL,
            MINIO_ACCESSKEY,
            MINIO_SECRETKEY
        } = process.env;

        this.client = new Minio.Client({
            endPoint: MINIO_ENDPOINT,
            port: parseInt(MINIO_PORT, 10),
            useSSL: MINIO_USESSL === 'true',
            accessKey: MINIO_ACCESSKEY,
            secretKey: MINIO_SECRETKEY
        });

        this.client.listBuckets((err, buckets) => {
            if (err) {
                console.error('[Minio] Connection failed');
            } else {
                console.log('[Minio] Connected successfully. Buckets:', buckets.map(b => b.name).join(', '));
            }
        });
    }

    async upload(bucket, objectName, filePath, metaData = {}) {
        return this.client.fPutObject(bucket, objectName, filePath, metaData);
    }

    async download(bucket, objectName, downloadPath) {
        return this.client.fGetObject(bucket, objectName, downloadPath);
    }

    async listObjects(bucket, prefix = '') {
        const stream = this.client.listObjectsV2(bucket, prefix, true);
        const objects = [];
        return new Promise((resolve, reject) => {
            stream.on('data', obj => objects.push(obj));
            stream.on('end', () => resolve(objects));
            stream.on('error', err => reject(err));
        });
    }

    async removeObject(bucket, objectName) {
        return this.client.removeObject(bucket, objectName);
    }
}

module.exports = MinioClient;