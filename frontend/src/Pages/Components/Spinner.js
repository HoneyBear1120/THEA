



function Spinner(props) {
  return (
    
    <div className={`spinner-border  ${props.color}`} role="status" style={{margin:''}}>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
