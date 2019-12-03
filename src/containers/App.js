import React from 'react';
import '../styles/App.css';
import ItemLists  from '../components/ItemLists';
import Cart from '../components/Cart';
import data from '../data';
import 'react-dialog/css/index.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: this.sortArray(data.lessons, 'name'),
      actualProducts: data.lessons,
      addedItems:[]
    }
  }

  sortArray(array,key){
    return array.sort(function(a, b)
    {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  addItem = () => {

  }

  removeItem = () => {
    
  }

  searchProduct = (event) => {
    const prods = this.state.actualProducts.filter(function(item) {
       if (item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())){
         return true;
       }
       if (item.author.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())){
         return true;
       }
       if (item.duration.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())){
         return true;
       }
       if (item.publishDate.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())){
         return true;
       }
       
       return false;
   });
 
   this.setState({products:prods});
 
 }
 

  sortFunction = (event) => {
    this.setState({products:this.sort_by_key(event.target.value)});
  }

  sort_by_key(key)
  {
  const array = this.state.actualProducts;
  return array.sort(function(a, b)
  {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  }


  render() {
   
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <h1>Techno Adda</h1>
        </div>
    </div><br /><br />
    <div className="row">
    &nbsp;&nbsp;<h4>Courses</h4>
    </div>
    <div className='item-container'>
    <div className="col-md-8">
    <div className="form-group">
      <input type="text" placeholder='Search Course...' onChange={(e)=>{this.searchProduct(e) }} className="form-control" id="searchProduct" />
    </div>
    </div>
    </div>
    <div className='row'>
      <div className="col-md-12">
      Sort Course By: &nbsp;&nbsp;
      <select onChange={(e)=>{this.sortFunction(e)}}>
        <option value="name">Course Name</option>
        <option value="publishDate">Date</option>
        <option value="duration">Duration</option>
      </select>
      </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <ItemLists products={this.state.products} actualProducts={this.state.actualProducts} />
        </div>
        <div className="col-md-4">
            <Cart items={this.state.addedItems} />
        </div>
    </div>

    <footer>
        <small>
            made by Niranjan
        </small>
    </footer>
</div>
  );
}
}

export default App;
