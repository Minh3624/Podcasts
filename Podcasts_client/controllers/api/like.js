const Like = require('../../models/like');
// Create
exports.create = async (req, res, next) => {
    let like = {
        customers_id: req.session.userId,
        post_id: req.body.post_id,
        like: 'active',
    };
    if (!like.customers_id) {
        return res.status(401).json({ error: 'User is not logged in.' });   
     
    } else {
        let result = await Like.createLike(like);
        return res.status(200).json({ 
            message: 'Like successfully',
            data: result 
        });
    }
};


// Update
exports.update = async (req, res, next) => {
    try {
        const id = req.params.id;
        let like = {
            customers_id: req.session.userId,
            post_id: req.body.post_id,
            like: 'active',
        };
        const result = await Like.updatelike(like, id);
        console.log(result);
        res.status(200).json({
            message: 'Post updated successfully',
            data: result
        });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
// Detail 
exports.edit = async (req, res, next) => {
    try {
        var like = await Like.getEdit(req.params.id);
        res.status(200).json({
            data: like
        });
    } catch (error) {
        console.error('Error updating users:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
// getIdPost
exports.getPost = async (req, res, next) => {
    try {
        var post = await Post.getIdPost(req.params.id);
        res.status(200).json({
            data: post
        });
    } catch (error) {
        console.error('Error updating users:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
// get All Post
exports.getAllPost = async (req, res, next) => {
    try {
        var post = await Post.getAllPost();
        res.status(200).json({
            data: post
        });
    } catch (error) {
        console.error('Error updating users:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

// Delete 
exports.delete = async (req, res, next) => {
    try {
        var post = await Post.deletePost(req.params.id);
        if (!post) {
            res.status(404).json({
                error: 'Product not found'
            });
            return;
        }
        res.status(200).json({
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting Product:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
