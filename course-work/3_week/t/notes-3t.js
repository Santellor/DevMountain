const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
  // the gauss summation formula? 

//   switch ? if this then that
// WHOA THESE ARE COOL

function getSum(a, b) {
    let sum = 0;
    
    switch (a < b) {
      case true:
        for (let i = a; i <= b; i++) {
          sum += i
        }
        break
      case false:
        for (let i = a; i >= b; i--) {
          sum += i
        }
        break // ultranecessary for these or it will never exit deep scope
    }
    return sum
  }


  //Express and Templates
    // web frameworks define how servers respond to requests
        // if this, then grab that, like a librarian snagging the correct book (bundle of info)
    // Web apps are programs that handle web requests
        //they produce HTML responses
            // handle forms
            // connect to databases
            // login/logout

            // CRTL CLICK TO FIND WHERE AN IMPORTED VALUE IS DEFINED

{/* <html>
       <body>
         <h1>This is the homepage</h1>
         <a href="/form">Go to the form</a>
            //a tags navigate to new endpoints
       </body>
     </html> */}

`{person: jacob, number: 12}
?person=Jacob&number=12

req.query unpacks the string into an object

QUERY STRING: 
the part of the URL that is generated from submitting some information, beginning with a “?” and followed by key=value pairs, separated by “&”
{person: “Carl”, number: 12}
Query String version:
?person=Carl&number=12

Query strings can be unpacked by our server using “req.query”`

// Get shouldn't be used for sensitive data

     // Post is encrypted

