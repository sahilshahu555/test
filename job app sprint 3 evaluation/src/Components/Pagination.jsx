import { Stack, Button, Center } from '@chakra-ui/react'

const Pagination = ({ setPage }) => {
  return (

    <Stack className="pagination_btn_wrapper" spacing={5}>
      <Center spacing={5}>
        <Button className='pagination_btn' onClick={() => setPage(1)}>1</Button>
        <Button className='pagination_btn' onClick={() => setPage(2)}>2</Button>
        <Button className='pagination_btn' onClick={() => setPage(3)}>3</Button>
      </Center>
    </Stack>
  );
};

export default Pagination;
