import React from 'react'
import {ProductType} from '../types/product'
import {Link} from 'react-router-dom'


type ManagerProductProps = {
  data:ProductType[],
  onRemove: (id:number) => void
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th> 
               <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data && props.data.map((item,index) =>{
              return <tr key ={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                <button onClick={() => props.onRemove(item.id)}>Remove</button>
              </tr>
            })}
          </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct