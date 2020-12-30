//import useState and useEffect hooks
import {useState,useEffect} from 'react';
import {projectStorage,projectFirestore,timestamp} from '../firebase/config';

//create a hook named useStorage(hooks are basically functions) and pass the file as the parameter
const useStorage=(file) =>{
    const [progress,setProgress]=useState(0);//Progress of upload
    const [error,setError]=useState(null);
    const [url,setUrl]=useState(null);//This is the url we get from storage after image has been fully uploaded
    
//We use useEffect hook because everytime there is a new file upload this hook needs to run
    useEffect(()=>{
        //references of the file in firebase storage .ie. we store the file with file name
        const storageRef=projectStorage.ref(file.name);
        //reference of the file in firestore .ie. we save all the url of the image in a collection called images
        const collectionRef=projectFirestore.collection('images');
        //Upload file to the reference created above,since this is asynchronous,we add some listeners, like on here which tells the state of upload .ie. complete or not
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage=(snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async ()=>{
            const url=await storageRef.getDownloadURL();
            const createdAt=timestamp();
            collectionRef.add({url,createdAt});
            setUrl(url);
        })
    },[file]);

    return {progress,url,error};
}

export default useStorage;
