import { useState, useEffect } from 'react'
import axios from 'axios';

function useFetchColor() {
    const [color, setColor] = useState([])

    useEffect(() => {
        const fetchColor = async () => {
            await axios
              .get('https://60ae0d5e80a61f00173324bc.mockapi.io/colors')
              .then(res => {
                setColor(res.data);
              })
              .catch(err => console.log(err));
          };

          fetchColor();
    }, [])
    
    return color;
}

export default useFetchColor
