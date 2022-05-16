import * as React from 'react';
import ConfirmButton from '../components/ConfirmButton';

import {
    StatContainer,
    StatArea1,
    StatArea2
} from '../Styles/StatStyle/StatStyles';

import { 
    lpObj, 
    dashMPItemObj ,
    reorderButtonObj
} from '../components/Dashboard/MainData';
import BorderSection from '../components/BorderSection';


export default class Statistics extends React.Component<any, any> {
    render() {
        return(
            <>
                <StatContainer>
                    <StatArea1>
                        <BorderSection {...dashMPItemObj}/>
                        <ConfirmButton {...reorderButtonObj}/>
                    </StatArea1>
                    <StatArea2>
                        <BorderSection {...lpObj}/> 
                    </StatArea2>
                </StatContainer>
            </> 
        );
    }
}