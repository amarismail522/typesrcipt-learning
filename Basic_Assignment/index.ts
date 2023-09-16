// // Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// var personName :string = "John";
// console.log(`Hello ${personName}, Would you like to learn Typescript today?`)


// // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// var personName: string = "John";
// console.log("lower case character: ", personName.toLowerCase())
// console.log("upper case character: ", personName.toUpperCase())
// console.log("title case character: ", personName.toString())

// // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// var quote:string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// console.log("Quote: ", quote)

// // Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// var famous_person:string = "Albert Einstein";
// var quote:string = famous_person + " once said, “A person who never made a mistake never tried anything new.”"
// console.log(quote)

// // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let personName: string = "\t\nJohn\t\n";
// console.log("Name with whitespace:", personName)

// let strippedName: string = personName.trim();
// console.log("Name without whitesapce: ", strippedName)


// // Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// var sum: number = 3+5;
// console.log("Sum: ", sum)
// var substraction: number = 10-2;
// console.log("Substraction: ", substraction)
// var multiplication: number = 4*2;
// console.log("Multiplication: ", multiplication)
// var division: number = 16/2;
// console.log("Division: ", division)


// // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// var favorite_number :number = 10;
// console.log(`My favorite number: ${favorite_number}`)


// // Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// var friendNames: string[] = ["Ali", "Usama","Ahmad"]
// console.log(friendNames[0])
// console.log(friendNames[1])
// console.log(friendNames[2])

// // Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var friendNames: string[] = ["Ali", "Usama","Ahmad"]
// console.log(`Hello dear  ${friendNames[0]}`)
// console.log(`Hello dear  ${friendNames[1]}`)
// console.log(`Hello dear  ${friendNames[2]}`)

// // Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var vehicles:string[] = ["motorcycle","car"]
// console.log(`I would like to own a Honda ${vehicles[0]}.`)
// console.log(`I would like to own a Honda ${vehicles[1]}.`)


// // Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// var guests: string[] = ["Ali", "Usama","Ahmad"];
// console.log(`${guests[0]}, you are invited to dinner.`)
// console.log(`${guests[1]}, you are invited to dinner.`)
// console.log(`${guests[2]}, you are invited to dinner.`)


// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// let cantMakeIt: string = "Ali";
// console.log(`Unfortunately , ${cantMakeIt} is not coming in the dinner`)

// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// var guests: string[] = ["Ali", "Usama","Ahmad"];
// var cantMakeIt: string = "Ali";
// for(var i=0; i<guests.length; i++){
//     if (guests[i]== cantMakeIt)
//     guests[i] = "Abid";
// }

// // • Print a second set of invitation messages, one for each person who is still in your list.

// guests.forEach((guest)=>{
//     console.log(`${guest}, you are invited to dinner.`)
// })


// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

let placesToVisit: string[] = ["Murree", "Gilgit", "Skardu", "Kashmir", "Gawadar"];
console.log("Array in original order: ", placesToVisit);

// • Print your array in alphabetical order without modifying the actual list.

console.log("Array in alphabetical order: ", placesToVisit.sort());

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Array in reverse alphabetical order: ", placesToVisit.sort().reverse());






