import { useEffect, useState } from "react"

interface userDataPropstype {
    gender: string,
    name: {
            title: "Miss",
            first: "Maya",
            last: "Davies"
            },
    location: {
                street: {
                        number: 5372,
                        name: "Victoria Road"
                        },
                city: "Bristol",
                state: "Tyne and Wear",
                },
    email: "maya.davies@example.com",
    dob: {
            date: "2000-08-21T20:24:47.121Z",
            age: 23
            },
    registered: {
                    date: "2011-07-16T00:16:21.968Z",
                    age: 13
                    },
    phone: "019467 40094",
    cell: "07257 887882",
    id: {
            name: "NINO",
            value: "YH 32 62 61 G"
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
        console.log(data.results)
        setUserData(data.results)
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