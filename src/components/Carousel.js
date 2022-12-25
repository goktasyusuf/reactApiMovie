

const Carousel = (props) => {
  return (
    <div className="new_index">
        <div className="d-flex p-5" style={{flexDirection:'column'}}>
            <h1>Welcome</h1>
            <h4>Millions of movies, TV shows and people to discover. Discover now.</h4>
            <br />
            <input onChange={props.searchMovie} type="text" className="p-2" style={{borderRadius:'30px'}} placeholder="Search Movie Or Series ..." />
        </div>
    </div>
  );
};

export default Carousel;
