import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import { vehicleTypes } from '../../utils/data';
import SelectionCard from '../Cards/selectionCard';

const ReqForm3 = () => {
  return (
    <ScrollView className='w-full px-2'>
      <View>
        <Text>Select Vehicle Type 3</Text>
              <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={vehicleTypes}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                      <SelectionCard item={item} />
                    )}
              />
          </View>
          
          

      <View>
        <Text>Select Vehicle Mode</Text>
        <View>
          <Text>aaa</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReqForm3;
