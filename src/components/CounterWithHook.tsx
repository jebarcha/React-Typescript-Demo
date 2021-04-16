import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

    const { value, acumulate} = useCounter(0);

    return (
        <>
          <h3>Counter With Hook: <small>{ value }</small></h3>  

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
