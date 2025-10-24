function toWeirdCase(string){
  let result = string.split(' ');
  let r = [];
  console.log(result)
  for(let i =  0; i < result.length; i++)
    {
      r[i] = [];
      for(let j = 0; j < result[i].length; j++)
        {
          if(j % 2 == 0)
          {

              r[i][j] = result[i][j].toUpperCase();
          }
          else
            {
               r[i][j] = result[i][j].toLowerCase();
            }
        }
          r[i] = r[i].join('');
    }
  console.log(r)
  return r.join(' ');
}