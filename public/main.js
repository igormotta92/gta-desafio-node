
fetch('http://localhost:3333')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })