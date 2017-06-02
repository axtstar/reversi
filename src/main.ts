export = 0

import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';

//var tables = require('./base/tables')

// have a main window reference to global variable
var mainWindow: Electron.BrowserWindow = null;

// function if all windows closed
app.on('window-all-closed', function() {
  // exclude for OS X due to generrally OS X is not terminated when window is close.
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // create new Window
  //mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow = new BrowserWindow({width: 800, height: 600,  
    webPreferences: {
      nodeIntegration: false
    }
});

  // open index.html
  mainWindow.loadURL('file://' + __dirname + '/reversi.html');

  //  null when window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});