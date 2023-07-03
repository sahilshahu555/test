
const Pagination = ({ totalPages, page, setPage }) => {
  let arr = [];
  for (let i = 0; i < totalPages; i++) {
    arr[i] = i+1;    
  }
  return (
    <div className="pagination_wrapper">
    {
      arr.map((btn)=>{
        return(
          <button 
            className="btns" 
            disabled={page===btn?true:false}
            style={{backgroundColor: page===btn ? "red" : "blue"}}
            onClick={() => setPage(btn)}> {btn}
          </button>
        )
      })
    }
    </div>
  );
};

export default Pagination;
