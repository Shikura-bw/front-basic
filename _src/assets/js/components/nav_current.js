/* ------------------------------------------- -/
   Global Navigation : Current
/- ------------------------------------------- */

export default class Navcurrent {
    constructor() {
        this.specialNavMain = document.getElementById('specialNavMain');
        this.pagePath = location.pathname;
        this.isCurrent(this.pagePath, this.specialNavMain);
    }

    /**
     * クリック時の実行処理を返す
     * @param path ページのパス
     * @param parentNode 各ナビの親ノード
     */
    isCurrent(path, parentNode) {
        if (!parentNode) return;
        const linkNodeList = parentNode.querySelectorAll('.js-nav-link');
        Array.from(linkNodeList).forEach(el => {
            const link = el.getAttribute('href');
            const regex = RegExp(link + '.*', 'g');
            if (link === '/' & '/kickstart/') {
                if (path === link) {
                    el.classList.add('is-current');
                }
            } else if (regex.test(path)) {
                el.classList.add('is-current');
            }
        });
    }
}
