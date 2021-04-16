import { useState } from 'react';

export const Counter = () => {

    const [value, setValue] = useState(0);

    const acumulate = (num: number) => {
        setValue(value + num);
    }

    return (
        <>
          <h3>Counter: <small>{ value }</small></h3>  

          <button
            className="btn btn-primary"
            onClick={() => acumulate(1)}
            >
                +1
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => acumulate(-1)}
            >
                -1
          </button>
        </>
    )
}
