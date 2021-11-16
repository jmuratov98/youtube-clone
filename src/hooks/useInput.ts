import { useState } from 'react'

function useInput(initialState: string) {
    const [input, setInput] = useState(initialState)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return {input, onChange}
}

export default useInput;