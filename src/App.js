import './App.css';
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import Author from './components/Author/Author';
import Post from './components/Post/Post';
import About from './components/About/About';
import posts from "./data/posts.json"
function App() {
  return (
    <div className="App">
      <Header/>
      <Image/>
      <div className='container'>
      <Author/>
      <About/>
      </div>
    <div className='posts'>134 Posts</div>
      {/* <Post
        title="A Chaning World Order"
        content="The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including..."
        tag="musing"
        author="Shubham Rathi"
        date="November 11"
        minute="2"
        views="1.4K"
      /> */}
     {posts.map((post, index) => (
        <Post
          key={index} // Ensure each Post has a unique key
          title={post.title}
          content={post.content}
          tag={post.tag}
          author={post.author}
          date={post.date}
          minute={post.minute}
          views={post.views}
        />
      ))}
    </div>
  );
}

export default App;
