import './App.css';
import data from './utils/data';
import Table from './table';
function App() {

  // console.log(data);
  return (
    <section>
<div className='gridContainer header'>
     <h1 ClassName='grid-item'>ID</h1>
     <h1  ClassName='grid-item'>Customer Name</h1>
      <h1  ClassName='grid-item'>Email Adress</h1>
       <h1  ClassName='grid-item'>Phone</h1>
        <h1  ClassName='grid-item'>Client User Name</h1>
         <h1  ClassName='grid-item'>Website</h1>
   </div>
    {data.map((item)=>{
      return <Table key={item.id} {...item}></Table>

  })}       
  </section>

  );
}

export default App;
