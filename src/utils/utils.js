export default function capitalize(text) {
    if (typeof text !== 'string') return ''
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}