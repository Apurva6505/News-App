const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile("index.html",{root:path.join(__dirname)})
})
// app.get ('/api', async(req, res) => {
//   // res.send('Hello World!')
//   let r = await axios.get("https://newsapi.org/v2/everything?q={query}&apiKey=6b4c3c51f4084f5186a6c742cacf0643")
//   res.json(r);
// })
app.get ('/api', async(req, res) => {
  console.log(req._parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query;
  let r = await axios(url)
  let a = r.data
  res.json(a);

})
// app.use((err,req,res,next)=>{
//   // because err.status is undefined 
//    res.status(404).json({
//        error : {
//            message : err.message
//       }
//    });
// })

// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   const status = err.status || 500;
//   res.status(status);
//   res.render('error');
// });

app.listen(port, () => {
  // console.log(`News app listening on port ${port}`)
  console.log("App is running on port http://localhost:8080")
})