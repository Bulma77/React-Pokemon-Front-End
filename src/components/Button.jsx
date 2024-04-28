const Button = ({ setLoadMore }) => {
  return (
    <div className="btn">
      {setLoadMore && <button className="load-more">Load More</button>}
    </div>
  );
};
export default Button;
