//relation types
    // 1-1
    // many - 1
    // many - many 
        //which is really 1 - many - 1

//dry databases
    //bad : duplicate rows for a single new entry
    //bad : duplicate columns for a single new entry
    //good : table for duplicate entries, where that table is refenced in the master copy

// include = join
    // sequelize eager loading is faster than JOINS
        // {include: department}, {include: schedule} 

// sql is the balance between what should always be together versus what is best kept separate
//sql
`https://dbdiagram.io/home`

//sequelize
`dbdesigner.net`

//load is faster than useEffect, but less versatile

//software dev life cycle
    //planning
    //defining
    //designing
    //building
    //testing
    //deployment