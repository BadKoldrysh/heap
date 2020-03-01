CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) VALUES
("katie34@yahoo.com"),
("tunde@gmail.com");

SELECT 
    CASE
        WHEN email LIKE '%gmail%' THEN 'gmail'
        WHEN email LIKE '%yahoo%' THEN 'yahoo'
        WHEN email LIKE '%hotmail%' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    count(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;