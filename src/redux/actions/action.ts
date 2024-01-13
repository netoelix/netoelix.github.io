export const SAVE_NAME = 'SAVE_NAME';
export const SAVE_PATH = 'SAVE_PATH';

export const saveName = (payload = '') => ({
  type: SAVE_NAME,
  payload,
});

export const savePath = (payload = '') => ({
  type: SAVE_PATH,
  payload,
});
