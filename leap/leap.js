

const isLeapYear = (year) => {

	year = year || new Date().getYear();
	return year%400===0 || ((year%4===0) && (year%100!==0));

};



export default isLeapYear;
