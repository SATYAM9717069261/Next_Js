import User from '../Components/User';
export default function UserList({ users }) {
    return (
        <>
            <h1> User List </h1>
            {
                users.map(user => {
                    return ( <User key={user.id} name={user.name} email={user.email}/> )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    console.log(data);
    return {
        props: {
            users: data
        },
    }
}