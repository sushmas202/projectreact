import React,{useState,useEffect} from "react";
  function Postlist()
  {
    const [posts,setPosts] = useState([]);

    useEffect(() =>
{
  const fetchPosts =async() =>
    {
        try{
            const response =await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setPosts(data);        
        }
            catch (error)
            {
              console.error('Error fetching data:',error);
            }
    };

    fetchPosts();
}, []);

return(
    <div>
        <h1>Posts</h1>
        <ul>
            {posts.map((post) =>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
);
  }
  export default Postlist;