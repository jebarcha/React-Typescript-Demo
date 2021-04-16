import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, User } from '../interfaces/reqRes';

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
        // call API
        //fetch()  //comes with javascript itself
        loadUsers();
    }, [])

    const loadUsers = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: pageRef.current
            }
        })
        //console.log(resp.data.data.length);
        if (resp.data.data.length > 0){
            setUsers(resp.data.data);
        } else {
            pageRef.current--;
            alert('No more records');
        }
    }

    const nextPage = () => {
        pageRef.current ++;
        loadUsers();
    }

    const previousPage = () => {
        if (pageRef.current > 1) {
            pageRef.current --;
            loadUsers();
        }
    }
    
    return { 
            users,
            nextPage,
            previousPage
           }
}
