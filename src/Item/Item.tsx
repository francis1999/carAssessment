import Button from '@material-ui/core/Button';
import { CartItemType } from '../App';
import { Wrapper } from './Item.styles';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Images from '../Images.js';
type Props={
    item:CartItemType;
    handleAddToCart:(clickedItem: CartItemType)=>void;
}

const Item: React.FC<Props>=({item, handleAddToCart})=>(
    <Wrapper>
            
           
            <div className="grid_1">
        <a href="single.html"><img src={item.imageUrl} title="continue reading" alt={item.title} /></a>
            <div className="grid_desc">
                <p className="title">{item.title}</p>
                <h4 className="title1">Selling Condition: {item.title}</h4>
                        <div className="price">
                            <span className="reducedfrom">${item.marketplaceOldPrice}</span> <br />
                        <span className="actual">${item.marketplacePrice}</span>
                        <span></span>
                    </div>
                    <div className="cart-button">
                        <div className="cart">
                            {/* <a href="#"><img src={Images.logo18} alt=""/></a> */}
                        </div>
                        
                        <Link to={`SinglePage/${item.id}`}><Button>
                            View Details
                        </Button></Link>
                    <div className="clear"></div>
                </div>
            </div>
</div><div className="clear"></div>
								

       
    </Wrapper>
)
export default Item;