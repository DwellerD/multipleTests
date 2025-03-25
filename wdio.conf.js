export const config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://www.saucedemo.com',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
