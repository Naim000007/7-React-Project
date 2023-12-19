import React, { useEffect } from 'react'
import  axios  from 'axios'
import CoinCart from './CoinCart'
import { server } from '../main'
import {Container, HStack, VStack,Image, Heading,Button, Text} from '@chakra-ui/react'
import Loader from '../Components/Loader'


const Coins = () => {
  const [coins , setCoins] = React.useState([])
  const [loading , setLoading] = React.useState(true)
  const [page , setPage] = React.useState(1);
  const [currency , setCurrency] = React.useState('bdt');

  useEffect (()=>{
    const fetchCoins = async()=>{

      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

      
      setCoins(data);
      setLoading(false)
    };
    fetchCoins();
  },[currency, page])
  return (
    <Container maxW={"container.xl"}>
    {loading ? (
      <Loader />
    ) : (
      <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinCart
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
              current_price={i.current_price}
              symbol = {i.symbol}
            />
          ))}
        </HStack>

        <HStack>
          <Button bgColor={"blackAlpha.900 "} color={"white"}  onClick={()=>changePage(2)}>2</Button>
        </HStack>
      </>
    )}
  </Container>
);
};

const ExchangesCard = ({name , img, rank , url})=>(
  <a href={url} target={"blank"}>
  <VStack
    w={"52"}
    shadow={"lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
  >
    <Image
      src={img}
      w={"10"}
      h={"10"}
      objectFit={"contain"}
      alt={"Exchange"}
    />
    <Heading size={"md"} noOfLines={1}>
      {rank}
    </Heading>

    <Text noOfLines={1}>{name}</Text>
  </VStack>
</a>
);


export default Coins
