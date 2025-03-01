import fs from 'node:fs';
import path from 'node:path';

import configs from '../config.js';

const desensitize = (link) => {
  const uri = new URL(link);

  if (process.env.NODE_ENV === 'development') return link;

  return link.replace(uri.host, '***');
};

const mkdirSync = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const normalizeUrl = (url) => {
  // 替换除协议外的连续多斜杠为单斜杠
  return url.replace(/(?<!:)\/+/g, '/');
};

const request = async (url, { method = 'GET', headers = {}, download = false } = {}) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        ...headers,
      },
    });
    const { status, ok } = response;

    const isRaw = configs.format.raw.some((ext) => url.endsWith(ext));
    let body;

    if (isRaw || download) {
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();

      body = Buffer.from(arrayBuffer);
    } else {
      body = await response.text();
    }

    return { ok, status, body };
  } catch (e) {
    console.error(`[ERROR] 请求网络资源失败: ${desensitize(url)} - ${e.message}`);
    return { ok: false, status: 0, body: '' };
  }
};

const downloadFile = async (url, filePath) => {
  try {
    const body = await request(url);

    if (body) {
      mkdirSync(path.dirname(filePath));
      fs.writeFileSync(filePath, body, { encoding: 'utf-8' });

      return true;
    }

    return false;
  } catch (e) {
    console.error(`[ERROR] 下载文件失败: ${desensitize(url)} - ${e.message}`);

    return false;
  }
};

export default {
  desensitize,
  normalizeUrl,
  mkdirSync,
  request,
  downloadFile,
};
