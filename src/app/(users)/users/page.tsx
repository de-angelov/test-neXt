import { getAllUsers } from "../action";

const Users = async () => {
    const users = await getAllUsers();

    return (
        <div>
            <h3>USERS in DB:</h3>
            <br />
            {
                users.map((u,i) => 
                <div key={`${u.name} ${i}`}>
                    <div className="p-5 border border-emerald-400">
                        UserName: { u.name } UserOrganization: { u.organizationName }
                    </div>
                    <br />
                </ div>
                )
            }

        </div>
    );
}

export default Users;