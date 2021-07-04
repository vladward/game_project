import React from "react"

function imageGame(phot) {
    return (
        (`gam.data.nameGame === ${'phot'}`)
            ? <img src="`${'phot'} + '.png'`" />
            : null
    )
}

export default imageGame