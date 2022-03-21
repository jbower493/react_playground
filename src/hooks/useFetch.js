import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(null)
    const [error, setError] = useState(null)

    const fetchUser = useCallback(async () => {
        setStatus('loading')
        setData(null)
        setError(null)

        try {
            const res = await fetch(url)
            const jsonRes = await res.json()

            setStatus('success')
            setData(jsonRes)
        } catch (e) {
            setStatus('error')
            setError(e)
        }
        
    }, [url])

    const refetch = () => {
        fetchUser()
    }

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return { status, data, error, refetch }
}

export default useFetch