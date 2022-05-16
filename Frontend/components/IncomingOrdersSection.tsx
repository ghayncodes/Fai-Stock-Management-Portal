import * as React from "react";
import Moment from "react-moment";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../assets/animations/Spinner/spinner";
import { OrderButton } from '../Styles/ButtonsStyle'
import { ConfirmCell } from '../Styles/RadioButtonStyle';

import { 
    OrderContainer, 
    ButtonContainer,
    Table, 
    TableHeader,
    TableBody,
    TableData2, 
    TableHead, 
    TableRow,
    TableHeadRow
} from '../Styles/TableStyle';

const CACHE = {};

const IncomingOrderSection:React.FC<any> = (props) => {

    const {
        recText,
        recColor,
        hoverRecColor,
        notText,
        notColor,
        hoverNotColor,
    } = props;

    const url = "http://localhost:3000/getCompletedOrders"

    const [ordersList, setOrdersList] = React.useState([]) ;
    const [ordersTempList, setTempList] = React.useState([])
    const [selectedOrders, setSelectedOrders] = React.useState([]) ;

    const [parentChecked, setParentChecked] = React.useState(false) ;
    const [isLoading, setLoaded] = React.useState(false);

    const[CacheKey, setCacheKey] = React.useState(0);

    React.useEffect(() => {
        const ac = new AbortController();
        if (CACHE[CacheKey] !== undefined) {
            setOrdersList(CACHE[CacheKey]);
            setLoaded(false);
        }
        else {
            setLoaded(true);
        }
        
        // GET request to /getCompletedOrders
        let request = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        }

        // Send request to get list of completed orders
        fetch(url , request).then( res => res.json() )
        .then( data => {
            console.log(data.result);

            setCacheKey(data.result._id)
            CACHE[CacheKey] = data.result;

            setOrdersList(data.result);
            setLoaded(false);
        })
        .catch( err => {
            setLoaded(false);
            console.log(err) 
        })

        return () => {
            ac.abort(); // Abort both fetches on unmount
        }
    }, [CacheKey]);

    const tableList = ordersList.map((order, index)=>{
        return (
            <TableRow key={index}>
                <TableData2>{order._id}</TableData2>
                <TableData2>{order.item}</TableData2>
                <TableData2>{order.quantity}</TableData2>
                <TableData2> 
                        <Moment format="DD/MM/YYYY">{order.orderIssueDate}</Moment>
                </TableData2>
                <TableData2>
                    <ConfirmCell type="checkbox" checked={order.selected} onChange={(e) => onOrderCheck(e, order)}/>
                </TableData2>
            </TableRow>
        )
    });

    const onParentChecked = (e: any) => {
        let tempList = ordersTempList;
        tempList.map((order)=>{
            order.selected = e.target.checked;
        });

        setParentChecked(e.target.checked);
        setTempList(tempList);
        setSelectedOrders(ordersTempList.filter((e)=>e.selected))
    }

    const onOrderCheck = (e: any, tempOrder) =>{
        let tempList = ordersTempList;
        tempList.map((order)=>{
            if(order._id == tempOrder._id){
                order.selected =  e.target.checked;
            }
            return order;
        });

        const totalOrders = ordersTempList.length;
        const totalCheckedOrders = tempList.filter((e)=>e.selected).length;

        setParentChecked(totalOrders === totalCheckedOrders);
        setTempList(tempList);
        setSelectedOrders(ordersTempList.filter((e)=>e.selected));
    } 

    const updateSelectedRows = async (status: string) =>{
        setSelectedOrders(ordersTempList.filter((e)=>e.selected));
        console.log(selectedOrders);
/*         // PUT request to /updateOrderStatus       
        let request = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status,
                list: selectedOrders
            })
        }

        // Send request to update selected order states
        await fetch(url , request).then( res => res.json() )
        .then( data => {
            console.log(data.result);
            toast(() => <div><h2>{ data.result }</h2></div>, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch( err => console.log(err) ) */
    }

    return( 
        <>
            <OrderContainer>
                <Table>
                    <TableHeader>
                        <TableHeadRow>
                            <TableHead>Order  ID</TableHead>
                            <TableHead>Item</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Expected Date</TableHead>
                            <TableHead>
                                Confirm Status
                                <ConfirmCell type="checkbox" checked={parentChecked} onChange={(e) => onParentChecked(e)}/>
                            </TableHead>
                        </TableHeadRow>
                    </TableHeader>
                    <TableBody>
                    {isLoading ? 
                        <tr>
                            <td>
                                <Spinner />
                            </td>
                        </tr> 
                        : !ordersList.length ? 
                        <tr style={{textAlign: 'center', justifyContent: 'center'}}>
                            <td style={{fontSize: '1.8rem', width: '100%'}}>
                                Nothing to show. Come back later!
                            </td>
                        </tr> 
                        : tableList}
                    </TableBody>
                </Table>
                <ButtonContainer>
                    <OrderButton onClick={(e)=>updateSelectedRows('Confirmed')} buttonColor={recColor} buttonHoverColor={hoverRecColor}>
                        {recText}
                    </OrderButton> 
                    <OrderButton onClick={(e)=>updateSelectedRows('Delayed')} buttonColor={notColor} buttonHoverColor={hoverNotColor}>
                            {notText}
                    </OrderButton> 
                </ButtonContainer>
            </OrderContainer>
        </>
    );
}
export default IncomingOrderSection;


