
import './styles/global_styles.css';
import wave from './assets/wave.svg';
import { Box, Button, FormControl, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import Game from './components/gameLayout';
import React, { useState } from 'react';
import gif from './assets/CTM.gif';
import mario from './assets/mario.gif';
import pikachu from './assets/pikachu.gif';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import ReactPlayer from 'react-player/lazy';
import Swal from 'sweetalert2';
import music from './assets/music.mp3';
import { Loading } from './components/loading';
import { parseCookies, setCookie } from 'nookies';

function App() {

  const [ player1, setPlayer1 ] = useState( '' );
  const [ player2, setPlayer2 ] = useState( '' );
  const [ musicOn, setMusicOn ] = useState( false );
  const [ loading, setLoading ] = useState( false );

  const cookies = parseCookies();

  if ( loading ) {
    return <Loading />;
  }

  if ( !cookies.player1 || !cookies.player2 ) {

    return (
      <Box
        width="100%"
        height="100vh"
        backgroundImage={ `url(${ gif })` }
        backgroundSize="contain"
        bgColor={ '#000000' }
        bgPosition={ 'top' }
        display={ 'flex' }
        flexDirection={ 'column' }
        py={ 40 }
        alignItems={ 'center' }
        position={ 'relative' }
      >
        <Box
          position={ 'absolute' }
          top={ 30 }
          right={ 30 }
          onClick={ () => setMusicOn( !musicOn ) }
          cursor={ 'pointer' }
        >
          {
            musicOn ? <SpeakerWaveIcon
              color='white'
              width={ 30 }
            />
              :
              <SpeakerXMarkIcon
                color='white'
                width={ 30 }
              />
          }

        </Box>

        <ReactPlayer
          url={ music }
          autoPlay={ true }
          loop={ true }
          playing={ musicOn }
          style={ { display: 'none' } }
          volume={ 0.02 }
        />

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
            border={ 'none' }
            bgColor={ 'white' }
            color={ 'black' }
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
            border={ 'none' }
            bgColor={ 'white' }
            color={ 'black' }
            _placeholder={ { fontWeight: '400' } }
            fontSize={ [ '0.8rem', '1rem', '1.2rem', '1.2rem' ] }
            fontWeight={ 500 }
            py={ 10 }
            px={ 10 }
            mt={ 6 }
          />
        </FormControl>

        <Button
          onClick={ () => {
            if ( player1 === '' || player2 === '' ) return Swal.fire( {
              title: 'Ops!',
              text: 'Preencha os nomes dos jogadores',
              icon: 'error',
              confirmButtonText: 'Ok'
            } );
            setLoading( true );
            setTimeout( () => {
              setCookie( null, 'player1', player1, {
                path: '/',
              } );
              setCookie( null, 'scoreP1', 0, {
                path: '/',
              } );
              setCookie( null, 'scoreP2', 0, {
                path: '/',
              } );
              setCookie( null, 'player2', player2, {
                path: '/',
              } );
              setLoading( false );
            }, 2000 );

          } }
          bg={ '#633cb6' }
          color={ ' white ' }
          borderRadius={ '0.35rem' }
          py={ '0.8rem' }
          border={ 'none' }
          mt={ 60 }
          width={ [ '80%', '60%', '40%', '30%' ] }
          fontSize={ [ '0.8rem', '1rem', '1.2rem', '1.2rem' ] }
          fontWeight={ 500 }
          cursor={ 'pointer' }
          transition={ 'all 0.2s' }
          _hover={ { bg: '#5533a0' } }
        >
          Iniciar o jogo
        </Button>
        <Box>
          <Image
            src={ mario }
            width={ [ '0%', '0%', '0%', '6%' ] }
            position={ 'absolute' }
            bottom={ 20 }
            left={ 20 }

          />
          <Image
            src={ pikachu }
            width={ [ '0%', '0%', '0%', '10%' ] }
            position={ 'absolute' }
            bottom={ 20 }
            right={ 20 }
          />
        </Box>
      </Box>
    );
  }


  return (
    <Box
      width="100%"
      position={ 'relative' }
      height="100vh"
      backgroundImage={ `url(${ wave })` }
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        position={ 'absolute' }
        top={ 30 }
        right={ 30 }
        onClick={ () => setMusicOn( !musicOn ) }
        cursor={ 'pointer' }
      >
        {
          musicOn ? <SpeakerWaveIcon
            color='white'
            width={ 30 }
          />
            :
            <SpeakerXMarkIcon
              color='white'
              width={ 30 }
            />
        }

      </Box>
      <ReactPlayer
        url={ music }
        autoPlay={ true }
        loop={ true }
        playing={ musicOn }
        style={ { display: 'none' } }
        volume={ 0.02 }
      />
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
        {/* jogador da esquerda */ }
        <Box
          w={ '33%' }
          display={ 'flex' }
          alignItems={ 'center' }
          flexDirection={ 'column' }

        >
          <Text
            fontSize={ [ '1rem', '1.5rem', '2rem', '2.5rem' ] }
            color="#fff"
          >
            { cookies.player1 }:
          </Text>
          <Text
            fontSize={ [ '1rem', '1.5rem', '2rem', '5rem' ] }
            color="#fff"
            fontWeight={ 'bold' }
          >
            O
          </Text>
        </Box>

        {/* jogo */ }
        <Box
          w={ '33%' }
          display={ 'flex' }
          justifyContent={ 'center' }
          alignItems={ 'center' }
        >
          <Game />

        </Box>

        {/* jogador da direita */ }
        <Box
          w={ '33%' }
          display={ 'flex' }
          alignItems={ 'center' }
          flexDirection={ 'column' }
        >
          <Text
            fontSize={ [ '1rem', '1.5rem', '2rem', '2.5rem' ] }
            color="#fff"
          >
            { cookies.player2 }:
          </Text>
          <Text
            fontSize={ [ '1rem', '1.5rem', '2rem', '5rem' ] }
            color="#fff"
            fontWeight={ 'bold' }
          >
            X
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
