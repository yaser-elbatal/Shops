import { COLORS, moderateScale } from "@common";
import React, { useCallback } from "react";
import { FlatList, RefreshControl, ActivityIndicator, } from "react-native";




export const List = ({
  data,
  renderItem,
  refreshing,
  onRefresh,
  loadMore,
  onEndReached,
  ListFooterComponent,
  extraData,
  ListEmptyComponent,
  horizontal = false,
  numColumns,
  ...props
}) => {


  const renderFooter = () => {
    if (!loadMore) return null;
    return (
      <ActivityIndicator
        size={moderateScale(22)}
        color={COLORS.main}
        style={{ marginBottom: moderateScale(9) }}
      />
    );
  };

  const keyExtractor = useCallback((item, index) => index.toString(), []);
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      extraData={extraData}
      ListEmptyComponent={ListEmptyComponent}
      horizontal={horizontal}
      numColumns={numColumns}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[COLORS.main, COLORS.grey, COLORS.lightgrey]}
        />}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={ListFooterComponent || renderFooter}
      onEndReachedThreshold={0.4}
      {...props}

    />
  );
};
