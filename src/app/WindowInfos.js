function WindowInfos() {
  if(parseInt(window.innerWidth, 0) < 768)
    return true;
  return false;
}

export { WindowInfos };
