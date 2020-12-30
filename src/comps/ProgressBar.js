import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar =({file,setFile})=>{
    const {url,progress}=useStorage(file);
    //Only after we get the url,we set the value of file to null
    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])

    return(
        <div className="progress-bar" style={{width:progress + '%'}}></div>
    )
}

export default ProgressBar;
