const tabContentEl = document.getElementsByClassName('blocks');
const tabEl = document.getElementsByClassName('header-button');

function hideTabsContent() {
    let i = 0;
    for (i; i < tabContentEl.length; i++) {
        tabContentEl[i].classList.remove('show');
        tabContentEl[i].classList.add('hide');
    }
}

window.addEventListener('load', () => { hideTabsContent(1); });

function showTabsContent(b) {
    if (tabContentEl[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabContentEl[b].classList.remove('hide');
        tabContentEl[b].classList.add('show');
    }
}

const collection = document.querySelector('[data-main_collection]');
collection.addEventListener('click', (event) => {
    const { target: its } = event;
    if (its.className === 'header-button') {
        let i = 0;
        for (i; i < tabEl.length; i++) {
            if (its === tabEl[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
});
