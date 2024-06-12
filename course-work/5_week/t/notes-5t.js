let innerThoughts = `a`

while(innerThoughts.length<10000000) {
    innerThoughts += `h`
}

console.log(innerThoughts)

// add /api to backend routes to avoid conflicts

//app.get('api/invoices')
//app.post('api/new-invoice')

// JOIN matches records with corresponding fields, with no preference
// LEFT JOIN leaves out values on joined table, shows all data from source table, matching where applicable
// RIGHT JOIN does the opposite, essentially a backwards LEFT JOIN
// FULL OUTER JOIN shares data from both tables, matching where applicable

// --HOW TO COPY
//     --pg_dump name-of-db > name-of-db.sql

// --HOW TO RECREATE FROM  A COPY
//     --createdb name-of-db
//     --psql -d name-of-db -f source-file.sql