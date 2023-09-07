export function veilidBase64Encode(data: string) {
    return removeBase64Padding(btoa(data));
}

export function veilidBase64Decode(b64: string) {
    return atob(addBase64Padding(b64));
}

export function removeBase64Padding(b64: string) {
    return b64.replace(/=/g, '');
}

export function addBase64Padding(b64: string) {
    const rem = b64.length % 4;
    if (rem === 2) {
        return `${b64}==`;
    } else if (rem === 3) {
        return `${b64}=`;
    }
    return b64;
}