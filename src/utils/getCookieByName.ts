export const getCookieByName = (name: string): string | null => {
    const pairs = document.cookie.split(';');
    const cookieObj: {
        [key: string]: string;
    } = {};
    pairs.forEach((pairStr) => {
        const pair = pairStr.split('=');
        cookieObj[pair[0].trim()] = pair[1];
    });
    return cookieObj[name] || null;
};
