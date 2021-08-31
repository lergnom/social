export const requireField = (value: boolean) => {
    if (value) return undefined;
    return "Field is require";
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length shoul be ${maxLength} symbols`;
    return undefined;
}