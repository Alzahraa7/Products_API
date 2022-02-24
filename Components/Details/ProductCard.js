import {
  Text,
  Box,
  Button,
  Avatar,
  HStack,
  VStack,
  Spacer,
  HamburgerIcon,
  InfoOutlineIcon,
} from "native-base";
const ProductCard = ({ product , navigation}) => {
  if (product.id) {
    return (
      <>
        <Box
          bgColor="pink.100"
          borderBottomWidth="1"
          _dark={{
            borderColor: "blue.600",
          }}
          borderColor="blue.200"
          pl="4"
          pr="5"
          py="2"
        >
          <HStack space={3} justifyContent="space-between" flexDirection="row">
            <Avatar
              size="48px"
              source={{
                uri: product.image,
              }}
            />
            
            <VStack flexShrink="1">
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                bold
              >
                {product.title}
              </Text>
              <Text
                flexShrink="1"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {product.price} EGP
              </Text>
            </VStack>
            
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              alignSelf="flex-start"
              >
              {product.category}
              </Text>
              </HStack>
              <Button maxWidth='10' maxHeight='10' alignSelf='flex-end'  bgColor={'blue.100'} onPress={()=>{
                navigation.navigate({name:'Details',params:{
                    id:product.id
                }})
              }}>
                  <InfoOutlineIcon maxWidth='5'/>
              </Button>
              </Box>
      </>
    );
  }
  return <Text> No Products Avaliable </Text>;
};

export default ProductCard;
