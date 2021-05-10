import { Image } from '@chakra-ui/image'
import { Box, Container, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import { shouldForwardProp } from '@chakra-ui/system'
import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/table'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { Tag } from '@chakra-ui/tag'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import React, { VFC } from 'react'
import { useLocation, useParams } from 'react-router'
import { Shop } from '../../types/api/Shop'


const StoreDetail: VFC = () => {
    const { state }: {state: Shop}  = useLocation()
    const mapKey: string | undefined = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    
    console.log(state);
    const containerStyle = {
        width: '100%',
        height: '100vh',
      };
      
    const center = {
        lat: 35.69575,
        lng: 139.77521,
    };
    
    return (
            <Box bg='white' w={{base: '100%', md: '90%'}} minHeight={{base: '100%', md: '100vh'}} mx='auto'>
                <Box p={3}>
                    <Flex direction='column' justify='center' w='100%' h={{sm: '50vh', md: '20vh', xl: '60vh'}}>
                        <Box p={5}>
                            <Flex align='center' mb={5}>
                                <Image src={state.logo_image} objectFit='cover'/>
                                <Text fontSize='4xl' fontWeight='800' pl={3}>{state.name}</Text>
                            </Flex>
                            <Stack spacing='5'>
                                <Flex>
                                    <HStack>
                                        <Tag variant="outline" colorScheme="gray">予算</Tag>
                                        <Text>
                                            {state.budget.name}
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <HStack>
                                        <Tag variant="outline" colorScheme="gray">ジャンル</Tag>
                                        <Text>
                                            {state.genre.name}
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <HStack>
                                        <Tag variant="outline" colorScheme="gray">エリア</Tag>
                                        <Text>
                                            {state.large_area.name}/{state.middle_area.name}
                                        </Text>
                                    </HStack>
                                </Flex>
                            </Stack>
                        </Box>
                    </Flex>
                </Box>
                <Divider />
                <Tabs isFitted colorScheme='gray' variant='line'>
                    <TabList mb="1em">
                        <Tab>Top</Tab>
                        <Tab>地図・アクセス</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Table size='md' minHeight='70vh'>
                                <Tbody>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>住所</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.address}</Td>
                                    </Tr>
                                    <Tr width='100%' >
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>営業時間</Th>
                                        <Td wordBreak='break-all' fontSize={{base: 'xs', md: 'lg'}}>{state.open}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>定休日</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.close}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>喫煙・禁煙</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.non_smoking}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>クレジットカード</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.card}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>Wi-Fi</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.wifi}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>詳細情報</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.urls.pc}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TabPanel>
                        <TabPanel>
                            <LoadScript googleMapsApiKey={`${mapKey}`}>
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={{lat: state.lat, lng: state.lng}}
                                    zoom={17}
                                ></GoogleMap>
                            </LoadScript>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
    )
}

export default StoreDetail
