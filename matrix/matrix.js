class Matrix {
  constructor(str) {
    this.rows     = str.split('\n').map( r => r.split(' ').map((x) => Number(x)) )
    this.columns  = this.rows[0].map((_,i) => this.rows.map(r => r[i]))
  }
}


export default Matrix