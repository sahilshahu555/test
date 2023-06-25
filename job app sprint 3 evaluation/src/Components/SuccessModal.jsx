import {Modal,Text,Button} from '@chakra-ui/react'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const SuccessModal = ({isOpen, onOpen, onClose,title,company}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text className='apply_message'>Congratulation on Your Application Submitted At {company} For {title} Role.</Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='green' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
};

export default SuccessModal;
