import Top from './components/top.js';
import About from './components/about.js';

const app = {
    // 初期化
    init() {
        this.Top = new Top();
        this.About = new About();
    },
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', app.init);
} else {
    app.init();
}
