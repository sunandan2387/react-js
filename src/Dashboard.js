
import React, { useEffect, useState } from "react";
import './Dashboard.css';

/*   i wanted to make it responsive and but couldnt due to time constraints
     i havent used any external libraries and have created table with simple html tags 
     i tried to make this code simple to understand sorry if its not                     */

function Dashboard() {


  const [searchTerm, setSearchTerm] = useState('')
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])



return (
   
    
	<div className="Dashboard">
     
  
        <div className="top"><h1> &nbsp; Dashboard</h1></div>
        <div className="top-second">
        <input type="text"                                                                       //searchbar section
        placeholder="  customer name , status" 
        onChange={event=>{setSearchTerm(event.target.value)}} /> 
        <h2>showing results &nbsp; &nbsp; {data.length}</h2>                               
        </div>
        <div className="posts">
        <table>
        <thead>
        <tr><div>
            <th>ID</th>
            <th>CUSTOMER</th>
            <th>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;ADDRESS</th>
            <th>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;PRODUCT</th>
            <th>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;DATE ORDER</th>
            <th>STATUS</th>
        </div></tr>
        </thead>
        <tbody>
        <div className="map">
          
        {data.filter((post)=>{                                                        
              if (searchTerm ===""){                                                           //if searchbar is empty all data is returned
                  return post
              } else if(post.customer.toLowerCase().includes(searchTerm.toLowerCase())) {     //converts to lowercase to match the case and returns filtered value
                  return post
              }
              else if(post.status.toLowerCase().includes(searchTerm.toLowerCase())) {        
                return post
            }

            }).map(post => {                                                                  //mapping by post to get data from json
            return (
        <tr>
          <td>{post.order_id}</td>
          <td>{post.customer}</td>
          <td>{post.country}<br></br>{post.address}</td>
          <td>{post.product_title}<br></br>{post.product_description}</td>
          <td>{post.date}</td>
          <td>{post.status}</td>
        </tr>)
      })}
        </div>
        </tbody>
        </table>
    </div>
	</div>
);
}

export default Dashboard;



