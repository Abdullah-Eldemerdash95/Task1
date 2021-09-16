import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from "./Footer";
import BottomSec from '../components/BottomSec';
import Header from '../components/Header.js';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class AllCategories extends Component {
state= {
  count: 0,
  displayStatus: 'none',
  leftArrowProp: '',
  rightArrowProp: '',
  query: '',
  displayStatus2: "gotDisappear"
}  

increaseFn = (e) => {
  e.preventDefault()
  this.setState({
    count: this.state.count + 122
  })
  if (this.state.count >= 244) {
    this.setState({
      rightArrowProp: 'disabled'
    })} else {
      this.setState({
        rightArrowProp: ' '
      })
    }
    if (this.state.count < -243) {
        this.setState({
          leftArrowProp: ' '
        })
      }
}
decreaseFn = (e) => {
  e.preventDefault()
  this.setState({
    count: this.state.count - 122
  })
  if (this.state.count <= -244) {
    this.setState({
      leftArrowProp: 'disabled'
    })} else {
      this.setState({
        leftArrowProp: ' '
      })
    }
    if (this.state.count > 243) {
        this.setState({
          rightArrowProp: ' '
        })
      }
  }


showCategories = () => {
  this.setState({
    displayStatus: (this.state.displayStatus === 'block') ? 'none' : 'block'
  })
}

changeQuery = (e) => {
  if ((e.target.value).length > 0) { this.setState({
    query: e.target.value,
    displayStatus2: 'gotBack'
  })} else {
    this.setState({
      query: "",
      displayStatus2: "gotDisappear"
    })
  }
}

    render() {
      const {list} = this.props
      const xiles = (Object.values(Object.assign({},(list).filter(x=> ((x.name).toLowerCase()).includes(this.state.query)))))
      const categoriesSearchResults = xiles.map(
        catego => {
          return (
            <div className="catego" key={(catego.id) + ( catego.name)}>
                      <Link to={{
            pathname: `/categories/${catego.id}`,
            state:{
              id: catego.id,
              name: catego.name,
              imageUrl: `${catego.avatar}`,
            }}}>
                      <div className="vendor--container" >
                      <div className="bg-img" >
                      <img src= {`${catego.avatar}`} alt="Medium"/>
                      </div>
                      <h3>{catego.name}</h3>
                      </div>
                      </Link>
                      </div>
          )
        }
      )
      const zizi = list.map(item => {return (
            <div className='item' key={item.id}>
              <Link to={{
            pathname: `/categories/${item.id}`,
            state:{
              id: item.id,
              name: item.name,
              imageUrl: `${item.avatar}`,
            }}}>
              <div className="vendors--search--category--container" >
                  <div className="vendors--search--category">
                    <img className="img-responsive" src={item.avatar} alt=""/>
                    <span>{item.name}</span>
                  </div>
                </div>
            </Link>
            </div>)});

        return (
            <Fragment>
<Header/>
          <div className="vendors--search">
            <div className="vendors--search--inputs">
              <div className="vendors--search--dropdown">
              <h5>Find categories here</h5>
              <div onClick={this.showCategories}></div>{/*for arrow of dropdown*/}
              </div>
                <form className="vendors--search--input">
                <input type="text" placeholder="Search" name="name" value={this.state.query} onChange={this.changeQuery} onKeyDownCapture={this.changeQuery}/>
                </form>
            </div>
            <div className="vendors--search--categories--container" style={{display: this.state.displayStatus}}>
            <button className={`vendors--search--categories--previous ${this.state.leftArrowProp}`} onClick={this.decreaseFn}><FontAwesomeIcon icon={faCaretLeft} /></button>
                <div className="vendors--search--categories slick-initialized slick-slider">
                  <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false">
                  <div className='row ' style={{left: `${this.state.count}px`}}>
                    {zizi}
                  </div>
                 </div>
                </div>
              <button className={`vendors--search--categories--next  ${this.state.rightArrowProp}`}  onClick={this.increaseFn}><FontAwesomeIcon icon={faCaretRight} /></button>
            </div>
          </div>
           <div className={`vendors--container container ${this.state.displayStatus2}`}>
                    <div className="row">
                      {categoriesSearchResults}
                    </div>
              </div>
<BottomSec></BottomSec>
<Footer></Footer>

          </Fragment>
          );
        
    }}


function mapStateToProps (store) {
  return {
    list: Object.values(store.categories)
  }
}


export default connect(mapStateToProps,)(AllCategories);

