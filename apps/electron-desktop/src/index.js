"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
var win = null;
var getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
var isEnvSet = 'ELECTRON_IS_DEV' in process.env;
var debugMode = isEnvSet
    ? getFromEnv
    : process.defaultApp ||
        /node_modules[\\/]electron[\\/]/.test(process.execPath);
/**
 * Electron window settings
 */
var mainWindowSettings = {
    frame: true,
    resizable: true,
    focusable: true,
    fullscreenable: true,
    kiosk: false,
    // to hide title bar, uncomment:
    // titleBarStyle: 'hidden',
    webPreferences: {
        devTools: debugMode,
        nodeIntegration: debugMode,
    },
};
/**
 * Hooks for electron main process
 */
function initMainListener() {
    electron_1.ipcMain.on('ELECTRON_BRIDGE_HOST', function (event, msg) {
        console.log('msg received', msg);
        if (msg === 'ping') {
            event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
        }
    });
}
/**
 * Create main window presentation
 */
function createWindow() {
    var sizes = electron_1.screen.getPrimaryDisplay().workAreaSize;
    if (debugMode) {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';
        mainWindowSettings.width = 800;
        mainWindowSettings.height = 600;
    }
    else {
        mainWindowSettings.width = sizes.width;
        mainWindowSettings.height = sizes.height;
        mainWindowSettings.x = 0;
        mainWindowSettings.y = 0;
    }
    win = new electron_1.BrowserWindow(mainWindowSettings);
    var launchPath;
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/../../../node_modules/electron"),
        });
        launchPath = 'http://localhost:4200';
        win.loadURL(launchPath);
    }
    else {
        launchPath = url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true,
        });
        win.loadURL(launchPath);
    }
    console.log('launched electron with:', launchPath);
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
    initMainListener();
    if (debugMode) {
        // Open the DevTools.
        win.webContents.openDevTools();
        // client.create(applicationRef);
    }
}
try {
    electron_1.app.on('ready', createWindow);
    electron_1.app.on('window-all-closed', quit);
    electron_1.ipcMain.on('quit', quit);
    electron_1.ipcMain.on('minimize', function () {
        win.minimize();
    });
    electron_1.ipcMain.on('maximize', function () {
        win.maximize();
    });
    electron_1.ipcMain.on('restore', function () {
        win.restore();
    });
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow();
        }
    });
}
catch (err) { }
function quit() {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
}
//# sourceMappingURL=index.js.map