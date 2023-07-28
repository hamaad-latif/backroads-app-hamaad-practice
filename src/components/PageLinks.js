import React from 'react'
import PageLink from './PageLink'
import { pageLinks } from '../data'

const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id="nav-links">
            {pageLinks.map((pageLink) => {
                return (
                    <PageLink
                        {...pageLink}
                        itemClass={itemClass}
                        key={pageLink.id}
                    />
                )
            })}
        </ul>
    )
}

export default PageLinks