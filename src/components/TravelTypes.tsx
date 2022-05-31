import { Box, Flex, Image, Text, Link, VStack } from "@chakra-ui/react"; 
export default function TravelTypes(){
  return(
    <Flex justifyContent="space-around" mt="80px">
      <Box w="150px" h="145px">
        <Link>
         <VStack spacing="24px">
           <Image src="/assets/cocktail 1.png"/>
          <Text>vida noturna</Text>
         </VStack>
        </Link>
      </Box>
      <Box w="150px" h="145px">
        <Link>
         <VStack spacing="24px">
           <Image src="/assets/surf 1.png"/>
          <Text>praia</Text>
         </VStack>
        </Link>
      </Box>
      <Box w="150px" h="145px">
        <Link>
         <VStack spacing="24px">
           <Image src="/assets/building 1.png"/>
          <Text>moderno</Text>
         </VStack>
        </Link>
      </Box>
      <Box w="150px" h="145px">
        <Link>
         <VStack spacing="24px">
           <Image src="/assets/museum 1.png"/>
          <Text>clássico</Text>
         </VStack>
        </Link>
      </Box>
      <Box w="150px" h="145px">
        <Link>
         <VStack spacing="24px">
           <Image src="/assets/earth 1.png"/>
          <Text>e mais...</Text>
         </VStack>
        </Link>
      </Box>
     
    </Flex>
  )
}