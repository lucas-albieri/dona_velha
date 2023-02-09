import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, Box, Divider } from "@chakra-ui/react";
import React from "react";

export const Winner = ( { winner, itsDraw, reset } ) => {
    return (
        <Modal
            isOpen={ true }
            onClose={ reset }
            isCentered
        >
            <ModalContent>
                <ModalBody
                    display={ 'flex' }
                    flexDirection={ 'column' }
                    alignItems={ 'center' }
                    py={ 26 }
                    width={ '100%' }
                    height={ '100vh' }
                    bgColor={ '#0f1011' }

                >
                    {
                        itsDraw ?
                            <Box
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                justifyContent={ 'center' }
                            >
                                <Text
                                    fontSize={ '6rem' }
                                    fontWeight={ 'bold' }
                                    color={ 'white' }
                                >
                                    EMPATE
                                </Text>
                                <Text
                                    fontSize={ '1.2rem' }
                                    color={ 'white' }
                                >
                                    Infelizmente não houve ganhador, mas não desista, tente novamente!
                                </Text>
                                <Button
                                    onClick={ reset }
                                    bg={ 'white' }
                                    color={ '#0f1011' }
                                    variant={ 'unstyled' }
                                    borderRadius={ '0.5rem' }
                                    padding={ '0.8rem 1.5rem' }
                                    border={ 'none' }
                                    fontSize={ '1.5rem' }
                                    mt={ 40 }
                                    cursor={ 'pointer' }
                                    fontWeight={ 500 }
                                >
                                    Reiniciar o jogo
                                </Button>
                            </Box>
                            :
                            <Box
                                display={ 'flex' }
                                flexDirection={ 'column' }
                                alignItems={ 'center' }
                                justifyContent={ 'center' }
                            >
                                <Text
                                    fontSize={ '2.2rem' }
                                    fontWeight={ 500 }
                                    color={ 'white' }
                                >
                                    O ganhador foi:
                                </Text>
                                <Text
                                    fontSize={ '6rem' }
                                    fontWeight={ 'bold' }
                                    color={ 'white' }
                                >
                                    { winner > 0 ? 'O' : 'X' }
                                </Text>
                                <Button
                                    onClick={ reset }
                                    bg={ 'white' }
                                    color={ ' #0f1011 ' }
                                    variant={ 'unstyled' }
                                    borderRadius={ '0.5rem' }
                                    padding={ '0.8rem 1.5rem' }
                                    border={ 'none' }
                                    fontSize={ '1.5rem' }
                                    mt={ 40 }
                                    cursor={ 'pointer' }
                                    fontWeight={ 500 }
                                >
                                    Reiniciar o jogo
                                </Button>
                            </Box>
                    }
                    <Divider
                        bgColor={ 'white' }
                        width={ '50%' }
                        mt={ 40 }
                        height={ 2 }
                    />
                    <Box
                        display={ 'flex' }
                        flexDirection={ 'column' }
                        justifyContent={ 'center' }
                        alignItems={ 'center' }
                        width={ '100%' }
                        mt={ 20 }
                    >
                        <Text
                            fontSize={ '2rem' }
                            fontWeight={ 500 }
                            color={ 'white' }
                        >
                            Placares
                        </Text>
                        <Box
                            mt={ 30 }
                            display={ 'flex' }
                            justifyContent={ 'space-between' }
                            width={ '30%' }
                        >
                            <Box>
                                <Text
                                    fontSize={ '1.8rem' }
                                    fontWeight={ 500 }
                                    color={ 'white' }
                                >
                                    Jon:
                                </Text>
                                <Text
                                    mt={ 10 }
                                    fontSize={ '1.5rem' }
                                    fontWeight={ 600 }
                                    bgColor={ '#7c47e0' }
                                    borderRadius={ '0.5rem' }
                                    padding={ '0.5rem 1rem' }
                                    color={ 'white' }
                                >
                                    10 vitórias
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={ '1.8rem' }
                                    fontWeight={ 500 }
                                    color={ 'white' }
                                >
                                    Lucas:
                                </Text>
                                <Text
                                    mt={ 10 }
                                    fontSize={ '1.5rem' }
                                    fontWeight={ 600 }
                                    bgColor={ '#e05b47' }
                                    borderRadius={ '0.5rem' }
                                    padding={ '0.5rem 1rem' }
                                    color={ 'white' }
                                >
                                    10 vitórias
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};