import type { IpcMainInvokeEvent } from 'electron';
import { ipcMain, dialog } from 'electron';

async function openFileDialog(_event: IpcMainInvokeEvent, dir?: string) {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    defaultPath: dir,
  });

  return !canceled ? filePaths[0] : undefined;
}

const ipcMap = {
  openFileDialog: openFileDialog,
};

export const initIpcHandler = () => {
  Object.entries(ipcMap).map(([k, handler]) => {
    ipcMain.handle(k, handler);
  });
};
