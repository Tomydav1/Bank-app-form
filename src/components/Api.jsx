import React, { useEffect, useState } from 'react'

function Api() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data)
      })

      .catch((err) => console.log(err.message))
  },[])

  return (
    <div>
      {posts.map((posts) => {
        return <p key={posts.id}>{posts.title}</p>
      })}
    </div>
  )
}

export default Api