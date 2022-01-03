import {
    ModalContent,
    Modal as ChakraModal,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from "@chakra-ui/react";
import React from "react";
import ToSandPP from "../ToSandPP";

const Modal = ({ ...props }: { header: string }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button variant="link" onClick={onOpen}>
                Terms of Service and Privacy Policy
            </Button>
            <ChakraModal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.header}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ToSandPP />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </ChakraModal>
        </>
    );
};

export default Modal;
