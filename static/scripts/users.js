const axios = require('axios');
main()
// const options = {
//     name: 'axios_test',
//     login: 'axios_login',
//     email: 'axios_email@gmail.com'
//   }
// postUser(options)


// main()
// deleteByIdUser(5)
// main();

function main() {

axios.get('http://localhost:8080/api/users/findAll').then(resp => {

    console.log(resp.data);

    // resp.data.forEach(element => {
    //     console.log(element.name); 
    // });

});
}

function postUser(options) {
      axios.post('http://localhost:8080/api/users/save',options)
        .then(response => {
          console.log(response.status);
        });
}


function deleteByIdUser(id) {
    axios.delete(`http://localhost:8080/api/users/delete/${id}`)
    .then(() => console.log("deleted"));
  }
