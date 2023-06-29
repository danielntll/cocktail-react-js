
export const localSave = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  console.log("DATA SAVED!");
}

export const localGet = (key) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  } else {
    return []
  }
}