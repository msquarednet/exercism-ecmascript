class Triangle {
  constructor(a,b,c) {   
    this.sides = [a,b,c].sort((a,b) => a-b);    
  }
  kind() {
    const [a,b,c] = this.sides;
    
    if (c > a + b)  {throw new Error('triangle inequality')}
    if (a <= 0)     {throw new Error('non-positive side')}

    if (a===b && a===c) {return 'equilateral'}
    else if (a===b || b===c || a===c) {return 'isosceles'}
    else {return 'scalene'}
  }
}


export default Triangle;