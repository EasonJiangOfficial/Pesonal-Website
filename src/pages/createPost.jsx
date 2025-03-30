import React from "react";
import { useState } from "react";
import {db} from "../lib/firebase";
import {collection,addDoc} from "firebase/firestore";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePost(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const getCurrentDate = () => {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0'); // Add leading zero if needed
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
        const year = today.getFullYear(); // Get the full year
        
        return `${month}/${day}/${year}`;
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await addDoc(collection(db, "blog-posts"), {
                title: title,
                content: content,
                postedDate: getCurrentDate(),
            })
            toast.success("Blog post added successfully!");
            
            setTitle("");
            setContent("");
        }
        catch (error) {
            toast.error(error)
        }    
    };
    
    return (
        <>
        <ToastContainer/>
        <div className="container mx-auto mt-28 p-4 w-2/3">
        <h1 className="text-4xl font-header mb-6">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
            />
            <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            rows="10"
            required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </form>
        </div>
        </>
    );
}
