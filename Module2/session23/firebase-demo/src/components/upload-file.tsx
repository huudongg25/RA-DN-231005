import React, { useEffect } from "react";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import storage from "../config/firebase.config";

const UploadFile = () => {
    const [imageUpload, setImageUpload] = useState<any>(null);
    const [url,setUrl] = useState('')
    // Viết hàm upload
    const uploadFile = () => {
      if (imageUpload == null) return;
  
      const imageRef = ref(storage, `public/learnfirebase/${imageUpload.name}`);
  
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            //đây là đoạn trả ra url => làm tiếp việc CRUD ở đây
            setUrl(url)
        });
      });
    };

  return (
    <div>
      <input
        type="file"
        onChange={(e: any) => {
        setImageUpload(e.target.files[0])
        console.log(e.target.files[0].name);
        // setUrl(e.target.file[0].name)
        }}
      />
      <button onClick={uploadFile}>upload</button>
      <img src={url} alt="" />
    </div>
  );
};

export default UploadFile;
