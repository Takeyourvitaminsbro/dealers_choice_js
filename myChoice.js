const express = require('express');
const morgan = require('morgan');
const characters = require('./charactersHome');
const postDetails = require('./postDetails');
const postBank = require('./postBank');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    const postsHome = postBank.list();
    res.send(characters(postsHome));
});

app.get( '/posts/:id', (req, res, next) => {
    const id = req.params.id;
    const posts = postBank.list();
    if(!posts.find(id)) {
      const postError = new Error ("Post does not exist");
      next(postError);
    }
    else {
      const post = postBank.find(id);
      res.send(postDetails(post));
    }
  });

  //errors
  // app.use((err, req, res, next) => {
  //     console.error(err.stack);
  //     res.status(500).send('Something broke!');
  // })


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});