import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAdmin } from "../../service/GetAdmins";
import EditAdmin from "./EditAdmin";
interface Admin{
    adminId:string;
    adminName:string;
    email:string;
    phone:string;
}

const theads=[
    "Admin Id","Admin Name","Email","Phone"
]
const loadData=async(SetAdminData:React.Dispatch<React.SetStateAction<Admin[]>>)=>{
        try {
            const adminDetails=await GetAdmin()
            SetAdminData(adminDetails)
            
        } catch (error) {
            console.error("Failed to load Admin Data",error)
        }

}

export function AdminConsole(){
    const [adminData,SetAdminData]=useState<Admin[]>([]);
    const[showEditAdminModal,SetShowEditadminModal]=useState(false);
    const[selectedRow,SetSelectedRow]=useState<Admin|null>(null);

    const handleClose=()=>{
        SetShowEditadminModal(false)
    }

    useEffect(()=>{
        loadData(SetAdminData)
    },[]);
    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr  >
                    {theads.map((thead,index)=>(
                        <th  key={index}>{thead}</th>
                    ))}
                    <th >Action</th>
                </tr>
            </thead>
            <tbody>
                {adminData.map((row)=>(
                    <tr key={row.adminId}>
                        {Object.values(row).map((cell,index)=>(
                        <td key={index}>{cell}</td>
                        ))}
                        <td className="d-flex justify-content-center gap-2 ">
                            {<Button variant="secondary" onClick={()=>SetShowEditadminModal(true)}>Edit</Button>}
                            {<Button variant="danger">Delete</Button>}
                        </td>
                        
                    </tr>
                    
                    
                ))}

            </tbody>
        </Table>

        <EditAdmin
            show={showEditAdminModal}
            selectedRow={selectedRow}
            handleClose={handleClose}
            handleEdit={showEditAdminModal}
        />

        </>
    );
}