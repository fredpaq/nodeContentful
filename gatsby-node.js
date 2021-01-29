/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { kMaxLength } = require('buffer')
const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const PostsTemplate = path.resolve('src/helpers/posts/postsTemplate.js')
    const SecondTemplate = path.resolve('src/helpers/second/secondTemplate.js')

    
const posts = await graphql(`
  {
    posts: allContentfulPosts {
      nodes {
        id
        title    
        reponse
        probleme   
      }
    }
  }
  `).then((resultPosts) => {
      if (resultPosts.errors) {
        Promise.reject(resultPosts.errors)
      }
    resultPosts.data.posts.nodes.forEach((k, id) => {
      createPage ({
        path: `/posts/${id+1}`,
        component: PostsTemplate,
        context: {
          title: k.title,
          id:id,
        }
      })
    })
  })

  const second = await graphql(`
  {
    second: allContentfulSecond {
      nodes {
        id
        title       
      }
    }
  }
  `).then((resultSecond) => {
      if (resultSecond.errors) {
        Promise.reject(resultSecond.errors)
      }
    resultSecond.data.second.nodes.forEach((k, id) => {
      createPage ({
        path: `/second/${id+1}`,
        component: SecondTemplate,
        context: {
          title: k.title,
          id:id,
        }
      })
    })
  })

    return Promise.all([ posts, second])
}