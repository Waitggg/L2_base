function solution(str){
   let result = [];
  let pair = '';
  for(let i = 0; i < str.length; i++)
    {
      pair += str[i];

      if(i % 2 != 0)
        {
          result.push(pair);
          pair = '';
          continue;
        }
      if(i == str.length-1 && pair.length < 2)
        {
          result.push(pair + '_');
        }
    }
  return result;
}