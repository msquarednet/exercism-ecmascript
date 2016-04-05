class Gigasecond {
  constructor(d) {
    this.input_date = d;
  }
  date() {
    return new Date( Date.parse(this.input_date) + 1000000000000 );
  }
}

export default Gigasecond;
