# node-express-vercel
Hosting express node project on vercel

### Database
> A get request in routes/home.js sends index.html in routes, as a response, displaying an HTML form with Name and ID as input fields. On submitting the form, the page is redirected to localhost:3000/add-Post
At localhost:/3000/add-Post, a post request in home.js stores the inputs from the HTML form into variablees, and sends those variables to a mongoDB database: using URI :  "mongodb+srv://markdb:rasengan@cluster0.ad3usrv.mongodb.net/?retryWrites=true&w=majority"
where the results are added to the databas. 

### Deployed on
> https://node-express-vercel-master-kvk9pizy8-markaryee.vercel.app/
