import { useState } from 'react'
import useFetch from '../../hooks/useFetch'

const Users = () => {
    const [url, setUrl] = useState('https://randomuser.me/api/')

    const { status, data, refetch } = useFetch(url)
     
    return (
        <div>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'error' && <div>Error!</div>}
            {data && <div>{data.results[0].name.first}</div>}
            <button onClick={() => setUrl('https://randomuser.me/api/?gender=male')}>Only Men</button>
            <button onClick={() => setUrl('https://randomuser.me/api/?gender=female')}>Only Women</button>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export default Users