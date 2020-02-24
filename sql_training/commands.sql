SELECT cat_id AS id, name FROM cats;
 
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;

UPDATE cats SET age=14 WHERE name='Misty';

-- a good rule: SELECT before UPDATE. For sure, what you want to delete.

DELETE FROM cats WHERE name='Egg';

DELETE FROM cats; -- delete all entries from the table

source create_shirts.sql;

SELECT CONCAT(author_fname, ' ', author_lname) AS 'Full Name' FROM books;

SELECT 
    CONCAT_WS(' - ', title, author_fname, author_lname) 
FROM books;

SELECT SUBSTRING('Hello World', 7); -- substring from position = 7

SELECT SUBSTRING('Hello World', 1, 4); -- 

SELECT SUBSTRING('Hello World', -3); -- substring from the end

SELECT CONCAT(
    SUBSTRING(title, 1, 10),
    '...'
) AS 'short title' FROM books;

SELECT REPLACE('Hello world', 'o', '0');

SELECT SUBSTRING(
    REPLACE(title, 'e', '3'), 1, 10
) FROM books;

SELECT REVERSE('Hello world');

SELECT CONCAT(author_fname, REVERSE(author_fname)) FROM books;

SELECT CHAR_LENGTH('hello');

SELECT author_lname AS 'Author', CHAR_LENGTH(author_lname) AS 'Name length' FROM books;

SELECT CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long') FROM books;

SELECT UPPER('hello world');
SELECT LOWER('HELLO WORLD');

SELECT CONCAT('MY FAVORITE BOOK IS ', UPPER(title)) FROM books;

SELECT CONCAT(
    UPPER(
        SUBSTRING(title, 1, 5)
    ), SUBSTRING(title, 6)
) FROM books;

SELECT UPPER(
    CONCAT(author_fname, ' ', author_lname)
) AS 'Full name';

SELECT UPPER(
    REVERSE('Why does my cat look at me with such hatred?')
);

SELECT 
    CONCAT(SUBSTRING(title, 1, 10), '...') AS 'short title',
    CONCAT(author_lname, ',', author_fname) AS 'author',
    CONCAT(stock_quantity, ' in stock') AS 'quantity'
FROM books;


SELECT DISTINCT author_lname FROM books;

SELECT DISTINCT CONCAT(author_fname, ' ', author_lname) FROM books;

SELECT DISTINCT author_fname, author_lname FROM books;

SELECT author_fname, author_lname, title FROM books ORDER BY author_lname;
SELECT title, pages FROM books ORDER BY released_year;
SELECT title, released_year, pages FROM books ORDER BY author_lname DESC;
SELECT title, released_year, pages FROM books ORDER BY 2;
SELECT author_fname, auhor_lname FROM books ORDER BY author_lname, author_fname;

SELECT title FROM books LIMIT 2;
SELECT title, released_year FROM books ORDER BY released_year DESC LIMIT 5;

-- first number - starting point
-- second number - how many items you want
SELECT title, released_year FROM books ORDER BY released_year DESC LIMIT 0,5;

-- for getting all items from 5 position to end of the table
SELECT title FROM books LIMIT 5, 1231231231212738192;

SELECT title, author_fname FROM books WHERE author_fname LIKE '%da%';
SELECT title, author_fname FROM books WHERE author_fname LIKE '%da';
SELECT title, author_fname FROM books WHERE author_fname LIKE 'da%';

-- get items with stock_quantity that have exactly 3 symbols
-- way to specify exactly one character
SELECT title, stock_quantity FROM books WHERE stock_quantity LIKE '___';

-- escape % character with \%
SELECT title FROM books WHERE title LIKE '%\%%';
SELECT title FROM books WHERE title LIKE '%\_%';

-- the longest book
SELECT title, pages FROM books ORDER BY pages DESC LIMIT 1;

-- three most recent books
SELECT
     CONCAT(title, ' - ', released_year) AS 'summary'
     FROM books ORDER BY released_year DESC LIMIT 3;

SELECT COUNT(*) FROM books;

SELECT COUNT(DISTINCT author_lname) FROM books;

SELECT COUNT(*) FROM books WHERE title LIKE '%the%';
SELECT COUNT(title) FROM books WHERE title LIKE '%the%';

SELECT author_lname, COUNT(*) FROM books GROUP BY author_lname;

SELECT author_fname, author_lname, COUNT(*) FROM books GROUP BY author_fname, author_lname ORDER BY count(*);

SELECT released_year, COUNT(*) FROM books GROUP BY released_year;

SELECT CONCAT('In ', released_year, ' ', COUNT(*), ' released') FROM books GROUP BY released_year;

SELECT MIN(released_year) FROM books;

SELECT MAX(pages) FROM books;

SELECT MAX(pages), title FROM books;

SELECT pages from books where pages=634;
SELECT title, pages FROM books
    WHERE books=(SELECT MAX(pages) FROM books);
SELECT title, pages FROM books ORDER BY pages DESC LIMIT 1; -- same, but faster

SELECT author_fname, author_lname, MIN(released_year) FROM books
    GROUP BY author_lname, author_fname;

SELECT SUM(pages) FROM books;
SELECT SUM(released_year) FROM books;
SELECT author_fname, author_lname, SUM(pages), count(title) FROM books GROUP BY author_lname, author_fname;

SELECT AVG(pages) FROM books;
SELECT released_year, AVG(stock_quantity) FROM books GROUP BY released_year;
SELECT author_fname, author_lname, AVG(pages) FROM books 
    GROUP BY 2, 1
    ORDER BY 3 DESC
    LIMIT 1;

SELECT released_year, count(*) FROM books
    GROUP BY 1;

SELECT CONCAT(author_fname, ' ', author_lname) AS 'Author full name', pages FROM books
    GROUP BY author_fname, authore_lname
    ORDER BY pages DESC
    LIMIT 1;

SELECT CONCAT(author_fname, ' ', author_lname) AS 'Author full name', pages FROM books
    WHERE pages=(
        SELECT MAX(pages) FROM books
    );

SELECT 
    released_year AS 'year', count(*) AS '# books', AVG(pages) AS 'avg pages'
    FROM books
    GROUP BY released_year
    ORDER BY released_year;

INSERT INTO people(name, birth_date, birth_time, birth_dt) VALUES
    ('Alan', CURDATE(), CURTIME(), NOW());

-- Formatting dates
-- ================
DAY()
DAYNAME()
DAYOFYEAR()
DAYOFWEEK()
MONTH()
NOW()
CURDATE()
CURTIME()
MONTH()

SELECT name, CONCAT(
    MONTHNAME(birth_date),
    ' ',
    DAY(birth_date),
    'st ', 
    YEAR(birth_date),
    ', ',
    DAYNAME(birth_date)
) AS 'Birth Date' FROM people;

SELECT name, DATE_FORMAT(
    birth_date,
    '%M %D %Y, %W'
) FROM people;

SELECT name, DATEDIFF(NOW(), birth_date) FROM people;

SELECT birth_date, date_add(birth_date, INTERVAL 1 MONTH) FROM people;

SELECT birth_date, birth_date + INTERVAL 1 MONTH + INTERVAL 4 DAY FROM people;

CREATE TABLE comments(
    content VARCHAR(120),
    created_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments(
    content VARCHAR(120),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE inventory(
    item_name VARCHAR(120),
    price DECIMAL(9, 2),
    quantity INT
);

CREATE TABLE tweets(
    content VARCHAR(200),
    user_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

SELECT title, author_lname FROM books WHERE
    author_lname = 'Carver' OR
    author_lname = 'Lahiri' OR
    author_lname = 'Smith';

SELECT title, author_lname FROM books WHERE
    author_lname IN ('Carver', 'Smith', 'Lahiri');

SELECT name, birth_date FROM people WHERE
    birth_date BETWEEN '1988-01-01' AND '2000-01-01';

SELECT name, birth_date FROM people WHERE
    birth_date BETWEEN CAST('1988-01-01' AS DATETIME) AND
    CAST('2000-01-01' AS DATETIME);

SELECT title, released_year FROM books WHERE
    released_year != 2000 AND
    released_year != 2001 AND
    released_year != 2003 AND
    released_year != 2005 AND
    released_year != 2006 AND
    released_year != 2007 AND
    released_year != 2010 AND
    released_year != 2011;

SELECT title, released_year FROM books WHERE
    released_year NOT IN (2000, 2001, 2003, 2005, 2006, 2007, 2010, 2011);

SELECT title, released_year,
    CASE WHEN released_year < 2000
        THEN '20th Century Lit'
        ELSE 'Modern Lit'
        END AS 'GENRE'
FROM books;

SELECT title, stock_quantity,
    CASE 
        WHEN stock_quantity < 50 THEN '*'
        WHEN stock_quantity < 100 THEN '**'
        ELSE '***'
        END AS 'rating'
FROM books;

SELECT title, stock_quantity,
    CASE
        WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
        WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
        WHEN stock_quantity BETWEEN 101 AND 150 THEN '***'
        ELSE '****'
    END AS STOCK
FROM books;

SELECT title, author_lname,
    CASE
        WHEN title LIKE '%stories%' THEN 'Short Stories'
        WHEN title LIKE '%Just Kids%' OR title LIKE '%A Heartbreaking Work%' THEN 'Memoir'
        ELSE 'Novel'
    END AS 'TYPE'
FROM books;

SELECT title, author_lname,
    CASE
        WHEN COUNT(title) = 1 THEN CONCAT(COUNT(title), ' book')
        ELSE CONCAT(COUNT(title), ' books')
    END AS 'COUNT'
FROM books GROUP BY author_lname, author_fname;

SELECT title, author_lname,
    CASE
        WHEN COUNT(*) = 1 THEN '1 book'
        ELSE CONCAT(COUNT(title), ' books')
    END AS 'COUNT'
FROM books GROUP BY author_lname, author_fname;

SELECT title, author_lname FROM books
WHERE author_lname LIKE 'C%' OR
      author_lname LIKE 'S%';

SELECT title, author_lname FROM books
WHERE SUBSTR(author_lname, 1, 1) = 'C' OR
      SUBSTR(author_lname, 1, 1) = 'S';

SELECT title, author_lname FROM books
WHERE SUBSTR(author_lname, 1, 1) IN ('C', 'S');

SELECT * FROM orders WHERE customer_id = 1;
SELECT * FROM customers WHERE last_name = 'George';

-- CROSS JOIN

SELECT * FROM orders WHERE customer_id = 
    (
        SELECT id FROM customers WHERE last_name = 'George'
    );

SELECT * FROM customers, orders;

SELECT * FROM customers, orders WHERE customers.id = orders.customer_id;

-- INNER JOIN

SELECT last_name, first_name, order_date, amount FROM customers, orders
WHERE customers.id = orders.customer_id;

SELECT * FROM customers
    JOIN orders ON customers.id = orders.customer_id;

SELECT first_name, last_name, order_date, amount
FROM customers
JOIN orders
    ON customers.id = orders.customer_id
ORDER BY amount;

SELECT first_name, last_name, order_date, amount
FROM customers
JOIN orders
    ON customers.id = orders.customer_id
GROUP BY orders.customer_id;

SELECT
    first_name,
    last_name,
    order_date,
    SUM(amount) AS total_spent
FROM customers
JOIN orders
    ON customers.id = orders.customer_id
GROUP BY orders.customer_id
ORDER BY total_spent DESC;

-- LEFT JOIN

SELECT
    first_name,
    last_name,
    SUM(amount)
FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customers.id;

SELECT
    first_name,
    last_name,
    IFNULL(SUM(amount), 0.00) AS total_spent
FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY total_spent;

-- RIGHT JOIN

SELECT first_name, last_name, order_date, amount
FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id;

SELECT
    IFNULL(first_name, 'MISSING') AS first_name,
    IFNULL(last_name, 'USER') AS last_name,
    order_date,
    SUM(amount)
FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customer_id;

SELECT
    IFNULL(first_name, 'MISSING') AS first_name,
    IFNULL(last_name, 'USER') AS last_name,
    order_date,
    SUM(amount)
FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY first_name, last_name;