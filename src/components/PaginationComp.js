import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class PaginationComp extends Component {
// we used React-Paginate to make easier we did the calls for api fetching data in app.js so here we only get data from store and use it
 state = {
   perPage: 9,
   page: 0,
   pages: 0,
 };
// we made 2 pagination comp one for each category when it's pressed and it's this one but the another is for when we call for all pics 
 componentDidMount = () => {
      const {perPage} = this.state;
      this.setState({
        pages: Math.ceil(30 / perPage),
      });
  }

 handlePageClick = (event) => {
   let page = event.selected;
   this.setState({page})
 }

 render() {
   const {page, perPage, pages} = this.state;
   let {id, list} = this.props
  
   let weathers = list.filter(item => item.id === id).map(x=> ((x.includes).slice(page * perPage, (page + 1) * perPage)).map(thiy=> {
    return (
     <div className="image-container" key={(thiy.categoryNumber) + thiy.id + thiy.title } >
       <Link to={{
  pathname: `/categories/${thiy.categoryNumber}/${thiy.id}`,
  state:{
    categoryNumber: thiy.categoryNumber,
    id: thiy.id,
    categoryName: x.name,
    title: thiy.title,
    imageUrl: `${thiy.imageUrl}`,
  }}}>
     <div className="photo--container">
     <div className="bg-img" >
     <img src={`${thiy.imageUrl}`} alt="Medium"/>
     </div>
     <h3>{thiy.title}</h3>
     </div>
     </Link> 
     </div>
    )
  })) || '';
  return (
     <>
       <div className="photos--container">
                <div className="row">
                  {weathers}
                  </div>
                  <ReactPaginate
         previousLabel={'Pervious'}
         nextLabel={'Next'}
         pageCount={pages}
         onPageChange={this.handlePageClick}
         containerClassName={'pagination'}
         activeClassName={'active'}
       />
                  </div>
     </>
   );
 }
}

function mapStateToProps (store) {
  return {
    list: Object.values(store.pics)
  }
}


export default connect(mapStateToProps,)(PaginationComp);

