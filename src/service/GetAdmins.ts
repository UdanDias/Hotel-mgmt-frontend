import axios from 'axios';
const getAdminUrl="http://localhost:8082/hotelmgmt/api/v1/admin/getAllAdmins";

export const GetAdmin=async()=>{
    try {
        const response=await axios.get(getAdminUrl)
        console.log("getadmindata from service ",response.data)
        console.log("full response:", response);           // ✅ log full response
        console.log("response.data:", response.data);      // ✅ log data
        console.log("type:", typeof response.data);
        return response.data
    } catch (error) {
        console.error("Error while getting admins",error)
    }
}