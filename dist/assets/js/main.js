import FadeIn from './parts/common.js';

const app = {
  // 初期化
  init() {
    this.fadein = new FadeIn();
  },
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', app.init);
} else {
  app.init();
}
