### database design process

- What kind of thing are we storing?
	We are storing a list of cities --> we should create a table call 'cities'
- What properties does this thing have?
	each city has a name, country, population, and area, --> the table should have cloumns of name, country, population, area
- What type of data does each of those properties contain
	+ name: string, country: string, population: number, area: number --> each column should indicate the type of data that it is going to store

## String operators and functions
|| -> join two strings (select name || ', ' || country from cities)
CONCAT() --> join two strings
LOWER() --> gives a lower case string
LENGTH() --> gives number of characters in string
UPPER()

## the simple order of query
select name from cities where area > 4000
1 --> from cities
2 --> where area > 4000
3 --> select name

helper in postgres SERIAL, tell the postgres we want the value generate automatically

On Delete Option ---> what happens if you try to delete a user when a photo is still referencing it
ON DELETE RESTRICT ---> error
ON DELETE NO ACTION ---> error
ON DELETE CASCADE --->  Delete the photo too!
ON DELETE SET NULL --> set the 'user_id' of the photo to 'null'
ON DELETE SET DEFAULT ---> set the 'user_Id' of the photo to a default value, if one is provided

# Joins
- Produces values by merging together rows from different related tables
- Use a join most times that you are asked to find data that involves multiple resources

# Aggregation
- Looks at many rows and calculates a single value
- Words like 'most', 'average', 'least' are a sign that you need to use an aggregation

FROM --> Specifies starting set of rows to work with
JOIN --> Merges in data from additional tables
WHERE --> Filters the set of rows
GROUP BY --> Groups rows by a unique set of values
HAVING --> Filters the set of groups (HAVING require GROUP BY)

# UNION
UNION --> Join together the results of two queries and remove duplicate rows
UNION ALL --> Join together results of two queries
INTERSECT --> Find the rows common in the results of two queries, Remove duplicates
INTERSECT ALL --> Find the rows common in the results of two queries
EXCEPT --> Find the rows that are present in first query but not second query, remove duplicate
EXCEPT ALL --> Find the rows that are present in first query but not second query

# Sub-query
- List the name and price of all products that are more expensive than all product in the 'Toys' department
- 1 Select MAX(price) from products where department = 'Toys'
- 2 Select name, price from products where price > (1)

- Select 
    (sub-query) --> (A source of a value) (any subquery that results in a single value)
	from (sub-query) (A source of row)(any subquery, so long as the outer selects/wheres/etc are compatible: co nghia la nhung field trong select and where claus phai co trong from clause) (GOTCHA: subquery must have an alias applied to it) (any subquery, so long as the outer selects/from are compatible, can return one row one column)
		join (sub-query) (A source of row) (join giong voi from)
			where (sub-query) (A source of column)

- understanding the shape of a query result is key

operator in the where clause           structure of data the subquery must return
              >                                 Single Value                       
			  <                                 Single Value
			  >=                                 Single Value
			  <=                                 Single Value
			  =                                 Single Value
			  <> Or !=                                 Single Value
			  IN                                  Single column
			  NOT IN                                  Single column

			  > ALL/SOME/ANY                                  Single column
			  < ALL/SOME/ANY                                Single column
			  => ALL/SOME/ANY                          Single column
			  <= ALL/SOME/ANY                            Single column
			  = ALL/SOME/ANY                           Single column
			  <> ALL/SOME/ANY                           Single column
ALL example
SELECT name, department, price FROM	 products WHERE price > ALL (select price from products where...)

SELECT name, department, price FROM	 products WHERE price > SOME/ANY (select price from products where...)

SELECT name, department, price FROM	 products as p1 WHERE price = (SELECT * MAX(price) FROM products AS p2 WHERE p2.department = p1.department)

- SELECT (SELECT MAX(price) FROM products) / (SELECT MIN(price) FROM products); any time you want to calculates the result math

### DISTINCT

SELECT COUNT(DISTINCT department) FROM products
you can use groupby for replace distinct, not use distinct for replace groupby

### GREATEST, LEAST function postgres

select name, weight, greatest(30, 2 * weight)
from products

select name, price, LEAST(price * 0.5, 4000)
from products

### CASE WHEN

SELECT name, price, 
	CASE 
		WHEN price > 600 then 'high'
		WHEN price > 300 then 'medium'
		ELSE 'cheap
	WHEN

### Data Type
1. Quick Rule for store number

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	department VARCHAR(50),
	price INTEGER,
	weight INTEGER
)

- Numeric Types Fast Rules
+ 'id' column of any table --> Mark the column as serial
+ Need to store a number without a decimal --> Mark the column as integer
+ Bank balance, grams of gold, scientific calculations --> Need to store a number with a decimal and this data needs to very accurate --> Mark the column as numeric
+ Kilograms of trash in a landfill, liters of water in a lake, air pressure in a tire --> Need to store a number with a decimal and the decimal doesn't make a big difference --> Mark the column as double precision