export const removeDuplicates = <T>(array: T[]): T[] => {
    return [...new Set(array)];
};