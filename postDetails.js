

module.exports = (post) => `<!DOCTYPE html>
<html>
<head>
  <title>${post.name}</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div>
        <div>
            <p class='charTitle'>
                <span>${post.id}. </span> ${post.name}   aka "${post.aka}"
            </p>
            <ul>
                <li> Blood status: ${post.blood}</li>
                <li> House: ${post.house}</li>
                <li> Wand: ${post.wand}</li>
                <li> Patronus: ${post.patronus}</li>
            </ul>
        </div>
    </div>
    <div>
    <a href='/'>Homepage</a>
    </div>
</body>
</html>`
