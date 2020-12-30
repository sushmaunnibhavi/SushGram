import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
//useState hook used to store file in local piece of state
    //file is the state and we use setFile to update that state, then using useState set the initial value of file to null
    const [file,setFile] =useState(null);
    const [error,setError]=useState(null);

    const types=['image/png','image/jpeg'];

    const changeHandler = (e) => {
        //Only store the first file selected
        let selected=e.target.files[0];
        //Only update the file value when we have a file selected
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
//We pass the props file ans setFile to use in ProgressBar component
    return(
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;
