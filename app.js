const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 330,
        height: 480,
        autoHideMenuBar: true,
        useContentSize: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('views/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})

app.on('activate', () => {
    reateWindow();
})
