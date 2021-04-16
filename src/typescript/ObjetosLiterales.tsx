interface Person {
    fullName: string;
    name: string;
    age: number;
    address: Address;
}

interface Address {
    country: string,
    street: string,
    number: string
}

export const ObjetosLiterales = () => {

    const person: Person = {
        fullName: 'Jose de Jesus',
        name: 'Jose',
        age: 45,
        address: {
            country: 'Mexico',
            street: 'Leija',
            number: '108'
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(person, null, 2) }
                </pre>
            </code>
        </>
    )
}
