//Routes/Back-end Api Routes for user
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
   app.get(`/api/user`, async(req,res) => {
       let users = await Users.find();
       return res.status(200).send(users);
   });

   app.post(`/api/user`, async(req,res) => {
       let user = await Users.create(req,body);
       return res.status(201).send({
           error:false,
           user
       })
   })

   app.put(`/api/user/:id`, async (req, res) => {
       const {id} = req.params;
       let user  = await Users.findByIdAndUpdate(id, req.body);
       return res.status(202).send({
           error: false,
           user
       })
   });

   app.delete(`/api/user/:id`, async(req,res) => {
       const {id} = req.params;
       let user = await Users.findByIdAndDelete(id);
       return res.status(202).send({
           error:false,
           user
       })
   })
}

