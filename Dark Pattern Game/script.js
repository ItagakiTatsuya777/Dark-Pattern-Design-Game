let profit = 0;

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startScreen = document.getElementById('start-screen');
    const tutorialScreen = document.getElementById('tutorial-screen');
    const gameScreen = document.getElementById('game-screen');
    const designA = document.getElementById('design-a');
    const designB = document.getElementById('design-b');
    const profitAmount = document.getElementById('profit-amount');
    const startGameButton = document.getElementById('start-game');

    startButton.addEventListener('click', () => {
        startScreen.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            startScreen.style.display = 'none';
            tutorialScreen.style.display = 'flex';
            tutorialScreen.style.animation = 'fadeIn 1s forwards';
        }, 1000);
    });

    startGameButton.addEventListener('click', () => {
        tutorialScreen.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            tutorialScreen.style.display = 'none';
            gameScreen.style.display = 'block';
            gameScreen.style.animation = 'fadeIn 1s forwards';
        }, 1000);
    });

    designA.addEventListener('click', () => {
        profit += 100;
        updateProfit();
        showNotification('ダークパターンを選択しました。利益が増加しました！');
        showDarkPatternButton();
    });

    designB.addEventListener('click', () => {
        profit += 20;
        updateProfit();
        showNotification('誠実なデザインを選択しました。利益が少し増加しました。');
        showDarkPatternButton();
    });

    document.getElementById('show-dark-pattern').addEventListener('click', showDarkPatternHighlight);

    document.getElementById('close-explanation').addEventListener('click', () => {
        document.getElementById('dark-pattern-overlay').style.display = 'none';
    });

    function updateProfit() {
        profitAmount.textContent = `¥${profit}`;
        profitAmount.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            profitAmount.style.animation = '';
        }, 500);
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#e94560';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    function showDarkPatternButton() {
        document.getElementById('dark-pattern-button-container').style.display = 'block';
    }

    function showDarkPatternHighlight() {
        const darkPatternArea = document.querySelector('.design-option:first-child .ui-preview');
        darkPatternArea.classList.add('highlight-dark-pattern');
        
        darkPatternArea.addEventListener('click', showDarkPatternExplanation);
    }

    function showDarkPatternExplanation() {
        document.getElementById('dark-pattern-overlay').style.display = 'flex';
    }
});
