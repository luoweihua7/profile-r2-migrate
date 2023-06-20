import fs from 'node:fs';
import dotenv from 'dotenv';

dotenv.config();

// 从文件中读取并解析配置地址
const readFileSync = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const urls = content.split('\n').filter((_) => _.replace(/\s+/g, ''));

  return urls;
};

const { UPLOAD_DIR = '', ORIGIN = '' } = process.env;
const clashUrls = readFileSync('./configs/CLASH');
const qxUrls = readFileSync('./configs/QUANTUMULT');

export default {
  clash: { urls: clashUrls },
  quantumult: {
    urls: qxUrls,
    // 通过域名模糊匹配链接地址，包含的则进行资源迁移
    match: /github\.com|github\.githubassets\.com|raw\.githubusercontent\.com|myqcloud\.com/,
  },
  dir: UPLOAD_DIR,
  origin: ORIGIN,
};
