# QA recruitment test

---

### Install the dependencies
Run ```npm install```

### How to run the test
Run the test without visual mode:
- Execute all the login page scenarios: ```npm run cypress:loginPage```
- Execute all the login process scenarios: ```npm run cypress:loginProcess```
- Execute all the registration process scenarios: ```npm run cypress:registrationProcess```
- Execute all the forgot password scenarios: ```npm run cypress:forgotPasswordProcess```

Run the test in visual mode:
- Execute ````npm run cypress:visual```` and select the feature that you want to launch.

#### Environment Variables  
As we need to log into www.douglas.de, we need to set the credentials as environment variables. 

I recommend to add a ```cypress.env.json``` file under ```rindus-recruitment-test``` folder with the following fields:
```
    {
        "userEmail": {email},
        "password": {password},
        "userName": {username},
        "douglasId" : {douglasId}
    }
   ```

There are some other ways to add the environment variables here: https://docs.cypress.io/guides/guides/environment-variables


#### QA Notes after testing
I have realized that the forgot password email is not validated, so I can add whatever text and it shows "the message have been sent".

Also, after adding the email to reset the password, the success popup contains "Please enter the email address you used to create your Douglas account. We will then send you a link with which you can create a new password." but the email was added in the previous step. 

#### Things that I would change if it were a real case
- Language: Is it the language always German? If not, we would need a file with the different languages and text. 
- Credentials: I would use a "test user".
- Add screenshot? If the page does not change usually, I would add a cypress screenshot to check if the image is exactly as we expected. 


