function expandedForm(num) {
  let result = [];
  for(let i = 1; num%Math.pow(10,i-1) != num; i++)
    {
      let ans = num%Math.pow(10,i) - num%Math.pow(10,i-1);
      if(ans != 0)
      result.unshift(ans);
    }
  return result.join(" + ");
}