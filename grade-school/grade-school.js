class School {
  constructor() {
    this.db = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }
  add(name, grade) {
    if (!this.db[grade]) {this.db[grade] = [name]}  //insert
    else {                                          //update
      this.db[grade].push(name);
      this.db[grade] = this.db[grade].sort();
    }
  }
  grade(num) {
    return this.db[num] || [];
  }
}


export default School