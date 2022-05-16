import * as React from 'react';

import ItemStatSection from '../ItemStatSection';
import StockTableSection from './StockTable';
import OrderTableSection from '../OrdersTable';
import IncomingOrderSection from '../IncomingOrdersSection';


// For Statistics most purchased item border container
export const mostPurchasedObj = {
    url: "http://localhost:3000/getMostPurchased"
}

// For Dashboard most purchased item border container
export const dashMPItemObj = {
    title: 'The most purchased item is:',
    component: <ItemStatSection {...mostPurchasedObj}/>
}

// For Dashboard stock levels list border container
export const stockLevelObj = {
    title: 'Stock Levels:',
    component: <StockTableSection />
}

// For Active order list table
export const activeTableObj = {
    url: "http://localhost:3000/getActiveOrders"
}

// For Dashboard active orders list border container
export const activeOrderObj = {
    title: 'Currently Active Orders:',
    component: <OrderTableSection {...activeTableObj}/>
}

// For Delayed order list table
export const delayTableObj = {
    url: "http://localhost:3000/getDelayedOrders"
}

// For Dashboard delayed orders list border container
export const delayOrderObj = {
    title: 'Currently Delayed Orders:',
    component: <OrderTableSection {...delayTableObj}/>
}

// For Statistics least purchased item border container
export const leastPurchasedObj = {
    url: "http://localhost:3000/getLeastPurchased"
}

export const lpObj = {
    title: 'The least purchased item is:',
    component: <ItemStatSection {...leastPurchasedObj}/>
}

// For Orders Buttons
export const orderButtonObj = {
    recText:'Orders Received',
    recColor: '#84BD00',
    hoverRecColor: '#C1D692',
    recLeft: '1400px',
    recTop: '950px',
    notText:'Orders Not Received',
    notColor: '#00ADEE',
    hoverNotColor: '#8CC6DB',
    notLeft: '1050px',
    notTop: '950px'
}

// For Orders completed orders list border container
export const incomingOrdersObj = {
    title: 'Incoming Orders',
    component: <IncomingOrderSection {...orderButtonObj}/> 
}

// For Statistics most purchased reorder item button
export const reorderButtonObj = {
    itsText:'Reorder Item',
    itsColor: '#00A3E0',
    hoverColor: '#8CC6DB',
    left: '1050px',
    top: '300px'
}