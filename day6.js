//var input="0 2 7 0";
var input="2 8 8 5 4 2 3 1 5 5 1 2 15 13 5 14";
var states=[];
var cycles=0;
var inputStr,arr,max,ind;
//console.log(states.indexOf(input));

while (cycles == 0 || states.indexOf(input) == -1) {
	console.log("input: ", input, "type: ",typeof(input)," Index: ",states.indexOf(input));
	states.push(input);
	inputStr=input.split(" ");
	arr=[];
	for (var i=0; i<inputStr.length; i++) {
		arr.push(parseInt(inputStr[i]));
		//console.log("item: ",item," type: ",typeof(item));
	}
	//console.log("length: ",arr.length);
	max=arr.reduce(function(a,b) { return Math.max(a, b); });
	ind=arr.indexOf(max);
	//console.log("Max: ",max);
	arr[ind]=0;
	
	for (var i=++ind; max>0; i++) {
		arr[i]++;
		max--;
		if (i == (arr.length-1))
			i=-1;
	}

	input="";
	for (var i=0; i<arr.length; i++) {
		console.log(arr[i]);
		input=input.concat(" ",arr[i].toString());
	}
	// remove leading whitespace
	input=input.trim();
	console.log("Input: ",input,"\nStates:", states,"\nLength:",arr.length);
	cycles++;
}

console.log("Cycles: ",cycles);
