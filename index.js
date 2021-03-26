// Plan your code out from A-Z
// Write down the steps in plain english

/* CREATE A FUNCTION THAT CONTROLS THE NEXT BUTTON ACTION */

/* 1. Create a function that contains the actions  
the "Next" button will do on a webpage 

*CHECK* make sure when the "Next" button is clicked
the user is able to log a string to the console

2. When the "Next" button is clicked,
the user should be able to go to the following
page. 
Ex: go from page 1 to 2 

3. If the user starts at Page 1, the "Previous" button
should be hidden
*/

// PSUEDO CODE

// Create a variable that is connected to the "Next" button in the HTML *************
// FUNCTION: *************
// clickNextButton *************
// assign a click event to the "next" button variable that logs a string *************
// Create specific IDs for the page 1,2,3 *************
// Make the variables *************
// Place them in an array *************
// ***connect to the specific Classes in the HTML and implement them in the JS
// FOR LOOP:*************
// set "i" is set to 0 with a "Let" to define it*************
// make i less than the length of the array*************
// increment by 1*************
// IF...ELSE STATEMENT
// If the array at index i is equal to a certain element, 
// grab the element, attach the innerHTML and attach its anchor
// then return it
// If the array at index 1 is equal to THAT certain element, return Page 3
// Else, you have an error


let nextButton = document.getElementById('next');
let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let page3 = document.getElementById('page3')
let diffPages = [page1, page2, page3]


// Click the Next Button
const clickNextButton = () => {
    if(nextButton){
        nextButton.addEventListener('click', function() {
        console.log("the next button works");
                loopArr();   
        })
    }
    // clickNextButton();
}
clickNextButton();

// Loop through Array
const loopArr = () => {
    for(let i = 0; i < diffPages.length; i++) {
        if(diffPages[i] === page2) {
          myLink = document.getElementsByClassName('page-link')[1].href;
          return location.assign(myLink)
        // } else if(diffPages[i] !== page2) {

        // }
    }
}


// SCROLL FUNCTIONALITY
document.querySelector("body").style.height = "1000px";
window.addEventListener("scroll", function() {
    var body = document.querySelector("body");
    var height = body.style.height;
    height = height.slice(0, -2);
    height = Number(height);
    return function() {
        if(height - window.scrollY < 700) {
            height += height / 50; //2
        }
        body.style.height = height + "px";
    };
}());

//Clothing Database
const STORE = {
    allBiz: [
        {
            bizName: "10 Deep",
        },
        {
            bizName: "4Hunnid",
        },
        {
            bizName: "All Caps Studio",
        },
        {
            bizName: "Wata",
        },
        {
            bizName: "Walker Wear",
        },
        {
            bizName: "Baby Phat",
        },
        {
            bizName: "Billionaire Boys Club",
        },
        {
            bizName: "Bephie’s Beauty Supply",
        },
        {
            bizName: "Bianca Saunders",
        },
        {
            bizName: "Bricks and Wood",
        },
        {
            bizName: "Brownstone",
        },
        {
            bizName: "Carlton Yaito",
        },
        {
            bizName: "Carrots",
        },
        {
            bizName: "Cross Colours",
        },
        {
            bizName: "Come Back as a Flower",
        },
        {
            bizName: "Free From Youth",
        },
        {
            bizName: "Denim Tears",
        },
        {
            bizName: "Diet Starts Monday",
        },
        {
            bizName: "Daily Paper",
        },
        {
            bizName: "Who Decides War",
        },
        {
            bizName: "Fat Tiger",
        },
        {
            bizName: "Fear of God",
        },
        {
            bizName: "FTP",
        },
        {
            bizName: "FUBU",
        },
        {
            bizName: "Gallery Dept.",
        },
        {
            bizName: "GOLF",
        },
        {
            bizName: "The Good Company",
        },
        {
            bizName: "Ih Nom Uh Nit",
        },
        {
            bizName: "Infinite Archives",
        },
        {
            bizName: "Just Don",
        },
        
    ]
};

//INSERT DATA INTO THE SQUARES
for(i = 0; i < STORE.allBiz.length; i++){
  document.getElementById('clothing-name1').innerHTML = `${STORE.allBiz[0].bizName}`;
  document.getElementById('clothing-name2').innerHTML = `${STORE.allBiz[1].bizName}`;
  document.getElementById('clothing-name3').innerHTML = `${STORE.allBiz[2].bizName}`;
  document.getElementById('clothing-name4').innerHTML = `${STORE.allBiz[3].bizName}`;
  document.getElementById('clothing-name5').innerHTML = `${STORE.allBiz[4].bizName}`;
  document.getElementById('clothing-name6').innerHTML = `${STORE.allBiz[5].bizName}`;
  document.getElementById('clothing-name7').innerHTML = `${STORE.allBiz[6].bizName}`;
  document.getElementById('clothing-name8').innerHTML = `${STORE.allBiz[7].bizName}`;
  document.getElementById('clothing-name9').innerHTML = `${STORE.allBiz[8].bizName}`;
  document.getElementById('clothing-name10').innerHTML = `${STORE.allBiz[9].bizName}`;
  document.getElementById('clothing-name11').innerHTML = `${STORE.allBiz[10].bizName}`;
  document.getElementById('clothing-name12').innerHTML = `${STORE.allBiz[11].bizName}`;
  document.getElementById('clothing-name13').innerHTML = `${STORE.allBiz[12].bizName}`;
  document.getElementById('clothing-name14').innerHTML = `${STORE.allBiz[13].bizName}`;
  document.getElementById('clothing-name15').innerHTML = `${STORE.allBiz[14].bizName}`;
  document.getElementById('clothing-name16').innerHTML = `${STORE.allBiz[15].bizName}`;
  document.getElementById('clothing-name17').innerHTML = `${STORE.allBiz[16].bizName}`;
  document.getElementById('clothing-name18').innerHTML = `${STORE.allBiz[17].bizName}`;
  document.getElementById('clothing-name19').innerHTML = `${STORE.allBiz[18].bizName}`;
  document.getElementById('clothing-name20').innerHTML = `${STORE.allBiz[19].bizName}`;
  document.getElementById('clothing-name21').innerHTML = `${STORE.allBiz[20].bizName}`;
  document.getElementById('clothing-name22').innerHTML = `${STORE.allBiz[21].bizName}`;
  document.getElementById('clothing-name23').innerHTML = `${STORE.allBiz[22].bizName}`;
  document.getElementById('clothing-name24').innerHTML = `${STORE.allBiz[23].bizName}`;
  document.getElementById('clothing-name25').innerHTML = `${STORE.allBiz[24].bizName}`;
  document.getElementById('clothing-name26').innerHTML = `${STORE.allBiz[25].bizName}`;
  document.getElementById('clothing-name27').innerHTML = `${STORE.allBiz[26].bizName}`;
  document.getElementById('clothing-name28').innerHTML = `${STORE.allBiz[27].bizName}`;
  document.getElementById('clothing-name29').innerHTML = `${STORE.allBiz[28].bizName}`;
  document.getElementById('clothing-name30').innerHTML = `${STORE.allBiz[29].bizName}`;
}




// const doubleMap = numbers => {
//     const doubled = [];
//     for (let i = 0; i < numbers.length; i++) {
//       doubled.push(numbers[i] * 2);
//     }
//     return doubled;
//   };
  
//   console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

