SELECT cat_id AS id, name FROM cats;
 
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;

UPDATE cats SET age=14 WHERE name='Misty';

-- a good rule: SELECT before UPDATE. For sure, what you want to delete.

DELETE FROM cats WHERE name='Egg';

DELETE FROM cats; -- delete all entries from the table

source create_shirts.sql;