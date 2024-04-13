
import { Text, Image, Box, Stack, Heading,Flex,Grid } from "@chakra-ui/react";
import { products } from "./mocks";
const ProductChild = ({ imageSrc, imageAlt, title, category, price }) => (
  <Stack p={{ base: "0 2rem" }}>
    <Image objectFit="cover" src={imageSrc} alt={imageAlt} />
    <Text color="teal.600" textTransform="uppercase">
      {category}
    </Text>

    <Heading color="teal.300" size="md" textTransform="capitalize">
      {title}
    </Heading>
    <Box>
      {price}
      <Box as="span" color="gray.600" fontSize="sm">
        / unit
      </Box>
    </Box>
  </Stack>
);

const Product=()=>{
    return (
        <Flex
          direction="column"
          justifyContent="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
          minH="100vh"
        >
          <Grid
            w="full"
            gridGap="5"
            gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
          >
            {products.map((p) => (
              <ProductChild key={p.id} {...p} />
            ))}
          </Grid>
        </Flex>
      );
}
export default Product;