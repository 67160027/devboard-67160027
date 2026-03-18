import { useState } from "react";
import Navbar from "./componets/Navbar";
import UserList from "./componets/UserList";
import AddPostForm from "./componets/AddPostForm";
import PostList from "./componets/PostList";

function App() {
  const [favorites, setFavorites] = useState([]);

  function handleToggleFavorite(postId) {
    setFavorites((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  }

  return (
    <div>
      <Navbar favoritesCount={favorites.length} />

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        {/* ซ้าย */}
        <div>
          <AddPostForm onAddPost={() => {}} />
          <PostList
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>

        {/* ขวา */}
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;