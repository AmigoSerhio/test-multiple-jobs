const {
    config
} = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {drivers: {chrome: '91.0.4472.101'}}]], // https://chromedriver.chromium.org/
    capabilities: [{
        maxInstances: 10,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--start-maximized']
        },
    }, ],
    path: "/wd/hub",
};

exports.config = chromeConfig;