
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1432923096.jpg?w=1390&crop=1"></img>
        </div>     
        <div className="text">
        <h2>TechCrunch+ roundup: 7 VCs who are taking pitches, AI best practices, zero-based budgeting</h2>
        <p className="info">
          <a className="author">Mandeep Kaur</a>
          <time>2023-03-19 3:30</time>
        </p>
        <p>It’s too early to determine whether SVB’s downfall heralds a new era for venture capital, but based on anecdotal evidence, off-the-record discussions and chats with co-workers, it seems like we’re back to business as usual as far as pre-revenue startup fundraising is concerned.</p>
        </div>
      </div>

      <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1432923096.jpg?w=1390&crop=1"></img>
        </div>
        <div className="text">
        <h2>TechCrunch+ roundup: 7 VCs who are taking pitches, AI best practices, zero-based budgeting</h2>
        <p>It’s too early to determine whether SVB’s downfall heralds a new era for venture capital, but based on anecdotal evidence, off-the-record discussions and chats with co-workers, it seems like we’re back to business as usual as far as pre-revenue startup fundraising is concerned.</p>
        </div>
      </div>
      <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1432923096.jpg?w=1390&crop=1"></img>
        </div>
        <div className="text">
        <h2>TechCrunch+ roundup: 7 VCs who are taking pitches, AI best practices, zero-based budgeting</h2>
        <p>It’s too early to determine whether SVB’s downfall heralds a new era for venture capital, but based on anecdotal evidence, off-the-record discussions and chats with co-workers, it seems like we’re back to business as usual as far as pre-revenue startup fundraising is concerned.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
