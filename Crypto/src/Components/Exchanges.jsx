import React, { useEffect } from 'react'
import  axios  from 'axios'
import { server } from '../main'
import {Container, HStack, VStack,Image, Heading, Text} from '@chakra-ui/react'
import Loader from '../Components/Loader'


const Exchanges = () => {
  const [exchanges , setExchange] = React.useState([])
  const [loading , setLoading] = React.useState(true)
  

  useEffect (()=>{
    const fetchExchanges = async()=>{
      const {data} = await axios.get(`${server}/exchanges`);
      
      setExchange(data);
      setLoading(false)
    };
    fetchExchanges();
  },[])
  return (
    <Container maxW={"container.xl"}>
    {loading ? (
      <Loader />
    ) : (
      <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((i) => (
            <ExchangesCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
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

export default Exchanges










