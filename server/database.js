import mongoose from 'mongoose';
import tunnel from 'tunnel-ssh';

<<<<<<< HEAD

// var config = {
//     username:"ubuntu",
//     host:"115.146.90.170",
//     agent : process.env.SSH_AUTH_SOCK,
//     privateKey:require('fs').readFileSync('/Users/kenty/.ssh/gkb'),
//
//     port:22,
//     dstPort:27017,
// };
//
// var server = tunnel(config, function (error, server) {
//     if(error){
//         console.log("SSH connection error: " + error);
//     }
//     mongoose.connect('mongodb://localhost/mydb', function(err) {
//         if (err) {
//             console.log(err);
//             console.log("database not connected");
//         } else {
//             console.log("database connected to great");
//         }
//     });
// });
=======
var config = {
    username:"ubuntu",
    host:"115.146.90.170",
    agent : process.env.SSH_AUTH_SOCK,
    privateKey:require('fs').readFileSync('/Users/zhangruoq/pb'),
>>>>>>> 70fe5f2ff684c5dc24e1dbd51df000874d2aa870



<<<<<<< HEAD
mongoose.connect('mongodb://localhost/mydb', function(err) {
    if (err) {
        console.log(err);
        console.log("database not conencted");
    } else {
        console.log("database connected to great");
=======
var server = tunnel(config, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
>>>>>>> 70fe5f2ff684c5dc24e1dbd51df000874d2aa870
    }
});
<<<<<<< HEAD
=======



// mongoose.connect('mongodb://localhost/mydb', function(err) {
//     if (err) {
//         console.log(err);
//         console.log("database not conencted");
//     } else {
//         console.log("database connected to great");
//     }
// });

>>>>>>> 70fe5f2ff684c5dc24e1dbd51df000874d2aa870
