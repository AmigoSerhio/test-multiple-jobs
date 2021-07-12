const {
    config
} = require("./wdio.conf");

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {drivers: {firefox: '0.29.1'}}]], // https://github.com/mozilla/geckodriver/releases
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: ["--width=1900",
                "--height=1000"]
        },
    }],
    "windowSize": "maximize",
    path: "/wd/hub",
};

exports.config = firefoxConfig;