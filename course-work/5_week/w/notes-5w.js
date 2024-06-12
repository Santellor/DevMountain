// alternative method to model records in the database
    db.define('database name but singular', {
        row1: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        row2: {
            type: datatypes.STRING,
            allowNull: false,
            unique: true,
        },
        row3: {
            type: datatypes.STRING(15),
        }
     }, {
        modelName: `department`
    });
 

    class ClassEx {
        constructor(constructor1, constructor2) {
            this.constructor1 = constructor1
            this.constructor2 = constructor2
        }
        displayName = "My First Class"
    }
    
    const ex = new ClassEx("defining value 1", "defining value 2")
    
    console.log(ex)
    // CLASS NAME NEEEEDS to be singular 

// setting one to many key relationships between tables
// the foreign key should be the primary key of the table that 'has'

MealOrder.belongsTo(Menu, {foreignkey: 'menuItemCode'})
Sales.hasMany(MealOrder, {foreignKey: 'menuItemCode'})