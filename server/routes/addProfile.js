import express from 'express';
import multer from 'multer';
import formidable from 'formidable'
import profile from '../models/profile';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import User from './../models/user.js';
import mongoose from 'mongoose';
let router = express.Router();
let Schema = mongoose.Schema;
var upload = multer({ dest: 'uploads/' });

__dirname = process.cwd();

router.post('/',function(req,res,next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';    //设置编辑
    form.uploadDir = __dirname+'/public/img/';  //设置上传目录
    form.keepExtensions = true;  //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function(err, fields, files) {
        if (err) {
            res.locals.error = err;
            console.log(err);
            //console.log('has error -01');
            return;
        }
        var extName = '';  //后缀名
        switch (files.my_file.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }



        if(extName.length == 0){
            res.locals.error = 'only png and jpg';
            res.render('index', { title: TITLE });
            return;
        }
        var avatarName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;

        //console.log(newPath);
        fs.rename(files.my_file.path, newPath);

        // store an img in binary in mongo
        const user = {
            email: fields.email,
            accountType: fields.accountType
        }
        console.log();

        const proImg = {data: fs.readFileSync(newPath), contentType: files.my_file.type};



        User.findOne(user, function(err, data){
            let errors = {};
            //console.log(data);
            if(err){
                console.log(err);
            }else if(!data){
                console.log(data);
                console.log("Account does not exist.");
                errors.login = "Account does not exist.";
                res.status(400).json(errors);
            }else{
                User.findByIdAndUpdate(data._id, { $set: {proImg: proImg} }, {new: true}, function (err, data) {
                    if (err) {
                        console.log("Adding UserNAme update error");
                        errors.login = "Adding UserNAme update error";
                        res.status(400).json(errors);
                    } else {

                        const token = jwt.sign({
                            email: data.email,
                            userName: data.userName,
                            accountType: data.accountType,
                            id: data._id,
                            proImg: proImg
                        }, 'secretkeyforjsonwebtoken');
                        //console.log("add profile " + data);
                        res.json({token});
                    }
                });
            }

        });

        fs.unlink(newPath, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("temporary file deleted！");
        });

     });

});




export default router;