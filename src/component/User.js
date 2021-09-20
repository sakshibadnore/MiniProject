import React, { Component,useState } from 'react'
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';



class Table extends Component {
   constructor(props) {
      super(props) ;
     
      this.state = { 
         students: [
            { firstname: 'Ashish', lastname: 'Jain',email:'ashish@email.com', phone: 789954898 ,action:""},
            { firstname: 'Ashika', lastname: 'Jain',email:'ashika@email.com', phone: 997755788,action:""},
            { firstname: 'Mayuri', lastname: 'Karande',email:'mayuri@email.com', phone:876596546 },
            { firstname: 'Rewa', lastname: 'Rajurkar',email:'rewa@email.com', phone: 9876564654 },
            { firstname: 'Dinanath', lastname: 'Patil',email:'dinanath@email.com', phone: 89076675654 },
            { firstname: 'Akshaya', lastname: 'Kulkarni',email:'akshaya@email.com', phone: 789954898 },
            { firstname: 'Sumit', lastname: 'Singh',email:'sumit@email.com', phone: 989798787 },
            { firstname: 'Krishana', lastname: 'Sharma',email:'krishana@email.com', phone: 9897876323},
            { firstname: 'Sumit', lastname: 'Ahir',email:'sumit@email.com', phone: 87867576533},
         ]
      }
   }
 
  OnView() {
     const [show,setshow]=useState(false);
     const handleClose=()=>setshow(false);
     const handleShow=()=>setshow(true);
      return( 
      <>
      <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>

     <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Edit
          </Button>
        </Modal.Footer>
      </Modal>
      </>
        //alert(student.firstname)
         /*<div>
         <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body">
               ...
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary">Save changes</button>
             </div>
           </div>
         </div>
       </div>
       </div>*/
         )
    
   }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const {id,firstname,lastname,email,phone} = student //destructuring
       return (
          <tr key={id}>
             <td>{firstname}</td>
             <td>{lastname}</td>
             <td>{email}</td>
             <td>{phone}</td>
             
             <td><button className="view" onClick={()=>this.OnView(student)}>View</button></td>
            </tr>
            
       )
    })
 }


 renderTableHeader(){
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
   render() { 
      return (
         <div>
             <Sidebar/>
             <h1 id="title">User Detail</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr> 
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}
 



 
 
 




export default Table
