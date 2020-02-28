-- finding 5 oldest users
SELECT * FROM users ORDER BY created_at LIMIT 5;

-- what day of week do most users register on?
SELECT 
    DAYNAME(created_at) AS day,
    COUNT(*) AS registered
FROM users
GROUP BY day
ORDER BY registered DESC
LIMIT 2;

-- find the users who have never posted a photo
SELECT
    id,
    username
FROM users
LEFT JOIN photos
    ON users.id = photos.user_id
WHERE photos.id IS NULL;

-- who can get the most likes on a single photo
SELECT
    photos.id,
    image_url,
    COUNT(*) AS likes
FROM photos
JOIN likes
    ON photos.id = likes.photo_id
GROUP BY likes.photo_id
ORDER BY likes DESC
LIMIT 1;

SELECT
    photos.id,
    image_url,
    username,
    COUNT(*) AS likes
FROM photos
JOIN likes
    ON photos.id = likes.photo_id
JOIN users
    ON users.id = photos.user_id
GROUP BY likes.photo_id
ORDER BY likes DESC
LIMIT 10;

-- how many times does the average user post?
SELECT
    AVG(t1.total) AS average_post
FROM (
    SELECT
        COUNT(photos.id) as total
    FROM users
    LEFT JOIN photos
        ON users.id = photos.user_id
    GROUP BY username
) AS t1;

SELECT (SELECT COUNT(*) FROM photos) / (SELECT COUNT(*) FROM users) as average;

-- what are the top 5 most commonly used hashtags
SELECT 
    tag_name,
    COUNT(*) AS total
FROM photo_tags
JOIN tags
    ON photo_tags.tag_id = tags.id
GROUP BY tag_name
ORDER BY total DESC
LIMIT 5;

-- find users who have liked every single photo on the site
SELECT
    username,
    t1.total
FROM (
    SELECT
        username,     
        count(*) AS total
    FROM likes
    JOIN users
        ON likes.user_id = users.id
    GROUP BY user_id
) AS t1
WHERE t1.total = (
    SELECT 
        COUNT(*) 
    FROM photos
);

SELECT
    username,     
    count(*) AS num_likes
FROM users
JOIN likes
    ON likes.user_id = users.id
GROUP BY likes.user_id
HAVING num_likes = (
     SELECT 
        COUNT(*) 
    FROM photos
);