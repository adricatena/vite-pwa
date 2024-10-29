import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface State {
    count: number
}
interface Actions {
    setCount: (by: number) => void
}

const initialState: State = {
    count: 0
}

export const useCountStore = create<State & Actions>()(persist((set) => ({
    ...initialState,
    setCount: (by) => set(s => ({ count: s.count + by })),
}), { name: "count-storage" }))
