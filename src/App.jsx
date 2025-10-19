import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        ></PostsList>
      </main>
    </>
  );
}

export default App;
