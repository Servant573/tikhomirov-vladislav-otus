/**
 *
 * @param {HTMLElement} target
 * @returns {string}
 */
function getPath(target) {
  if (!target || !target.tagName) {
    throw new Error('Invalid argument. Argument of getPath function must be HTMLElement')
  }
  const { tagName, id, parentNode, previousElementSibling, classList } = target;
  const tag = tagName.toLowerCase();
  if (tag === 'body') {
    return tag;
  }

  if (id) {
    return `#${id}`;
  }

  let elementPath = [tag, ...classList].join('.');

  let numberOfChild = 1;

  let prev = previousElementSibling;

  while (prev) {
    numberOfChild++;
    prev = prev.previousElementSibling;
  }

  if (numberOfChild > 1) {
    elementPath += `:nth-child(${numberOfChild})`;
  } else {
    elementPath += ':first-child';
  }

  return getPath(parentNode) + ' > ' + elementPath;
}

module.exports = getPath;
