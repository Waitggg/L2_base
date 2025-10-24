function hexStringToRGB(hexString) {
  const c = hexString.replace('#','').split('').map((_, i, ar) => { if (i % 2 == 0 && i+1 < hexString.length){ return [ar[i] + ar[i+1]]}});
  console.log(c);
  return { r: parseInt(c[0],16), g: parseInt(c[2],16), b: parseInt(c[4],16) };
}