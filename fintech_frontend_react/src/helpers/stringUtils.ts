export const truncateString = (str: string, length: number): string => {
    return str.length > length ? `${str.substring(0, length)}...` : str;
};

export const kebabToCamelCase = (str: string): string => {
    return str.replace(/-./g, match => match.charAt(1).toUpperCase());
};
