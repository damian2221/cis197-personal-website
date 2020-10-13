import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post'

const PostsList = ({ posts }) => (
  <div className="row">
    { posts.map(post => (
      <div key={post.id} className="col-4">
        <Post {...post} />
      </div>
    )) }
  </div>
)

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

export default connect(mapStateToProps, null)(PostsList)
