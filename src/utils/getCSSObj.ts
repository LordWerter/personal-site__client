export const getCSSObj = (props: any): any => {
    return {
        ...props.theme.core,
        // @ts-ignore
        ...props.theme[props.sizeId],
    };
};

export default getCSSObj;
