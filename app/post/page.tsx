import CardList from "../components/Post/Cardlist";
import ViewUserButton from "../components/Post/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(base_url, {
    cache: "no-store"
  });
  const posts: Post[] = await response.json();
  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">Post</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        );
      })}
    </>
  );
};
export default Post;
