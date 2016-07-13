class PhoneNumber {
  constructor(str) {
    this.phone = str;
  }
  number() {
    let cleaned = this.phone.replace(/[^\d]/g, '').trim();
    if (cleaned.length===10 || (cleaned.length===11 && cleaned.charAt(0)==='1')) {
      if (cleaned.length===11 && cleaned.charAt(0)==='1') {
        cleaned = cleaned.slice(1);		
      }
    } else {cleaned='0000000000';}
    return cleaned;
  }
  areaCode(){
    let cleaned = this.number(this.phone);
    return cleaned.slice(0,3);
  }
  toString() {
    let cleaned = this.number(this.phone);
    return `(${this.areaCode(cleaned)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
  }

}


export default PhoneNumber;