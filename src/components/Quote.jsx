const Quote = ({ text, author }) => {
  return (
    <div className={'quote-wrapper'} >
      <i>{text} - <h4>{author}</h4>  </i> 
    </div>
  );
};

export default Quote;
