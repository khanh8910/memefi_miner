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
