/*

Task Instructions

Implement the logic of the function named daysInMonth. The function receives one argument month, which is an integer (whole number) in the range from 1 to 12.
It should return a number of days depending on the month of the year, as per the given table:

+-----------------+------------+
|      month      |    days    |
+-----------------+------------+
| 1,3,5,7,8,10,12 |     31     |
+-----------------+------------+
| 4,6,9,11        |     30     |
+-----------------+------------+
| 2               |     28     | 
+-----------------+------------+


*/


function daysInMonth(month){

    if (month === 2) {
        return 28;
      } else if ((month === 4) ||  (month === 6) || (month === 9) || (month === 11)) {
        return 30;
      } else {
        return 31;
      }
}

console.log(daysInMonth(11));