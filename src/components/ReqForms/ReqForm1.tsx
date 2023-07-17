import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {vehicleType, vehicleCategory} from '../../utils/data';
import SelectionCard from '../Cards/selectionCard';
import {
  RequestContextProps,
  RequestContext,
} from '../../context/RequestContext';

const ReqForm1 = () => {
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const [catIndex, setCatIndex] = useState<number>(0);
  const {request, setRequest, validateRequest} =
    React.useContext<RequestContextProps>(RequestContext);
  return (
    <ScrollView className="w-full px-2 flex-1 mt-7">
      <View className='flex-col space-y-5 mb-5'>
        <Text className="font-sans font-bold text-black text-xl">
          Select Vehicle Type
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={vehicleType}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SelectionCard item={item} index={typeIndex} onpress={() => {
              setRequest((prev) => {
                return {
                  ...prev,
                  vecType: item.name,
                };
              });
              setTypeIndex(item.id);
            }} />
          )}
        />
      </View>
      <View className='flex-col space-y-5 mb-5'>
        <Text className="font-sans font-bold text-black text-xl">
          Select Vehicle Category
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={vehicleCategory}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SelectionCard item={item} index={catIndex} onpress={() => {
              setRequest((prev) => {
                return {
                  ...prev,
                  vecCat: item.name,
                };
              });
              setCatIndex(item.id);
            }} />
          )}
        />
      </View>

      {/* <View>
        <Text>Select Vehicle Mode</Text>
        <View>
          <Text>aaa</Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default ReqForm1;
