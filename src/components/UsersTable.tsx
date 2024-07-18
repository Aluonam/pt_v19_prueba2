import { useEffect, useState } from "react"

interface userDataPropstype {
    gender: string,
    name: {
            title: string,
            first: string,
            last: string
            },
    location: {
                street: {
                        number: number,
                        name: string
                        },
                city: string,
                state: string,
                },
    email: string,
    dob: {
            date: string,
            age: number
            },
    registered: {
                    date: string,
                    age: number
                    },
    phone: string,
    cell: string,
    id: {
            name: string,
            value: string
            },
}


const UsersTable = () => {

    const [userData, setUserData] = useState<userDataPropstype[]>()


    useEffect(() => {
       callDataBase()
    }, [])
    

    const callDataBase = async () =>{
        const call = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await call.json();
        setUserData(data.results)
    }

    const printTable = userData?.map((oneUser)=>{
        return(
                <tr>
                    <td>{oneUser.name.first}&nbsp;{oneUser.name.last}</td>
                    <td>{oneUser.gender}</td>
                    <td>{oneUser.location.state},&nbsp;{oneUser.location.city}</td>
                    <td>{oneUser.email}</td>
                    <td>{oneUser.phone}</td>
                </tr>
        )
    })

  return (
    <>
        <table  style={{backgroundColor:'aliceblue', border:'1px solid black'}}>
            <thead >
                <tr style={{backgroundColor:'aliceblue', border:'1px solid black'}}>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Location</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                {printTable}
            </tbody>
        </table>
    </>
  )
}

export default UsersTable