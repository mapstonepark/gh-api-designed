# General Hospital API

A restful API that will return any contract player on ABC's General Hospital.

**Link to project:**
https://generalhospitalapi.herokuapp.com/

## How It's Made:

**Tech used:** HTML, CSS, Javascript, Express, MongoDB

For the frontend I utilized [AJ](https://twitter.com/ajlkn)'s HTML5 templates for a cleaner presentation and responsiveness. The npm packages utilized were Express and Nodemon just to keep it efficient instead of restarting the server for changes. The content that the api serves up is saved in the server.js file.


## Lessons Learned:

This was the third or fourth instance of making this project work. This iteration really hammered home to keep it simple and just deliver the product before adding complexity and that premature optimzation gets in the way everytime. 

I learned how to serve static files to a server so that my html page could recognize the css it was trying to link to. I gained a solid understanding of express syntax and how to use app.get, app.listen and app.use.

I've recently come back and built a database builder to more easily add new entries to this tool. I've also redone all of the entries so that they are fetched from a database using MongoDB which is much faster than reading through several lines in the server.js file.

![gif of website](public/images/gh-api.gif)