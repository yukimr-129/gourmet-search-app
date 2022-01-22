import { Image } from '@chakra-ui/image'
import { Box, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/table'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { Tag } from '@chakra-ui/tag'
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api'
import { useLocation} from 'react-router'
import React, { memo, useState, VFC } from 'react'

import { Shop } from '../../types/api/Shop'
import { TagLeftIcon, TagLabel } from '@chakra-ui/react'
import { AiFillMoneyCollect } from "react-icons/ai"
import { IoFastFood, IoNotificationsSharp } from "react-icons/io5"
import { MdPlace } from "react-icons/md"


const StoreDetail: VFC = memo(() => {
    const [infoWindow, setInfoWindow] = useState(true)
    const { state }: {state: Shop}  = useLocation()
    const mapKey: string | undefined = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    
    //ウィンドウ閉じた際にマーカーを表示
    const onCloseInfoWindow = () => {
        setInfoWindow(!infoWindow)
    }

    //GoogleMapのスタイル
    const containerStyle = {
        width: '100%',
        height: '100vh',
      };
      
    const center = {
        lat: 35.69575,
        lng: 139.77521,
    };
    
    return (
            <Box bg='white' w={{base: '100%', md: '70%'}} minHeight={{base: '100%', md: '100vh'}} mx='auto'>
                <Box p={{base: 3, md: 8}}>
                    <Flex direction='column' justify='center' w='100%' h={{sm: '60vh', md: '20vh', xl: '60vh'}}>
                        <Box>
                            <Flex align='center' mb={5}>
                                <Image src={state.logo_image} objectFit='cover'/>
                                <Text fontSize='4xl' fontWeight='800' pl={3}>{state.name}</Text>
                            </Flex>
                            <Stack spacing='5'>
                                <Flex>
                                    <HStack>
                                        <Tag variant="solid" colorScheme="teal" w='100px' textAlign='center'>
                                            <TagLeftIcon boxSize="17px" as={AiFillMoneyCollect} />
                                            <TagLabel>予算</TagLabel>
                                        </Tag>
                                        <Text fontSize="md" w={{base: '200px', md: '250px'}}>
                                            {state.budget.name}
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <HStack>
                                        <Tag variant="solid" colorScheme="teal" w='100px'>
                                            <TagLeftIcon boxSize="17px" as={IoFastFood} />
                                            <TagLabel>ジャンル</TagLabel>
                                        </Tag>
                                        <Text fontSize="md" w={{base: '200px', md: '250px'}}>
                                            {state.genre.name} / {state.sub_genre?.name}
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <HStack>
                                        <Tag variant="solid" colorScheme="teal" w='100px'>
                                            <TagLeftIcon boxSize="17px" as={MdPlace} />
                                            <TagLabel>エリア</TagLabel>
                                        </Tag>
                                        <Text fontSize="md" w={{base: '200px', md: '250px'}}>
                                            {state.large_area.name} / {state.middle_area.name}
                                        </Text>
                                    </HStack>
                                </Flex>
                                <Flex>
                                    <HStack>
                                        <Tag variant="solid" colorScheme="teal" w='100px'>
                                            <TagLeftIcon boxSize="17px" as={IoNotificationsSharp} />
                                            <TagLabel>特徴</TagLabel>
                                        </Tag>
                                        <Text fontSize="md" w={{base: '200px', md: '250px'}}>
                                            {state.catch}
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
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>アクセス</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.access}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>駐車場</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.parking}</Td>
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
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>平均予算</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.budget.average}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>料金備考</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.budget_memo ? state.budget_memo : '特になし'}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>クレジットカード</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.card}</Td>
                                    </Tr>
                                    <Tr>
                                        <Th fontSize={{base: 'xs', md: 'lg'}}>喫煙・禁煙</Th>
                                        <Td fontSize={{base: 'xs', md: 'lg'}}>{state.non_smoking}</Td>
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
                                >
                                    {infoWindow ? (
                                        <InfoWindow position={{lat: state.lat, lng: state.lng}} onCloseClick={onCloseInfoWindow}>
                                            <Box>
                                                <Text fontWeight='bold'>{state.name}</Text>
                                            </Box>
                                        </InfoWindow>
                                    ): (
                                        <Marker position={{lat: state.lat, lng: state.lng}} />
                                    )}
                                </GoogleMap>
                            </LoadScript>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
    )
})

export default StoreDetail
