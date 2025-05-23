export const setItem = (key: string, item: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.error('local storage setItem error:', err);
  }
};

export const getItem = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch (err) {
    console.error('local storage getItem error:', err);
  }
};
