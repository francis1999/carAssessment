import { useState } from "react";
import { useQuery } from "react-query";
import Drawer  from "@material-ui/core/Drawer";
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid  from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


import {Wrapper} from './App.style';
import Item from './Item/Item';
import Nav from "./Nav";
//import Images from  './Images.jsx';


export type CartItemType = {
id:number;
title:string;
imageUrl:string;
marketplacePrice:number;
marketplaceOldPrice:string;
sellingCondition:string;
/* year:string;
city:string;
state:string;
gradeScore:number;
sellingCondition:string;
hasWarranty:string;

marketplaceOldPrice:number;
mileage:string;
mileageUnit:string;
installment:string;
loanValue:string; */

}



const singlePage = async (): Promise<CartItemType[]> => 
  await(await fetch('http://127.0.0.1:8000/api/v1/cars')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'cars',
    singlePage
  );
  console.log(data);

  const gettotalItems=()=>null;
  const handleAddToCart = (clickedItem: CartItemType)=> null;
  const handleRemoveFromcart=()=>null;

  if(isLoading)return<LinearProgress/>;
  if(error)return<div>Somehing Went Wrong</div>;


  return (
   
    <Router>
         <Wrapper>
        <Switch>
           <Route><Nav/></Route>
        </Switch>
          <Grid container spacing={3}>
            {data?.map(item => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item}handleAddToCart={handleAddToCart}/>
              </Grid>
            ))}
          </Grid>
      </Wrapper>
      </Router>
    
     
  
  );
}

export default App;
