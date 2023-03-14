import * as stream from 'stream';
import * as zlib from 'zlib';
import { Buffer } from 'buffer';

// const stream = require('stream');
const streamToBuffer = (readableStream: stream.Readable): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const chunks: any = [];
    readableStream.on('data', (chunk: any) => chunks.push(chunk));
    readableStream.on('end', () => resolve(Buffer.concat(chunks)));
    readableStream.on('error', reject);
  });
};

self.addEventListener('message', async (event: any) => {
  const imageData = event.data;
  const gunzip = zlib.createGunzip();
  const bufferStream = new stream.PassThrough();
  bufferStream.end(imageData);
  const decompressedData = await streamToBuffer(bufferStream.pipe(gunzip));
  self.postMessage(decompressedData);
});
