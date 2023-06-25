import { Button, Text, Heading, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import SuccessModal from './SuccessModal';
const JobCard = ({ title, company, location, description, requirements, responsibilities }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Card>
      <CardHeader>
        <Heading>{title}</Heading>
      </CardHeader>

      <CardBody>
        <Heading>{company}</Heading>
        <Text className={'location'}>{location}</Text>
        <Text className={'description'}>Description:{description}</Text>
        <Text className={'requirements'}>Requirements:{requirements}</Text>
        <Text className={'responsibilities'}>Responsibilities:{responsibilities}</Text>
      </CardBody>

      <CardFooter>
        <Button onClick={onOpen}>Apply Now</Button>
      </CardFooter>
      <SuccessModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={title} company={company}/>
    </Card>
  );
};

export default JobCard;
