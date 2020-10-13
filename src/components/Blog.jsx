import React from 'react'
import PostsList from './PostsList'
import AddPostModal from './AddPostModal'

const Blog = () => (
  <div>
    <h1>Blog Posts</h1>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addPostModal">Add Post</button>
    <PostsList />
    <AddPostModal />
  </div>
)
export default Blog
