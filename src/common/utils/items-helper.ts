export const updateObjectinArray = (items: any, itemId: string | number, fieldName: string, newObjProps: {}) => {
    // @ts-ignore
    items.map(u => {
        if (u[fieldName] === itemId) {
            // @ts-ignore
            return {...u, ...newObjProps};
        }
        return u;
    });
};