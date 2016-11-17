var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyPress={ function(event) {
      // console.log('on submit triggered', event.key); 
      if (event.key === 'Enter') {
        $('.form-control').val('');
      }
    }}
      onChange={function() { 
        props.submitSearch($('.form-control').val()); 
      }} />
    <button className="btn hidden-sm-down" onClick={ 
      function() { 
        props.submitSearch($('.form-control').val()); 
        $('.form-control').val(''); 
      }} >
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
