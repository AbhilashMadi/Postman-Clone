import { useState,useCallback,useRef,useEffect } from 'react'

const useStateCallBack = (intialState) => {
    
    const [state, setState] = useState(intialState);
    const cbRef = useRef(null);

    const setStateCallback = useCallback((state,cb) => {
        cbRef.current = cb;
        setState(state);
    },[])
    
    useEffect(() => {
        if(cbRef.current){
            cbRef.current(state);
            cbRef.current = null;
        }
    },[state]);

    return [state, setStateCallback];
}

export default useStateCallBack;
