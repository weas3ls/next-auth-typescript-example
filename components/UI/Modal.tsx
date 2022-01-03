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

const Modal = ({ children, ...props }: { children: any; header: string; buttonText: string }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button variant="link" onClick={onOpen}>
                {props.buttonText}
            </Button>
            <ChakraModal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.header}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
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
