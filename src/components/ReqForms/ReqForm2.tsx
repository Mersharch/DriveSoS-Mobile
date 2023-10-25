import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import { vehicleTypes } from '../../utils/data';
import SelectionCard from '../Cards/selectionCard';

const ReqForm2 = () => {
  return (
    <ScrollView className='w-full px-2 flex-1'>
      <View>
        <Text>Select Vehicle Type 2</Text>
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

export default ReqForm2;
