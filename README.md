# JavaScript-Assignment-Arrays
Assignment using Arrays in JavaScript

## Get elements from start of an array
Write a JavaScript function called *first* to get elements from the beginning of an array. Passing a parameter 'n' will return the first 'n' elements of the array containing [7,9,0,-2]

Examples with Data : 
```javascript
    console.log(first([7, 9, 0, -2])); 
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));

```
Expected Output : 
``` 7
    [] 
    [7, 9, 0] 
    [7, 9, 0, -2] 
    [] 
```

## Maintaining a List from a Web Form

Given the following 'index.html' document, write a JavaScript program to add items in an blank array and display the items when the corresponding button is clicked.

Your will need to add a function called ```add_element_toArray()``` to get the text item entered into the HTML form and add it to the list.

Your will need to add a function called ```display_array()``` to disply the list on the HTML page.

HINTS: 
* Use ```document.getElementById("text1").value``` to get the text entered by the user to add to the list
* Use ```document.getElementById("Result").innerHTML = textRepresentationOfYourItems``` do display your list in the HTML page.

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
    <meta charset=utf-8/>
    <title>JS Bin</title>
    <style>
        body {
            padding-top: 50px
        }
    </style>
    <script src="TestJS.js"/>

</head>
<body>
    <input type="text" id="text1"/>
    <input type="button" id="button1" value="Add" onclick="add_element_to_array();"/>
    <input type="button" id="button2" value="Display" onclick="display_array();"/>
    <hr/>
    <div id="Result"></div>
</body>
</html>
```
