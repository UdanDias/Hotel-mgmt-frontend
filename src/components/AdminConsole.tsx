import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GetAdmin } from "../service/GetAdmins";
interface Admin{
    adminId:string;
    adminName:string;
    email:string;
    phone:string;
}

const theads=[
    "Admin Id","Admin Name","Email","Phone"
]

export function AdminConsole(){
    const [adminData,SetAdminData]=useState<Admin[]>([]);

    const loadData=async()=>{
        try {
            const adminDetails=await GetAdmin()
            SetAdminData(adminDetails)
            console.log("admin details",adminData)
        } catch (error) {
            console.error("Failed to load Admin Data",error)
        }
        
        
    }
    useEffect(()=>{
        loadData()
    },[]);
    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    {theads.map((thead,index)=>(
                        <th key={index}>{thead}</th>
                    ))}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {adminData.map((row)=>(
                    <tr key={row.adminId}>
                        {Object.values(row).map((cell,index)=>(
                        <td key={index}>{cell}</td>
                        ))}
                    </tr>
                    
                    
                ))}

            </tbody>
        </Table>

        </>
    );
}