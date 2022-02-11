import React, {useState} from 'react';
import axios from 'axios';

export default function Peticiones() {

    const [ name, setName ] = useState('');
    const [ dataTable, setDataTable ] = useState({
        EUO: { code: ''},
        GBP: '',
        USD: ''
    });
    const [ time, setTime ] = useState({
        updated: ''
    })
    
    React.useEffect(() =>{
      axios.get('http://api.coindesk.com/v1/bpi/currentprice.json').then(res => {
        let data = res.data;
        setName(data.chartName);
        setDataTable(data.bpi);
        setTime(res.time)

      }).catch((error) => {

      });
    }, []);

    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
    
}
