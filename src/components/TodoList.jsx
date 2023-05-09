import React, { useState } from 'react'

function TodoList() {

    const [items, setItems] = useState([]);
    const [activity, setActivity] = useState("");
    
    const updateActivity = (e) => {
        setActivity(e.target.value);
        //console.log(e.target.value);
    }
    
   
    const addItems = () => {
        //setItems([...items, activity]);
        if (activity === "") {
            return items;
        }
        setItems((items) => {
            const updatedList = [...items, activity];
            //console.log(updatedList);
            return updatedList;
        })
        //console.log(items);
        setActivity("");
       
    }

    
    const remove = (ind) => {
        const updateItem = items.filter((elem, i) => {
            return i != ind;
        });
        setItems(updateItem);
    }
    const removeAll = () => {
        setItems([]);
    }
   
  return (
      <div className='max-w-[500px] mx-auto  min-h-[700px] my-[10px]'>
          <div className='font-serif  text-black text-4xl'><h1>To Do List</h1></div>
          <div className='bg-[#fee2e2] h-[70px]  '>
              <input className='p-[5px] m-[10px] mt-[20px] rounded mb-[50px]' type='text' value={activity} onChange={updateActivity} placeholder='add items'/>  
              <button className='bg-[#609966] p-[6px] rounded' onClick={addItems}>add items</button>
          </div>
          <div className='bg-[#ECC9EE] p-[10px]  text-3xl'>
              <h1 className='text-[#070A52]'>Here is your todo-list :)</h1>
          </div>
          <div className='bg-[#f8fafc] '>
              <div className='bg-[#A5C0DD] py-[20px] rounded shadow-lg' >
                  {items != [] && items.map((data, i) => {
                      return <>
                          <p key={i}>
                                <div className='bg-[purple] w-[200px] shadow-lg text-[#FCFFE7] p-[10px] max-w-[350px] my-[12px] rounded inline-block mx-[20px]'>{data}</div>
                                  <button className='bg-[#EB455F] rounded p-[6px]' onClick={()=>remove(i)}>remove</button>
                              
                              
                              
                          </p>
                      </>
                  })}
                  
                  
              </div>
              <div className='bg-[#654E92] mt-[20px] rounded '>
                  {items.length >=1 && <button className='p-[10px] ' onClick={removeAll}>Remove All</button>}
              </div>
              
          </div>

      </div>
  )
}

export default TodoList