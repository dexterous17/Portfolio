import React from 'react'

export default function Link({data}) {
    const github = "https://github.com/dexterous17?tab=repositories"
    return (
        <div>
            <a href={data.href} target={data.href}>{data.Name}</a>
        </div>
    )
}
