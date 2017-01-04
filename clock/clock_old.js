class Clock {
  constructor() {}
  static at(hour=0, min=0) {
    let h = hour;
    let m = min;
    function pad2(num)        {return (num<10) ? '0'+num : num.toString();}
    function formatTime(h,m)  {
      if (m >= 60) {
        h += Math.floor(m/60);
        m = m%60;
      }
      if (m < 0) {
        h += Math.floor(m/60);
        m = 60 + (m%60);
      }
      h = h%24;
      h = (h%24===0) ? 0 : h;
      if (h < 0) { h = 24+h }
      return pad2(h) + ':' + pad2(m);
    }
    return {
      toString: function(){
        return formatTime(h,m)
      },
      plus: function(minutes=0){
        return formatTime(h,m+minutes)
      },
      minus: function(minutes=0){
        return formatTime(h,m-minutes)
      },
      equals: function(clock){
        return formatTime(h,m) === clock.toString()
      }
    }
  }
}


export default Clock.at;