import { Box, Image, Modal, ModalBody, ModalContent, Text } from "@chakra-ui/react";
import loading from "../../assets/miranha.gif";
export const ResetLoading = () => {
    return (
        <Modal
            isOpen={ true }
            onClose={ () => { } }
        >
            <ModalContent>
                <ModalBody
                    display={ 'flex' }
                    flexDirection={ 'column' }
                    alignItems={ 'center' }
                    justifyContent={ 'center' }
                    py={ 26 }
                    width={ '100%' }
                    height={ '100vh' }
                    bgColor={ '#030303' }

                >
                    <Image
                        src={ loading }
                        alt={ 'loading' }
                        w={ '100%' }
                        h={ '70%' }
                        objectFit={ 'contain' }
                    />

                    <Text
                        fontSize={ '1.5rem' }
                        color={ 'white' }
                        textAlign={ 'center' }
                        mt={ -40 }
                        animation={ 'loading 1s infinite' }

                    >
                        Resetando sua partida...
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>

    );
};