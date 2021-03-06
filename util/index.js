const removeClass = function (ele, className) {
  const currentClassName = ele.className;
  return currentClassName.trim().split(' ').filter(ele => ele.className !== className).join(' ').trim();
}

export default {
    removeClass
}
