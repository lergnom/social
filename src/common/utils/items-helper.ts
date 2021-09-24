export const updateObjectinArray = (items: [], itemId: string | number, fieldName: string, newObjProps: {}) => {
    items.map(u => {
        if (u[fieldName] === itemId) {
            // @ts-ignore
            return {...u, ...newObjProps};
        }
        return u;
    });
};