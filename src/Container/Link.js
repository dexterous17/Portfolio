import React from 'react'

export default function Link({data}) {
    return (
        <div>
            <a href={data.href} target={data.href}>{data.Name}</a>
        </div>
    )
}
