import React, { Component, Fragment } from "react";
import PaginationComp from './PaginationComp'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


class SearchComp extends Component {
    state={
        query: '',
        showingResults: '',
        displayStatus1: 'gotBack',
        displayStatus2: 'gotDisappear'
      }
  

    searchValChange= (e) => {
        this.setState({
          query: e.target.value
        })
      }
      searchForPics = (e) => {
        e.preventDefault()
        const shit = Object.assign({}, (((Object.values(this.props.list)).map(x=> x.filter(z=> ((z.title).toLowerCase()).includes(this.state.query))).filter(a=> a.length >= 1))))
        if ((this.state.query).length > 0) {                
          this.setState({ showingResults: shit,
            displayStatus1: 'gotDisappear',
            displayStatus2: 'gotBack',
          });

                }
               else {
              this.setState({ showingResults: '', 
              displayStatus1: 'gotBack',
              displayStatus2: 'gotDisappear',
            });
            }}

            ResetBaby = (e) => {
              e.preventDefault()
              this.setState({
                query: '',
                displayStatus1: 'gotBack',
                displayStatus2: 'gotDisappear',
              })
            }
    render() {
        const {showingResults} = this.state;
        const {jon} = this.props
const shity = Object.values(showingResults).map(y=> { return ( <div className="image-container" key={((y[0]).categoryNumber) + (y[0]).id + (y[0]).title } >
                        <Link to={{
                  pathname: `/categories/${(y[0]).categoryNumber}/${(y[0]).id}`,
                  state:{
                    categoryNumber: (y[0]).categoryNumber,
                    id: (y[0]).id,
                    categoryName: ((jon)[(y[0]).categoryNumber]).name,
                    title: (y[0]).title,
                    imageUrl: `${(y[0]).imageUrl}`,
                  }}}>
                      <div className="photo--container">
                      <div className="bg-img" >
                      <img src={`${(y[0]).imageUrl}`} alt="Medium"/>
                      </div>
                      <h3>{(y[0]).title}</h3>
                      </div>
                      </Link> 
                      </div>
                    )})
                    console.log(shity)
        return (
            <Fragment>
                    <div className="photos--wrapper ">
                    <div className="filters--container">
                    <form className="filters--radio" action="/en/photos">
                    <input type="hidden" name="category" value="4"/>
                    <div className="filters--actions">
                    <button className="filters--actions--clear" onClick={this.ResetBaby}>Clear</button>
                    <button className="filters--actions--apply" onClick={this.searchForPics}>
                    Apply
                    </button>
                    </div>
                    <div className="vendors--search--inputs posts">

                    <input type="text" placeholder="Search" name="name" value={this.state.query} onChange={this.searchValChange}/>
                    <input type="hidden" name="category" value="4"/>
                    <i className="fa fa-circle-thin" aria-hidden="true"></i>
                    </div>
                    </form>
                    </div>
                <div className={`photos--container--Main ${this.state.displayStatus1}`}>
                <PaginationComp id={this.props.id}/>
                </div>
                <div className={`photos--container--Main ${this.state.displayStatus2}`}>{shity}</div>
                </div>
            </Fragment>
          );
        
    }}


function mapStateToProps (store) {
  return {
    list: (Object.values(store.pics)).map(x=> x.includes),
    jon: Object.values(store.categories)
  }
}


export default connect(mapStateToProps,)(SearchComp);
