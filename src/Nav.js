import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Images from './Images.js';
const Nav = () => {
    return (
        <div>
            	<div class="header">
					<div class="box_header_user_menu">
						<ul class="user_menu"><li class="act first"><a href="#"><div class="button-t"><span>Shipping &amp; Returns</span></div></a></li><li class=""><a href="#"><div class="button-t"><span>Advanced Search</span></div></a></li><li class=""><a href="#"><div class="button-t"><span>Create an Account</span></div></a></li><li class="last"><a href="#"><div class="button-t"><span>Log in</span></div></a></li></ul>
					</div>
					<div class="header-right">
						<ul class="follow_icon">
							<li><a href="#"><img src={Images.logo31} alt=""/></a></li>
							<li><a href="#"><img src={Images.logo19} alt=""/></a></li>
							<li><a href="#"><img src={Images.logo20} alt=""/></a></li>
							<li><a href="#"><img src={Images.logo21} alt=""/></a></li>
						</ul>
					</div><div class="clear"></div> 
					<div class="header-bot">
						<div class="logo">
							<a href="index.html"><img src={Images.logo22} alt=""/></a>
						</div>
						<div class="search">
						    <input type="text" class="textbox" value="" /* onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" */ />
						    <button class="gray-button"><span>Search</span></button>
				       </div>
					<div class="clear"></div> 
				</div>		
		</div>
        <div class="menu"> 	
			<div class="top-nav"> 
					<ul>
						<li class="active"><Link to='./Home'>Home</Link></li>
						<li><a href="about.html">About</a></li>
						<li><a href="specials.html">Specials</a></li>
						<li><a href="new.html">New</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
					<div class="clear"></div> 
				</div>
		</div>
        </div>
      );
}
export default Nav;