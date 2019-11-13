** Hello MyWeb App **
*** Tutorial of creating of the web app ***
**** With using Python, Django and many other features ****
**** Python v.3.8.0 ****
**** Django v.2.0.10 ****

For using virtual environment you need to install virtualenv (in pip).
For create an environment use:
`virtualenv venv`

For activate:
`source ./venv/Scripts/activate`

For deactivate enter `deactivate`

Install Django:
in venv `pip install Django==2.0.10`

For a project start:
`django-admin startproject hellowebapp .`

This project can have many apps. For creating apps use:
`django-admin startapp app-name`

For a database setup:
`python manage.py migrate`

For start server:
`python manage.py runserver`