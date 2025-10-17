const BlogData = require("../models/blog.model")

exports.createBlog = async (req,res)=>{

    try {
        
        await BlogData.create(req.body)
        console.log(req.body);
        return res.redirect(req.get('Referrer') || '/');

    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }

}

exports.deleteBlog = async (req,res)=>{

    try{

        const {id} = req.params
        await BlogData.findByIdAndDelete(id)
        return res.redirect(req.get('Referrer') || '/');

    }catch ( error){

        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }

}

exports.showEditBlog = async (req,res)=>{

    try{

        const {id} = req.params
        const blog = await BlogData.findById(id)
        return res.render('./pages/editBlog', {blog});

    }catch ( error){

        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }

}

exports.updateBlog = async (req,res)=>{

    try {
        
        const {id} = req.params
        const updatedBlog = req.body
        await BlogData.findByIdAndUpdate(id, updatedBlog, {new: true})
        return res.redirect('/tables')

    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }

}