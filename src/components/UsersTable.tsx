import { useEffect, useState } from "react"

const UsersTable = () => {

    // const [userData, setUserData] = useState<{}>({})


    useEffect(() => {
       callDataBase()
    }, [])
    

    const callDataBase = async () =>{
        const call = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await call.json();
        console.log(data.results)
    }

  return (
    <>
        <table  style={{backgroundColor:'aliceblue', border:'1px solid black'}}>
            <thead >
                <tr style={{backgroundColor:'aliceblue', border:'1px solid black'}}>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Location</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Location</td>
                    <td>Email</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default UsersTable