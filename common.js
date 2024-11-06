const getCSS = (variavel) => {
    const bodystyle = getComputedStyle(document.body)
    return bodystyle.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export {getCSS, tickConfig}
