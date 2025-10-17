const BlogData = require("../models/blog.model")

exports.homepage = async (req,res)=>{
    const blog = await BlogData.find({}).populate('author')
    return res.render('index', {blog})
}

exports.addBlogpage = (req,res)=>{
    return res.render('./pages/addBlog')
}

exports.editBlogpage = async (req,res)=>{
    return res.render('./pages/editBlog')
}

exports.BlogListpage = async (req,res)=>{
    const blog = await BlogData.find({}).populate('author')
    return res.render('./pages/tables', {blog})
}

exports.authLoginpage = (req,res)=>{
    return res.render('./pages/authentication-login')
}

exports.authRegisterpage = (req,res)=>{
    return res.render('./pages/authentication-register')
}