# User Signup Mail

[https://murmuring-bayou-36605.herokuapp.com](https://murmuring-bayou-36605.herokuapp.com)

The service is an express server. It send welcome mail to user after he/she signup.

### How do I get set up?

Clone the repository
setup .env file in your root folder and put variable which are listed in below section.
Run these commands in sequence.

```
npm install
npm run dev
```

#

#### Environment Variables

1. MONGO_URI
2. NODE_ENV
3. SECRET_KEY
4. EMAIL_USE
5. EMAIL_PASS
6. EMAIL_SENDER
7. EMAIL_HOST
8. EMAIL_PORT
9. PORT

#### Tech Stack

1. Node JS
2. Express
3. Mongodb

#

#### APIs End Points

#

##### 1. /auth/signup:

To create a user.

#

     1. HTTP method: POST
     2. Request Body : {
                "firstName": "Abhishek",
                "lastName": "Asarawa",
                "email": "email@address",
                "password": "password",
                "verifyPassword": "password"
            }
     3. Response Body:
        1. On success:
            {
                "msg": "User created successfully",
                "isError": false,
                "data": {...user data}
            }
         2. Error: validation error, status code 400 / 500 / 401 / 404
            {
                data: null,
                msg: Error Message,
                isError: true
            }

#
