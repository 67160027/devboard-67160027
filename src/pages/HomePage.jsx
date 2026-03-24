import PostList from "C:/Users/Nathakorn Inyod/devboard/src/componets/PostList"
import AddPostForm from  "C:/Users/Nathakorn Inyod/devboard/src/componets/AddPostForm"

function HomePage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={() => {}} />
      <PostList />
    </div>
  );
}

export default HomePage;