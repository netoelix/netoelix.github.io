export const SAVE_NAME = 'SAVE_NAME';

export const saveName = (payload = '') => ({
  type: SAVE_NAME,
  payload,
});
