import userModel from '../models/user';

export function createUser(user, error) {
    //find if email is already exist
    userModel.find({email: user.email}).count(function (err, count, res) {
        // if err, handle error
        console.log("Create User start!!!");
        if (err) {
            console.log("Error when FIND user.email");
            error.signup = "Error when FIND user.email: " + err;
            res.status(400).json(error);

        }
        // if this email haven't been registered, then create user
        console.log("Count: ", count);
        if (count === 0 ) {
            console.log("Count === 0!!!");
            userModel.create(user,function(err,data){
                if (err) {
                    console.log("Error when CREATE user");
                    error.signup = "Error when CREATE user: " + err;
                    res.status(400).json(error);
                } else {
                    // send LoginToken to Client
                    console.log("User created!!!");

                    console.log("TOKEN");
                    const token = jwt.sign({
                        email: user.email
                    }, 'secretkeyforjsonwebtoken');
                    res.json({token});
                }
            });
        }

    });

}