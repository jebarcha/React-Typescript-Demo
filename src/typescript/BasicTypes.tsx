
export const BasicTypes = () => {
    
    const name: string = 'Jose';
    const age: number = 35;
    const isActive: boolean = false;

    const powers: string[] = ['Speed', 'Fly', 'Water Breath'];

    return (
        <>
            <h3>Basic Types</h3>
            { name }, { age }, { (isActive) ? 'isActive' : 'NotActive' } 
            <br/>
            { powers.join(', ')}
        </>
    )
}
