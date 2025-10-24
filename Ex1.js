function hasTwoCubeSums(n) {
  let count = 0;
  for(let i = 0; i < Math.cbrt(n); i++)
  {
    for(let j = 0; j < Math.cbrt(n); j++)
      {
        if(Math.pow(i, 3) + Math.pow(j, 3) == n)
          {
            count++;
          }
        if(count > 2)
          {
            return true;
          }
      }
  }
  return false;
}