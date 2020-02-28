DROP DATABASE ig_clone;
CREATE DATABASE ig_clone;
USE ig_clone;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE photos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    caption VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE comments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id INT NOT NULL,
    photo_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(photo_id) REFERENCES photos(id)
);

CREATE TABLE likes(
    user_id INT NOT NULL,
    photo_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    PRIMARY KEY(user_id, photo_id)
);

CREATE TABLE follows(
    follower_id INT NOT NULL,
    followee_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(follower_id) REFERENCES users(id),
    FOREIGN KEY(followee_id) REFERENCES users(id),
    PRIMARY KEY(follower_id, followee_id)
);

CREATE TABLE tags(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE photo_tags(
    photo_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id),
    PRIMARY KEY(photo_id, tag_id)
);

INSERT INTO users(username) VALUES
('BlueTheCat'),
('FrenchPress'),
('ColtSteele');

INSERT INTO photos(image_url, caption, user_id) VALUES
('/ajzxc23nm', 'My cat', 1),
('/u89lk1nax', 'Star Wars', 2),
('/q208dcxm1', 'Microvawe explodes', 2);

INSERT INTO comments(comment_text, user_id, photo_id) VALUES
('it is awesome!', 3, 1),
('meow', 1, 3),
('amazing shot', 3, 3);

INSERT INTO likes(user_id, photo_id) VALUES
(1, 2),
(1, 1),
(1, 3),
(2, 2),
(3, 2);

INSERT INTO follows(follower_id, followee_id) VALUES
(1, 3),
(2, 3),
(3, 2),
(3, 1);

INSERT INTO tags(tag_name) VALUES
('#cute'),
('#cat'),
('#animal'),
('#movie');

INSERT INTO photo_tags(photo_id, tag_id) VALUES
(1, 3),
(1, 2),
(2, 4),
(2, 1);

SELECT image_url, username, photos.created_at
FROM users
JOIN photos
    ON users.id = photos.user_id;