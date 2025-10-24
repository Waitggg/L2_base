function howManyTimes(time1,time2){
  time1 = new Date(time1);
  time2 = new Date(time2);
  let count = 0;
  console.log(time1.getHours())
  while(time1 < time2)
    {
      if( (time1.getMinutes() == 30 && time1.getSeconds() == 0) || (time1.getSeconds() < (time1.getHours() % 12 || 12) && time1.getMinutes() == 0))
        {
          count++;
        }
      time1.setSeconds(time1.getSeconds() + 1);
    }
  return count;
  
}