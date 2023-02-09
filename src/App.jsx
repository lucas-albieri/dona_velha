
import './styles/global_styles.css';
import wave from './assets/wave.svg';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import Game from './components/gameLayout';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function App() {

  const [ cookies, setCookie, removieCookie ] = useCookies( [ 'player1', 'player2' ] );

  const [ player1, setPlayer1 ] = useState( '' );
  const [ player2, setPlayer2 ] = useState( '' );

  if ( !cookies.player1 || !cookies.player2 ) {
    return (
      <Box
        width="100%"
        height="100vh"
        backgroundImage={ `url(${ wave })` }
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display={ 'flex' }
        flexDirection={ 'column' }
        py={ 40 }
        alignItems={ 'center' }
      >
        <Text
          fontSize={ [ '1rem', '1.5rem', '2rem', '2.5rem' ] }
          fontWeight="bold"
          color="#fff"
        >
          Quem são os jogadores?
        </Text>

        <FormControl
          width={ [ '80%', '60%', '40%', '30%' ] }
          mt={ 40 }
        >
          <FormLabel
            color={ 'white' }
          >
            Nome do jogador 1
          </FormLabel>
          <Input
            placeholder="Ex: Carlos"
            onChange={ ( e ) => setPlayer1( e.target.value ) }
            variant="outline"
            w={ '100%' }
            borderRadius={ '0.35rem' }
            border={ 'solid 1px white' }
            bgColor={ 'transparent' }
            color={ 'white' }
            _placeholder={ { fontWeight: '400' } }
            fontSize={ [ '0.8rem', '1rem', '1.2rem', '1.2rem' ] }
            fontWeight={ 500 }
            py={ 10 }
            px={ 10 }
            mt={ 6 }
          />
        </FormControl>

        <FormControl
          width={ [ '80%', '60%', '40%', '30%' ] }
          mt={ 40 }
        >
          <FormLabel
            color={ 'white' }
          >
            Nome do jogador 2
          </FormLabel>
          <Input
            placeholder="Ex: Maria"
            onChange={ ( e ) => setPlayer2( e.target.value ) }
            variant="outline"
            w={ '100%' }
            borderRadius={ '0.35rem' }
            border={ 'solid 1px white' }
            bgColor={ 'transparent' }
            color={ 'white' }
            _placeholder={ { fontWeight: '400' } }
            fontSize={ [ '0.8rem', '1rem', '1.2rem', '1.2rem' ] }
            fontWeight={ 500 }
            py={ 10 }
            px={ 10 }
            mt={ 6 }
          />
        </FormControl>

        <Button
          onClick={ () => { } }
          bg={ 'white' }
          color={ ' #0f1011 ' }
          variant={ 'unstyled' }
          borderRadius={ '0.35rem' }
          padding={ '0.8rem 1.5rem' }
          border={ 'none' }
          mt={ 60 }
          width={ [ '80%', '60%', '40%', '30%' ] }
        >
          Iniciar o jogo
        </Button>
      </Box>
    );
  }

  return (
    <Box
      width="100%"
      height="100vh"
      backgroundImage={ `url(${ wave })` }
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Text
        textAlign="center"
        fontSize={ [ '2rem', '3rem', '4rem', '5rem' ] }
        fontWeight="bold"
        textShadow="-1px 5px 5px  #7747E0"
        color="#fff"
      >
        Dona Velha
      </Text>
      <Box
        width="100%"
        display={ 'flex' }
        justifyContent={ 'center' }
      >
        <Game />
      </Box>
    </Box>
  );
}

export default App;
