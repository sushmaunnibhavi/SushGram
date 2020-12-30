import {useState,useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFIrestore = (collection) =>{
    const [docs,setDocs]=useState([]);

    useEffect(()=>{
        //Snapshot object represents a snapshot at that moment in time
     const unsub=projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents=[];
            snap.forEach(doc=>{
                //We use ... which is a spread operator which takes all the properties of data and includes it
                documents.push({...doc.data(),id:doc.id})
            });
            setDocs(documents);
        }) ;

        return ()=>unsub();//Unsubscribe from the collection when we no longer use it. When do we use it? When we unmount imagegrid
    },[collection])
    return {docs};
}

export default useFIrestore;
