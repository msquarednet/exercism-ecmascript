const pad2 = (num) => (num<10) ? '0'+num : num.toString()

class Clock {
  constructor(h=0, m=0) {
    h += Math.floor(m/60)  
    h = h%24
    m = m%60
    this.h = (h < 0) ? 24+h : h
    this.m = (m < 0) ? 60+m : m
  }
  formatTime()    {return pad2(this.h) + ':' + pad2(this.m)}
  toString()      {return this.formatTime()}
  plus(mins=0)    {return at(this.h, this.m+mins)}
  minus(mins=0)   {return at(this.h, this.m-mins)}
  equals(clock)   {return this.formatTime()===clock.toString()}
}

const at = (h,m) => new Clock(h,m)


export default at