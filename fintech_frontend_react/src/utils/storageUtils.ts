export const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) as T : null;
};

export const removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
};
