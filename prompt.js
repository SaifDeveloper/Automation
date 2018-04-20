var prompt = require('prompt');

//
// Start the prompt
//

var user;
let user1;

prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['what is your username ?', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    user =result.username;
    console.log('  email: ' + result.email);
});

console.log("USER:",user);
console.log("USER1:",user1);