import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Hello from '../components/Hello.js'

class Header extends Component {
    state={
        shenpo:{
            a: ['360 Planner','hide'],b: ['Her','hide'],c: ['Him','hide']
            ,d: ['The Wedding', 'hide'],e:['Vendors','hide'], f: ['Gallery','hide']
            ,g: ['Ideas & More', 'hide']
        },
        top: '',
        width: '',
        postion: '',
        icon: 'hide'
      }
      componentDidMount () {
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

    render() {
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

/*
<div class="header--mobile--button">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
</div>

<div class="header--links--mobile" style="display: block;">
<div class="header-wrapper">
<div class="header--links--mobile--link header--links--mobile--link--half header--links--mobile--link--bordered--right header--links--mobile--link--bordered--bottom">
<a href="/en/360planner">
<img class="header-icon img-responsive" src="https://weds360.com/assets/planningtools-e27783fe8e0ed7bf48b9e63a977b6357fc8a64064828a4c5a005470263d9d7dc.png" alt="Planningtools">
<p>360 planner</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--half header--links--mobile--link--bordered--bottom">
<a href="/en/categories?parent_menu=for_the_wedding">
<img class="header-icon img-responsive" src="https://weds360.com/assets/forthewedding-b5002312f0a4f29574cb0cfcd4dc3809e9074cb8d717103e77dbf670952a4531.png" alt="Forthewedding">
<p>For The Wedding</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--half header--links--mobile--link--bordered--bottom header--links--mobile--link--bordered--right">
<a href="/en/categories?parent_menu=for_him">
<img class="header-icon img-responsive" src="https://weds360.com/assets/forhim-27ec12d8032c54ce06f2e1c5c5d0a07745cc45b5f13584c693bbfc1b5bb02889.png" alt="Forhim">
<p>Him</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--half header--links--mobile--link--bordered--bottom">
<a href="/en/categories?parent_menu=for_her">
<img class="header-icon img-responsive" src="https://weds360.com/assets/forher-942ae5c8439a2590a20e51cd7c246077be3059f66f636a7af7cc6bfc1dbd454b.png" alt="Forher">
<p>Her</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--quarter header--links--mobile--link--bordered--bottom header--links--mobile--link--bordered--right">
<a href="/en/checklists">
<img class="header-icon img-responsive" src="https://weds360.com/assets/checklist-5d1de44899b7031df27ea413c3b12e912f5bbf6a917ee47f0898f035de79c5d9.png" alt="Checklist">
<p>Check list</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--quarter header--links--mobile--link--bordered--bottom header--links--mobile--link--bordered--right">
<a href="/en/guestlist">
<img class="header-icon img-responsive" src="https://weds360.com/assets/guestlist-6b09f4690b2e2782f1d453654e3e4660043e6ed0068ca419b2a423022ad9628b.png" alt="Guestlist">
<p>Guest list</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--quarter header--links--mobile--link--bordered--bottom header--links--mobile--link--bordered--right" style="height: 111px;">
<a href="/en/registry">
<img class="header-icon img-responsive" src="https://weds360.com/assets/registry-b306895e7cd0e760b67ab55b883e8dfdcf7cfc284e9bdf8b6b560a325965411b.png" alt="Registry">
<p>Registry list</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--quarter header--links--mobile--link--bordered--bottom">
<a href="/en/budgeter">
<img class="header-icon img-responsive" src="https://weds360.com/assets/budgeter-fd97545a9478c304d4427ec1e7b8583f028d56a642111e124a40a44442012191.png" alt="Budgeter">
<p>Budgeter</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--half header--links--mobile--link--bordered--bottom header--links--mobile--link--bordered--right">
<a href="/en/categories?parent_menu=photos">
<img class="header-icon img-responsive" src="https://weds360.com/assets/icons/tools-vision-white-28d34c7bf940dca78a1217508870e3d1c64fed89add64751e7180c9d78b868e5.png" alt="Tools vision white">
<p>Gallery</p>
</a>
</div>
<div class="header--links--mobile--link header--links--mobile--link--half header--links--mobile--link--bordered--bottom" style="height: 108px;">
<a href="/en/categories?parent_menu=posts">
<img class="header-icon img-responsive" src="https://weds360.com/assets/white-articles-6582f1a71029081a3d38b9928bd4d66f7b2e3604c06867118dc8e024a785c251.png" alt="White articles">
<p>Ideas &amp; More</p>
</a>
</div>

</div>
</div>*/