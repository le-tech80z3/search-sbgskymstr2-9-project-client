import React from 'react';
import { withRouter} from 'react-router-dom'
// import SearchBar from '../shipxD'
import { read } from '../shipxD';
import './index.css';



export default class NetList extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        
      dataValueId: this.props.match.params.id,
      dataValuetwo: 'shipxDcmx',
      dataValuethree: 'example',
      dataValue: 'travel',
      q: ''
    }
    
    this.handleChange = this.handleChange
  }



  // function AddToken Component AddModel() => {
    
  //   AddReadModel {

  //   if [(this.state.data1 !== this.state.q)] return false;
  // }
  
  
  export default class NewSearchModel {
    getInputQlidt(searchList, callback){
      function callback(err, data) {
        fetch(`${read}/shipxD/${this.props.match.params.id}`)
        .then(response => response.json())
        .then({currentSearch: searchValue })
        try {
          this.setInitialState({
            userSearch: {
              dataValuetwo: response.nameValue,
              dataValuethree: favoriteValue,
              q: response.searchValue
            },
            tableList: null
          }, () => {this.setState({data: data.storeSearch})
          .catch(err => console.log(err)); 
        });
        if (this.state.data1 !== this.state.q) { 
          return false;
          
          
        }
      }
    }  
  }
    
  handleSubmit = (event) => {
    event.preventDefault();
    NewSearchModel.update(this.state)
      .then(data => {
        this.props.history.push('/shipxD')
      })
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }









  render() {
    return (
      <div className="createForm">
        <form onSubmit={this.handleSubmit}>
          <div className="search-bar">
            <label for ="search">Search:</label>
            <input
              onChange={this.currentSearch}
              type="text"
              id="name"
              name="name"
              value={this.state.q}
              />
          </div>

          <div className="form-group">
            <label for ="Results">Video Results:</label>
            <input 
              onChange={this.handleChange} 
              type="q" 
              refs="" 
              name="password" 
              value="this.state.{"Token"}
            />   
          </div>
            <button type="submit">Go</button>
        </form>
      </div>

    );
  }   
}
