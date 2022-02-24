import { Center, Heading, HStack, Image, Spinner, Text, VStack } from "native-base";
import { useContext, useEffect } from "react";
import { getProductsDetails, clear } from "../../Actions/Actions";
import { ProductsContext } from "../../Context/context";

const Details = ({route}) =>{
    const {state,dispatch} = useContext(ProductsContext);
    const {proDetails} = state;
    console.log(state);
    useEffect(()=>{
        const action = async()=>{
            dispatch(await getProductsDetails(route.params.id))
        }
        action();

        return ()=>{
            dispatch(clear())
        }
    },[])
    if(proDetails.id){
    return(
        <>
        <VStack>
            <Center>
            <Image marginTop='5' width='200' height='200' source={{uri:proDetails.image}} />
            </Center>
            <HStack>
            <Text fontSize='20' fontWeight={'bold'} fontFamily='mono'>
                {proDetails.title}
            </Text>
            <Text fontSize={'20'} fontWeight='bold' style={{color:'green'}}>
                {proDetails.price}EGP
            </Text>
            </HStack>
            <Text fontSize={'16'} fontWeight='semibold'>
                {proDetails.description}
            </Text>
        </VStack>
        </>
    )
}
else return(
    <HStack space={2} justifyContent="center" alignItems="center">
      <Spinner accessibilityLabel="Loading posts" justifyContent="center" alignItems="center"/>
      <Heading color="primary.500" fontSize="lg">
        Loading
      </Heading>
    </HStack>
)
}

export default Details;