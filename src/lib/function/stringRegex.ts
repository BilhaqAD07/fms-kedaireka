export const stringRegex = (string: string) => {
    return string.replace(/[^a-zA-Z]/g, "")
}