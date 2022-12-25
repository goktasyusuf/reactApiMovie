const Trends = ({trends})=> {
    let total = 0 ;
  for(let i =0;i<trends.length;i++) {
    total += trends[i].popularity;
  }
    return(
        <div>
        <h2 className="pricing_title">Trends</h2>
        <div className="row">
           {trends.map((trend,index)=>{
            return (
                <div className="col-lg-2 col-md-4" key={index}>
                    <div className="card">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${trend.poster_path}`} alt="" />
                        <span
                  style={{ position: "absolute", bottom: "-20px", left: "5px" }}
                  className="dot"
                >
                  %{Math.ceil((trend.popularity * 100) / total)}
                </span>
                    </div>
                    <br />
              <h6 className="text-center mt-1">{trend.title ? trend.title  : trend.name}</h6>
              <p className="text-center mt-1">{trend.first_air_date ? trend.first_air_date : trend.release_date}</p>
                    
                </div>
            )
           })}
        </div>
        </div>
        
    )
}
export default Trends;