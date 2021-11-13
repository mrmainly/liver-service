import React from 'react'

const Pagination = ({ totalPage, QtyPage }) => {
    const PageNambers = []
    for (let i; i <= Math.ceil(totalPage / QtyPage); i++) {
        PageNambers.push(i)
    }

    return (
        <div style={{ display: 'flex' }}>
            {PageNambers.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

export default Pagination