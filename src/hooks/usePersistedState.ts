import { useEffect, useState, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      setState(JSON.parse(storageValue))
    } else {
      setState(initialState)
    }
  }, [initialState, key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
