import React from 'react'

export default function table(props) {
 const {id,name,email,phone,username,website} = props;
console.log(id);
 return (
  <div className='gridContainer items'>
   <h3  ClassName='grid-item'>{id}</h3>
     <h3  ClassName='grid-item'>{name}</h3>
      <h3  ClassName='grid-item' style={{color:'blue'}}>{email}</h3>
       <h3  ClassName='grid-item'>{phone}</h3>
        <h3  ClassName='grid-item'>{username}</h3>
         <h3  ClassName='grid-item strong' style={{fontWeight:'bold'}}>{website}</h3>
  </div>
 )
}
