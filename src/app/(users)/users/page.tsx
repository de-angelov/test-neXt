import { getAllUsers } from "../action";

const Users = async () => {
    const users = await getAllUsers();

    return (
        <div>
            <h3>USERS in DB:</h3>
            <br />
            {
                users.map(u => 
                    <>
                        <div style={{ border: '1px solid red', padding: '5px',  }}>UserName: { u.name } UserOrganization: { u.organizationName }</div>
                        <br />
                    </>
                )
            }

        </div>
    );
}

export default Users;