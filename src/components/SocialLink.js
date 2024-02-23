import React from 'react'

const SocialLink = ({href, icon, itemClass}) => {
  return (
    <li>
            <a href={href} target="_blank" class={itemClass}
              ><i class={icon}>
                </i></a>
                    </li>
  )
}

export default SocialLink