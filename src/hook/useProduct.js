import { useEffect, useState } from "react";

const useProduct = () =>{
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])
    return [breakfasts, setBreakfasts]
}

export default useProduct;