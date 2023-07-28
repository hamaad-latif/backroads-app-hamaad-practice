import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = ({ itemClass }) => {
    return (
        <>
            {' '}
            {socialLinks.map((socialLink) => {
                return (
                    <SocialLink
                        {...socialLink}
                        key={socialLink.id}
                        itemClass={itemClass}
                    />
                )
            })}
        </>
    )
}

export default SocialLinks
