import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = '/api';

class Fetch extends React.Component {
    componentDidMount() {
        // const url = 'https://static.ws.126.net/163/f2e/news/virus_report/static/world1.json';
        // const url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=' + new Date().getTime();
        // const url = '/ug/api/wuhan/app/data/list-by-area-code?areaCode=66&t=1607672006422'
        // const url = 'https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=51';
        const url = '/ug/api/wuhan/app/data/list-total?t=' + new Date().getTime();
        axios.get(url).then(res => {
            console.log('res', res);
        })
    }
    render() {
        return (
            <>
                <div>fetch data</div>
            </>
        )
    }
}

export default Fetch;