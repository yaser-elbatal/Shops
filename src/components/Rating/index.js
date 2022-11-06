import React, { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "@common";
import { Rating, } from 'react-native-ratings';

export const Ratings = ({
  containerStyles,
  starSize,
  starStyle,
  onStarRatingPress,
  disabled,
  rating,
  ...props
}) => {
  const [rate, setRate] = useState(rating);

  const selectedStar = (e) => {
    onStarRatingPress && onStarRatingPress(e);
    setRate(e);
  };
  return useMemo(() => {
    return (

      <Rating
        type='star'
        startingValue={rating}
        // showRating
        ratingCount={5}
        onFinishRating={selectedStar}
        readonly={disabled || false}
        style={[styles.containerStyle, containerStyles]}
        imageSize={starSize}
        fractions={0}
        {...props}
      />

    );
  }, [rate]);
};

const styles = StyleSheet.create({
  starStyle: {
    padding: 0,
    marginHorizontal: 0.5,
    fontSize: moderateScale(10)
  },
  containerStyle: {
    // alignSelf: "flex-start",
  },
});
