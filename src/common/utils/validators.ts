export const requireField = (value: boolean) => {
    if (value) return undefined;
    return "Field is require";
}