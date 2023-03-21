export default function post({title, summary, cover, content}){
    return(
        <div className="post">
        <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1432923096.jpg?w=1390&crop=1"></img>
        </div>     
        <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Mandeep Kaur</a>
          <time>2023-03-19 3:30</time>
        </p>
        <p className="summary">{summary}</p>
        </div>
      </div>
    )
}