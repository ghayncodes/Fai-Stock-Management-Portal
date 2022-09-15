import * as React from 'react';

import ItemStatSection from '../Stats/ItemStatSection';
import StockTableSection from './StockTable';
import OrderTableSection from '../Orders/OrdersTable';
import IncomingOrderSection from '../Orders/IncomingOrdersSection';
import StatSection from '../Stats/StatsSections';


// For Statistics most purchased item border container
export const mostPurchasedObj = {
    url: "https://fai-stock-managment.herokuapp.com/getMostPurchased"
}

// For Dashboard most purchased item border container
export const dashMPItemObj = {
    title: 'The most purchased item is:',
    component: <ItemStatSection {...mostPurchasedObj}/>
}

// For Statistics most purchased reorder item button
export const reorderButtonObj = {
    itsText:'Reorder Item',
    itsColor: '#00A3E0',
    hoverColor: '#00ADEE',
    url: "https://fai-stock-managment.herokuapp.com/getMostPurchased",
    urlCreate: "https://fai-stock-managment.herokuapp.com/reorderItem",
}

// For Dashboard most purchased item border container
export const statMPItemObj = {
    title: 'The most purchased item is:',
    component: <StatSection {...reorderButtonObj}/>
}

// For Dashboard stock levels list border container
export const stockLevelObj = {
    title: 'Stock Levels:',
    component: <StockTableSection />
}

// For Active order list table
export const activeTableObj = {
    url: "https://fai-stock-managment.herokuapp.com/getActiveOrders"
}

// For Dashboard active orders list border container
export const activeOrderObj = {
    title: 'Currently Active Orders:',
    component: <OrderTableSection {...activeTableObj}/>
}

// For Delayed order list table
export const delayTableObj = {
    url: "https://fai-stock-managment.herokuapp.com/getDelayedOrders"
}

// For Dashboard delayed orders list border container
export const delayOrderObj = {
    title: 'Currently Delayed Orders:',
    component: <OrderTableSection {...delayTableObj}/>
}

// For Statistics least purchased item border container
export const leastPurchasedObj = {
    url: "https://fai-stock-managment.herokuapp.com/getLeastPurchased"
}

export const lpObj = {
    title: 'The least purchased item is:',
    component: <ItemStatSection {...leastPurchasedObj}/>
}

// For Orders Buttons
export const orderButtonObj = {
    recText:'Orders Received',
    recColor: '#84BD00',
    hoverRecColor: '#8BC700',
    recLeft: '1400px',
    recTop: '950px',
    notText:'Orders Not Received',
    notColor: '#00A3E0',
    hoverNotColor: '#00ADEE',
    notLeft: '1050px',
    notTop: '950px',
    url: "https://fai-stock-managment.herokuapp.com/getCompletedOrders",
    urlUpdate: "https://fai-stock-managment.herokuapp.com/updateOrderStatus"
}

// For Orders completed orders list border container
export const incomingOrdersObj = {
    title: 'Incoming Orders',
    component: <IncomingOrderSection {...orderButtonObj}/> 
}