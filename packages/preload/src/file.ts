import { ipcRenderer } from 'electron';
import { exposeInMainWorld } from './exposeInMainWorld';

export async function openFileDialog(dir?: string) {
  const path = await ipcRenderer.invoke('openFileDialog', dir);
  return path;
}

exposeInMainWorld('openFileDialog', openFileDialog);
