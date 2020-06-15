// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var result=sentence.split(" ");
var fin="";
for (var i=0;i<result.length;i++) {
    fin+=result[i].charAt(0).toUpperCase()+result[i].substr(1,result[i].length-1)+" ";
}
console.log(fin);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substring(1,3));
