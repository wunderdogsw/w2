export const getComputedCss = (element, prop) => {
  if ( !window.getComputedStyle ) return null
  let value = window.getComputedStyle(element).getPropertyValue(prop)
  if (typeof value === 'string') value = value.trim()
  return value
}
