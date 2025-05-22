class EcmResponse {
    constructor({ documentId, fileName, fileSize, documentCode, mimeType, contentStream, mandatory }) {
        this.documentId = documentId;
        this.fileName = fileName;
        this.fileSize = fileSize;
        this.documentCode = documentCode;
        this.mimeType = mimeType;
        this.contentStream = contentStream;
        this.mandatory = mandatory;
    }
}

module.exports = EcmResponse;