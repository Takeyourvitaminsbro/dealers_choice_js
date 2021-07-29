

module.exports = (posts) => `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Harry Potter Characters</title>
    <link rel="stylesheet" href="/style.css" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        ${posts.map(post => `
        <div>
          <p>
            <span>${post.id}. </span>
            <a href="/posts/${post.id}">${post.name}</a>
            
          </p>
          <small class>
            "${post.aka}"
          </small>
        </div>`).join('')}
    </ul>
</body>
</html>`
