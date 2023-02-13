import { Button, Modal, ModalBody, ModalContent, Text, Box, Divider } from "@chakra-ui/react";
import { parseCookies, setCookie } from "nookies";
import React, { useState } from "react";
import { ResetLoading } from "../resetLoading";

export const Winner = ( { winner, itsDraw, reset } ) => {

    const cookies = parseCookies();
    const [ isLoading, setIsLoading ] = useState( false );

    const resetScore = () => {
        setIsLoading( true );
        setTimeout( () => {
            setCookie( null, 'scoreP1', 0, {
                path: '/',
            } );
            setCookie( null, 'scoreP2', 0, {
                path: '/',
            } );
            setIsLoading( false );
            reset();
        }, 4000 );
    };

    if ( isLoading ) {
        return <ResetLoading />;
    }

    return (
        <Modal
            isOpen={ true }
            onClose={ reset }
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
                                    { winner === 1 ? cookies.player1 : cookies.player2 }
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
                        <Box
                            display={ 'flex' }
                            alignItems={ 'center' }
                            justifyContent={ 'center' }
                            position={ 'relative' }
                            width={ '50%' }
                        >
                            <Text
                                fontSize={ '2rem' }
                                fontWeight={ 500 }
                                color={ 'white' }
                                textAlign={ 'center' }

                            >
                                Placar
                            </Text>
                            <Button
                                onClick={ () => resetScore() }
                                variant={ 'unstyled' }
                                background={ 'linear-gradient(90deg, #477ce0 0%, #e07f47 100%)' }
                                backgroundClip={ 'text' }
                                WebkitBackgroundClip={ 'text' }
                                fontSize={ '1rem' }
                                position={ 'absolute' }
                                right={ 0 }
                                top={ 0 }
                                border={ 'none' }
                                cursor={ 'pointer' }

                            >
                                Zerar placar
                            </Button>
                        </Box>
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
                                    { cookies.player1 ?? 'Jogador 1' }:
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
                                    { cookies.scoreP1 ?? 0 } vitórias
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={ '1.8rem' }
                                    fontWeight={ 500 }
                                    color={ 'white' }
                                >
                                    { cookies.player2 ?? 'Jogador 2' }:
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
                                    { cookies.scoreP2 ?? 0 } vitórias
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};