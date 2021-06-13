function checkColor(data, color, prevColor, tmp, check) {
  if (!prevColor && data) {
    tmp = { ...tmp, color: data };
    check = true;
  } else {
    if (data && color[prevColor-1].name !== data) {
      tmp = { ...tmp, color: data };
      check = true;
    }
  }
}

export default checkColor;
