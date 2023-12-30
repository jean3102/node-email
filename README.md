
## NODE EMAIL

In the following repository, I show an application to be able to send email using the following provider `resend`

### Environment Variables
To run this project, you will need to register on the page https://resend.com and use the `API_KEY`, then add your API key in the .env file

 `API_KEY=your api key` 

 `DOMAIN=Acme <onboarding@resend.dev>`:  with default domain you can only send email to your own email


 ### Install dependencies

```bash
  npm  install
```
## Running App

To run the app, run the following command

```bash
  npm run dev
```
Runs the app in the development mode http://localhost:3000

 ### Or run the app with docker 

```bash
  docker compose -f docker-compose-dev.yml up
```
 ### Test application
Use an API client to test the application such as Postman and create router `http://localhost:3000/email/send` with follow content

```bash
{
   "to":[
      "your Email"
   ],
   "subject":"hello world",
   "html":"<strong>it works!</strong>"
}
```



