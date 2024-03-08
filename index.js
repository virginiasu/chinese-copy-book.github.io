const { app, BrowserWindow, screen } = require("electron");

const createWindow = () => {
  const windowHeight = screen.getPrimaryDisplay().workAreaSize.height;
  const windowWidth = screen.getPrimaryDisplay().workAreaSize.width;
  console.log(windowHeight, windowWidth);
  const win = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      nodeIntegration: true,
      //   preload: __dirname + "/preload.js",
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
