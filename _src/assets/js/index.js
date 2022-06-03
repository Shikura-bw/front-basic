import Menu from './components/menu.js';
import Navcurrent from './components/nav_current.js';
import ConversionSp from './components/conversion_sp.js';

const app = {
    // 初期化
    init() {
        this.menu = new Menu();
        this.nav_current = new Navcurrent();
        this.conversion_sp = new ConversionSp();
    },
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', app.init);
} else {
    app.init();
}
