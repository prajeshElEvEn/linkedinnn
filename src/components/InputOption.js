import React from 'react'

const InputOption = ({ Icon, title, color }) => {
    return (
        <div className='inputOption'>
            <Icon style={{ color: color }} />
            <div className='inputTitle'>
                {title}
            </div>
        </div>
    )
}

export default InputOption
