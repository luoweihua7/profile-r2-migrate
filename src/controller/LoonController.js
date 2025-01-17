import LoonProfile from '../services/LoonProfile.js';

export default class LoonController {
  urls = [];
  dir = '';
  urlPrefix = '';

  constructor(options = {}) {
    const { urls = [], dir = '', urlPrefix = '', match = /.*/, extensions = [] } = options;

    this.urls = urls;
    this.dir = dir;
    this.urlPrefix = urlPrefix;
    this.match = match;
    this.extensions = extensions;
  }

  async start() {
    const { urls, dir, urlPrefix, match, extensions } = this;

    console.log(`[INFO] 开始处理 Loon 配置...`);

    for (const url of urls) {
      const profile = new LoonProfile({ url, dir, urlPrefix, match, extensions });

      await profile.run();
    }

    console.log(`[INFO] Loon 配置处理完成，详情请查看处理日志`);
  }
}
