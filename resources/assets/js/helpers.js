export default function helpers() {
    return {
        trans(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
}