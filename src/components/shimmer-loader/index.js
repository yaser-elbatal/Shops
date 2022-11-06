import React from 'react'
import { moderateScale, scale, verticalScale, width } from '@common'
const { ShimmerLoading } = require("./ShimmerLoading")

export const MainLoader = () => {
    return (
        <ShimmerLoading
            numberOfRows={5}
            width={width / 2 - scale(15)}
            height={moderateScale(180)}
            rowStyle={{ marginTop: 5, marginBottom: 0 }}
            containerStyle={{ flexDirection: "row", flexWrap: 'wrap', alignItems: "center", marginTop: 3, justifyContent: 'center' }}
        />
    )
}

export const ShimmerCard = () => {
    return (
        <ShimmerLoading
            numberOfRows={5}
            width={width - scale(15)}
            height={moderateScale(150)}
            rowStyle={{ marginTop: 5, marginBottom: 0 }}
            containerStyle={{ alignItems: "center", marginTop: verticalScale(120), justifyContent: 'center' }}
        />
    )
}