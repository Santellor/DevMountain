// how the web works
    // sessions, cookies and servers

// IP addresses and Hostnames
     // IP 123.77.32.121
     // Hostnames ex: google.com
     // DNS turns the hostname into an IP

    //localhost
`127.0.0.1 is special — it’s “this computer that you’re on”.

In addition to their IP address on the network, all computers can reach themselves at this address.`


//Uniform Resource Locator

// uniform - always structured the same way
// resource - a correct set of data from the Host, following directories until we reach the correct resource
    // in Express, this is a route
`
protocol   Hostname<-Port   Resource
    v         v       v       v`
//http://devmountain.com/outcomes

//request components
    // URL desired
    // HTTP protocol 
    // Request method (get, post <- secure)
    // Headers
    // language, date, cookies
    // request body for post


// Cookies are an object, with the name of the cookie and the value
    // num-visits: `10`;
    // sends it to the server, then the cookie is available the reference in future resources

// sessions save states like cookies. they actually use cookies
    // cookies are tricky, sessions manage them well
    // sessions save all values
    // cookies only save strings

//Cache vs cookies



// IN VIEWS FILES, USE {{ THE THING }} TO INTERACT WITH JS COMPONENTS

`The in operator returns true if the specified property is in the specified object. The syntax is:

propNameOrNumber in objectName`

// WHEN EQUATING / COPYING OBJECTS

// Use either the '...' spread operator, or Object.assign() to create a shallow copy, 
//     otherwise, any changes made to the defining object WILL be applied to the copy of the object

let student1 = {
    name: "Manish",
    company: "Gfg"
}
 
let student2 = student1;
 
student1.name = "Rakesh"

//student 2 is also being updated as student 1 is being updated
 
console.log("student 1 name is", student1.name) // Rakesh
console.log("student 2 name is ", student2.name); // ALSO Rakesh


