import { ReactNode } from 'react'

export interface MainProps {
    children: ReactNode
}

const Main = (props: MainProps): JSX.Element => {
    return (
        <div className='px-8 py-9 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-white'>
            {props.children}
        </div>
    )
}

export default Main