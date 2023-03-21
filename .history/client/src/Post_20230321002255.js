export default function post({title, summary, cover, content}){
    return(
        <div className="post">
        <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1432923096.jpg?w=1390&crop=1"></img>
        </div>     
        <div className="texts">
        <h2>TechCrunch+ roundup: 7 VCs who are taking pitches, AI best practices, zero-based budgeting</h2>
        <p className="info">
          <a className="author">Mandeep Kaur</a>
          <time>2023-03-19 3:30</time>
        </p>
        <p className="summary">It’s too early to determine whether SVB’s downfall heralds a new era for venture capital, but based on anecdotal evidence, </p>
        </div>
      </div>
    )
}