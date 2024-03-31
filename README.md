# memefi_miner

Mining Memefi on web browser

1. Open the Telegram link to access memefi_coin_bot [Telegram Web](https://web.telegram.org/k/#?tgaddr=tg%3A%2F%2Fresolve%3Fdomain%3Dmemefi_coin_bot%26start%3Dr_f64c2b7aa7)
2. Start playing app

![image](https://github.com/khanh8910/memefi_miner/assets/29351796/b5311e84-9a49-4055-b6a0-1c0a64d980f1)

3. Press F12 > Console tab > Choose tg-app.memefi.club/

![image](https://github.com/khanh8910/memefi_miner/assets/29351796/32149114-9bc0-4a54-9ce4-b423e9d05dc2)

4. Paste my script from run.js
```
function changeURL() {
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        function isTargetSite(url) {
            return url.includes('https://tg-app.memefi.club/');
        }
        let currentPlatform = getParameterByName('tgWebAppPlatform');
        if (currentPlatform === 'web' && isTargetSite(window.location.href)) {
            let newURL = window.location.href.replace('tgWebAppPlatform=web', 'tgWebAppPlatform=ios');
            window.location.href = newURL;
            window.location.reload();
        }
    }
changeURL();
```
5. Just clicking to mining (whether manually or using autoclick).
