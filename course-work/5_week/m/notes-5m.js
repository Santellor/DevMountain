function spinWords(string){
    // split the given string into array, using spaces as the delimiter, then map over each element
    return string.split(` `).map((element) => element.length > 4? 
        // if the element is longer than 4 characters, reverse it by converting the word into an array and using reverse
         element = element.split(``).reverse().join(``) :
         // if not, the element is unchanged
         element = element
        // rejoin the string array into a sentence
         ).join(` `)
   }

// aliasing in obj
   const myObj = {
    name: baba,
   }

   const {baba: you} = myObj

   console.log(you)


// SQL 
   //relational databases 
    //data is kept in related tables 
        //overlapping info
        //complex questions about data
        //consistency and durability 
            //heavy power draw

//anatomy 
    //collection of tables -> database
        //table -> sheet
            //record -> row
                //field -> column or entry

// data types
   //varchar
        //limited string
    //text 
        // string
    //integer
        // #
    // float or real
        // #.#####
    // boolean
        // t o f
    // null
    // date
        //	2020-12-25

// syntax
   //plain text
   //whitespace proof
   //case-insensitive
        // snake_case for now
        // needs semicolon
    // SELECT - pull info
        //DISTINCT specifies to only return new field values
    // AS - alias for a result
    // FROM - source of data
    // WHERE - qualifier
        // LIKE '%is this in the text%'
        // BETWEEN 'inclusive between 2 records'
        // price IN (3,4,5) -> returns any where the price is in the list 
        // IS NULL is the same as asking if the field = NULL
    //GROUP BY
        //takes a given field in a record
            //then groups all records according to that field
        //HAVING is group by modifier similar to where
            // group by color, but only if count is greater than 2
        //aggregates
            //COUNT
            //AVG
            //SUM
            //MIN
            //MAX
    //ORDER BY
        // order records according to a different quantifier
            //text will be sorted alphabetically
            //numbers will be sorted
            // ORDER BY id DESC 
                // this would reverse the order of ID displays
    //LIMIT <- Pagination
        // upper bound of how many records to return
    //OFFSET <- Pagination
        // where to begin the return 
    // SPLAT operator = *
