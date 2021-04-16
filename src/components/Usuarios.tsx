import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';

export const Usuarios = () => {

    const { users, nextPage, previousPage} = useUsers();

    const renderItem = ({id, first_name, last_name, avatar, email}: User) => {
        return (
            <tr key={id}>
                <th>
                    <img 
                        src={ avatar } 
                        alt={first_name}
                        style={{ 
                                width:35,
                                borderRadius: 100 
                               }}
                    />
                </th>
                <th>{ first_name} { last_name }</th>
                <th>{ email }</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Users</h3>   
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => renderItem(user))
                    }
                </tbody>
            </table>

            <button 
                className="btn btn-primary"
                onClick={ previousPage }
            >
                Previous
            </button>
                &nbsp;
            <button 
                className="btn btn-primary"
                onClick={ nextPage  }
            >
                Next
            </button>

        </>
    )
}
