import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Hello from '../components/Hello.js'

class Header extends Component { // this section built manually cause u prohibtied bootstrap 
    state={
        shenpo:{ // these arrays so i can control to show drop down menu of each li in header
            a: ['360 Planner','hide'],b: ['Her','hide'],c: ['Him','hide']
            ,d: ['The Wedding', 'hide'],e:['Vendors','hide'], f: ['Gallery','hide']
            ,g: ['Ideas & More', 'hide']
        },
        top: '',
        width: '',
        postion: '',
        icon: 'hide'
      }
      componentDidMount () { // this to control when Header become sticky through certain number of scroll
                              // and showing icon box of Header in mobile depending on resize
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }
    
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
    
      handleChange=(e)=> {
        this.setState(prevState => ({ // this the toggle function to show and hide  dropdown menus    
          shenpo:{
              ...prevState.shenpo,
              [e.target.id]: ((prevState.shenpo[e.target.id])[1] === 'hide') ? ((prevState.shenpo[e.target.id] = [((prevState.shenpo[e.target.id])[0]),'show'])) : ((prevState.shenpo[e.target.id] =  [((prevState.shenpo[e.target.id])[0]),'hide']))
            }
        }))
          }

      handleRest=(e)=> {
        this.setState(prevState => ({ // this the toggle function to show and hide  dropdown menus    
          shenpo:{
              ...prevState.shenpo,
              [e.target.id]: ((prevState.shenpo[e.target.id])[1] === 'show') ? ((prevState.shenpo[e.target.id] =  [((prevState.shenpo[e.target.id])[0]),'hide'])) : ((prevState.shenpo[e.target.id] =  [((prevState.shenpo[e.target.id])[0]),'show']))
          }
        }))
          }
 handleScroll = () => {
    window.addEventListener("scroll", 
    ()=> {
      this.setState({
        top: window.scrollY,
        width: window.innerWidth,
        postion: (((this.state.top) < 120) || ((this.state.width) < 760) ) ? (" ") : ("sticky"),
        icon: (((this.state.width) > 760) ) ? ("hide") : ("show")
      })
    })  
}
handleResize = () => {
  window.addEventListener("resize", ()=> {
    this.setState({
      width: window.innerWidth,
      icon: (((this.state.width) < 760) ) ? ("show") : ("hide")
    })})
}

    render() { // here we have in gallery drop dow menu a single category and it's the first one so we get it's data 
                // to put inside the link so when choosed it can pass all needed data 
      const {list}=this.props
      const zile = (Object.values(Object.assign({},(list).filter(x=> x.id === 0))))
      const zileId = (zile.map(k=> k.id))[0]
      const zileName = zile.map(k=> k.name)
      const zileImageUrl = zile.map(k=> k.imageUrl)
        return (
            <Fragment>
            <div className="header--container" onLoad={this.handleScroll}>
            <div className={`header header--black ${this.state.postion}`}>
               <div className="header--user--control--sticky ">
        <a href="/en/users/sign_in">
        <FontAwesomeIcon icon={faUserPlus} />
        </a>
        
        <a href="/ar">العربية</a>
        </div>
        <div className="header--links header--links--left">
        <ul>
        <li className="header--link--toggle" id='a'  onMouseLeave={this.handleRest}>
        <a href="/" className= "header--link--toggle--anchor" id='a' value={this.state.shenpo.a}  onMouseOver={this.handleChange} >360 Planner</a>
        <div  className={`${this.state.shenpo.a[1]} header--link--dropdown `} >

        <a id={Object.keys(this.state.shenpo)[0]} href="/en/checklists">Check list</a>
        <a id={Object.keys(this.state.shenpo)[0]} href="/en/budgeter">Budgeter</a>
        <a id={Object.keys(this.state.shenpo)[0]} href="/en/registry">Registry list</a>
        <a id={Object.keys(this.state.shenpo)[0]} href="/en/guestlist">Guest list</a>
        <a id={Object.keys(this.state.shenpo)[0]} href="/en/build_your_website">Wedding Website</a>
        <a id={Object.keys(this.state.shenpo)[0]} href="/en/couple">Couple Website</a>
        <a id={Object.keys(this.state.shenpo)[0]} href="/en/360planner">More</a>
        
        </div>
        </li>
        <li className="header--link--toggle" id='b' onMouseLeave={this.handleRest}>
        <a href="/" className="header--link--toggle--anchor" id='b' value={this.state.shenpo.b}  onMouseOver={this.handleChange}>Her</a>
        <div  className={`${this.state.shenpo.b[1]} header--link--dropdown `}>
        <a id={Object.keys(this.state.shenpo)[1]} href="/en/services?category=17"> Designers</a>
        <a id={Object.keys(this.state.shenpo)[1]} href="/en/services?category=36">Bridal Boutique </a>
        <a id={Object.keys(this.state.shenpo)[1]} href="/en/dresses?category=1">Wedding Dresses</a>
        <a id={Object.keys(this.state.shenpo)[1]} href="/en/rings?category=3">Rings</a>
        <a id={Object.keys(this.state.shenpo)[1]} href="/en/services?category=12">Makeup Artists</a>
        <a id={Object.keys(this.state.shenpo)[1]} href="/en/categories?parent_menu=for_her">More</a>
        </div>
        </li>
        <li className="header--link--toggle" id='c' onMouseLeave={this.handleRest}>
        <a href="/" className="header--link--toggle--anchor" id='c' value={this.state.shenpo.c}  onMouseOver={this.handleChange} >Him</a>
        <div  className={`${this.state.shenpo.c[1]} header--link--dropdown `}>
       <a id={Object.keys(this.state.shenpo)[2]} href="/en/services?category=33">Suits</a>
       <a id={Object.keys(this.state.shenpo)[2]} href="/en/services?category=41">Health</a>
       <a id={Object.keys(this.state.shenpo)[2]} href="/en/services?category=10">Men's Grooming</a>
       <a id={Object.keys(this.state.shenpo)[2]} href="/en/services?category=14">Fitness</a>
       <a id={Object.keys(this.state.shenpo)[2]} href="/en/categories?parent_menu=for_him">More</a>
        </div>
        </li>
        <li className="header--link--toggle" id='d' onMouseLeave={this.handleRest}>
        <a href="/" className="header--link--toggle--anchor" id='d' value={this.state.shenpo.d}  onMouseOver={this.handleChange} >The Wedding</a>
        <div  className={`${this.state.shenpo.d[1]} header--link--dropdown `}>
        <a id={Object.keys(this.state.shenpo)[3]} href="/en/services?category=2">Venues</a>
        <a id={Object.keys(this.state.shenpo)[3]} href="/en/services?category=37">Outdoor Wedding Venues</a>
        <a id={Object.keys(this.state.shenpo)[3]} href="/en/services?category=6">Videographers</a>
        <a id={Object.keys(this.state.shenpo)[3]} href="/en/services?category=7">Photographers</a>
        <a id={Object.keys(this.state.shenpo)[3]} href="/en/services?category=8">DJs</a>
        <a id={Object.keys(this.state.shenpo)[3]} href="/en/categories?parent_menu=for_the_</option>wedding">More</a>
       
        </div>
        </li>
        </ul>
        </div>
        <div className=" header--logo ">
        <a href="/en/home">
        <img className="img-responsive" src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png" alt="Logo"/>
        </a>
        </div>
        <div className="header--links header--links--right">
        <ul>
        <li className="header--link--toggle" id='e' onMouseLeave={this.handleRest}>
        <a href="/" className="header--link--toggle--anchor" id='e' value={this.state.shenpo.e}  onMouseOver={this.handleChange} >Vendors</a>
        <div  className={`${this.state.shenpo.e[1]} header--link--dropdown `}>
        <a id={Object.keys(this.state.shenpo)[4]} href="/en/users/sign_up?role=vendor">Create your profile</a>
        </div>
        </li>
        <li className="header--link--toggle" id='f' onMouseLeave={this.handleRest}>
        <Link to={'/'} className="header--link--toggle--anchor" id='f' value={this.state.shenpo.f}  onMouseOver={this.handleChange} >Gallery</Link>
        <div  className={`${this.state.shenpo.f[1]} header--link--dropdown `}>
        <Link id={Object.keys(this.state.shenpo)[5]} to={{pathname: `/categories/${zileId}`,
      state:{
        id: zileId,
        name: zileName,
        imageUrl: `${zileImageUrl}`,
        mainWord: "Gallery"
      }}}>
        <span >{zileName}</span>
     </Link> 
        <Link id={Object.keys(this.state.shenpo)[5]} to={{pathname: `/categories`}}>
        <span >More</span>
     </Link> 
        </div>
        </li>
        <li className="header--link--toggle" id='g' onMouseLeave={this.handleRest}>
        <a href="/" className="header--link--toggle--anchor" id='g' value={this.state.shenpo.g}  onMouseOver={this.handleChange} >Ideas &amp; More</a>
        <div  className={`${this.state.shenpo.g[1]} header--link--dropdown `}>
        <a id={Object.keys(this.state.shenpo)[6]}href="/en/posts?category=5">Tips &amp; Etiquette</a>
        <a id={Object.keys(this.state.shenpo)[6]}href="/en/posts?category=43">Wedding Of The Week</a>
        <a id={Object.keys(this.state.shenpo)[6]}href="/en/categories?parent_menu=posts">More</a>
        </div>
        </li>
        </ul>
        </div>
        </div>
            </div>
           <div className={`icon ${this.state.icon}`}>
             <Hello/>
           </div>
            </Fragment>
          );
        
    }}

function mapStateToProps (store) {
  return {
    list: Object.values(store.categories)
  }
}


export default connect(mapStateToProps,)(Header);
