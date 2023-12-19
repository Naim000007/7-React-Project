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
   
  const changePage = (page)=>{
    setPage(page)
    setLoading(true)
  }
  const btns = new Array(132).fill(1 )
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

        <HStack w={"full"} overflowX={"auto"} margin={"8"}> 
          {
            btns.map((item, index)=>(
              <Button bgColor={"blackAlpha.900"}
              key={index}
              color={"white"} onClick={()=> changePage(index+1)}>
                {index+1}
              </Button>
            ))
          }
        </HStack>
      </>
    )}
  </Container>
);
};



export default Coins
