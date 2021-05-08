# Overview

This is a Django(React) application called Nipro. It's purpose is to connect developers
locally in my region(Nigeria). For more info on the project check the [Application.md](https://github.com/Xavier577/Nipro/blob/prod/documentation/Application.md) file in the documentation
directory

# Get started

Download the project with ```git clone (github.com/Xavier577/Nipro.git)```

# Installs

If you have pipenv installed, in the root directory follow the steps below:
>To install packages in pipfile run
```
pipenv install 
```
>To save changes and run server
```
python manage.py makemigrations

python manage.py migrate 

python manage.py runserver 
```
>To install dependencies and run render the react app
```
cd frontend 

npm install 

npm run dev 
```

After completing the steps, you should have the web-app all well and running :) .


And if you don't have pipenv installed you can just install all the packages in the Pipfile
or if you have them installed (by chance) it should work just fine. :)
Please note the you need set a django secret key in a .env file (in the nipro directory) as follows:

```
SECRET_KEY='whatever your secret key is'
```

i didn't include it because i wasn't sure if it was a good idea to push a secret key to github


# App status

underconstruction.....
