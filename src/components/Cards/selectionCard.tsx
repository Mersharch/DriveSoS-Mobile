import { Image, Pressable, Text } from "react-native";
import Logger from "../../utils/Logger";
interface Props {
    item: {
        id: number;
        name: string;
        image: string;
    },
    onpress: () => void;
    index: number;
    // setIndex:React.Dispatch<React.SetStateAction<number>>
}

const SelectionCard = ({item, onpress, index}:Props) => {
  
    return (
      <Pressable onPress={onpress}  className={`flex-col items-center w-44  h-max rounded-lg py-4 px-2 border-2 space-y-4 mr-8 ${index === item.id ? 'border-primary-blue' : 'border-inputGray'}`}>
        <Image source={{ uri: item.image }} className='h-28 w-4/5 rounded-2xl' />
              <Text className='font-sans font-bold text-lg text-black text-center'>{item.name}</Text>
      </Pressable>
    );
  };
  
export default SelectionCard;
  
