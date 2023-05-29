import axios from 'axios';


export const fetchChats = async(page)=>{
  const response = await axios.get(`http://3.111.128.67/assignment/chat?page=${page}`, {})

  return response
} 