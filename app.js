console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1

let myNumber = 7;

let number = prompt ("Guess my favorite number.");

number = parseInt (number);       //IDK why this line won't work. It doesn't convert text, and the following
                                       //line works without it. 
if (isNaN(number)){                                     //if they enter text for the #
alert ("Please enter a numeric value");
}
 if (number  < myNumber){
alert ("Too low");
} else if (number > myNumber){
alert ("Too high");
} else if(number == myNumber){
alert ("That's it!");
}

//Exercise 2


let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()){
  case "december":
  case "january":
  case "february":
    alert ("Your birth month is in the winter.");
    break;
    case "march":
    case "april":
    case  "may":
      alert("Your birth month is in the spring.");
      break;
      case "june":
      case "july":
      case "august":
    alert("Your birth month is in the summer.");
        break;
        case "september":
        case "october":
        case "november":
      alert("Your birth month is in the fall.");
        break;
          default:
            alert("Invalid Month");
}
    

//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";


switch (typeId){
    case "01":
    type = "Tank top";
    break;
    case "02":
    type = "T Shirt";
    break;
    case "03":
    type = "Long Sleeve";
    break;
    case "04":
    type = "Short Sleeve"; 
    break;
   default: 
   type = "Other"; 
}


switch (colorId){
case "BL":
    color = "Black";
    break;
case "BL": 
    color = "Blue";
    break;
case "RD":
    color = "Red";
    break;
case "PU":
    color = "Purple";
    break;
   default:
    color = "White";   
}



switch (sizeId){
  case "S":
  size = "Small";
  break;
  case "M":
  size = "Medium";
  break;
  case "L":
  size = "Large";
  break;
  case "XL":
  size = "Extra Large";
  break;
  default:
  size = "One size fits all";
}

console.log(`Product: ${size} ${color} ${type}`);

