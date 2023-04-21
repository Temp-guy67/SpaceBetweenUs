import { collection,serverTimestamp,doc , setDoc ,getDocs} from "firebase/firestore/lite";
import db from "./firebaseconfig";

async function FirebaseHandler(opr, data){
    const collectionRef = collection(db, "apod");
    if(opr === "add"){
        addData(collectionRef, data);
        return null;
    }
    else if (opr === "read") {
        const returnObj = await readData(collectionRef);
        return returnObj;
    } else {
        return null;
    }
}

async function addData(collectionRef , data) {
    var today = data.date;
    const newObj = setDataObj(data);
    try {
        const schoolRef = doc(collectionRef, today);
        await setDoc(schoolRef, newObj);
    } catch (error) {
        console.error("[FirebaseHandler]Error in addData ",error);
    }
}


async function readData(collectionRef) {
    try {
        const snapshot = await getDocs(collectionRef);
        let dataArray = [];
        snapshot.forEach(doc => {
            const singleDataObj = doc.data();
            dataArray.push(singleDataObj);
        })
        return dataArray
        
    } catch (error) {
        console.error("[FirebaseHandler] Error in readData ",error);
    }
}


const setDataObj= (data) => {
    const dataObj = {
        date: data.date,
        explanation: data.explanation,
        hdurl : data.hdurl,
        media_type : data.media_type,
        title : data.title,
        time : serverTimestamp(),
        url : data.url
    }
    return dataObj;
}


export default FirebaseHandler;