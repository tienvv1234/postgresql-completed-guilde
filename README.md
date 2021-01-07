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