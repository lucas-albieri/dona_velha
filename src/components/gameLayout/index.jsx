import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Winner } from "../winner";
export const Game = () => {

    const buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const [ values, setValues ] = useState( getInitialState );
    const [ player, setPlayer ] = useState( 1 );
    const [ winner, setWinner ] = useState( null );

    function getInitialState() {
        const state = {};

        for ( let row = 0; row <= 3; row++ ) {
            for ( let col = 0; col <= 3; col++ ) {
                state[ row + '-' + col ] = null;
            }
        }
        return state;
    }

    const getKey = ( index ) => {

        const row = Math.floor( index / 3 );
        const col = index % 3;

        return `${ row }-${ col }`;
    };

    function handleClick( key ) {
        if ( winner || values[ key ] ) {
            return;
        }
        const newValues = {
            ...values,
            [ key ]: player
        };
        setValues( newValues );
        setPlayer( player * -1 );
        const newWinner = getWinner( newValues );
        console.log( newWinner );

        if ( newWinner != null ) {
            setWinner( newWinner > 0 ? 1 : -1 );
        }
    }

    const getLabel = ( value ) => {
        if ( value === null ) {
            return '';
        }
        return value > 0 ? 'O' : 'X';
    };

    function getWinner( v ) {
        for ( let row = 0; row <= 3; row++ ) {
            for ( let col = 0; col <= 3; col++ ) {
                const sumRow =
                    v[ `${ row }-${ col }` ] +
                    v[ `${ row }-${ col + 1 }` ] +
                    v[ `${ row }-${ col + 2 }` ];
                if ( sumRow === 3 || sumRow === -3 ) {
                    return sumRow;
                }

                const sumCol =
                    v[ `${ row }-${ col }` ] +
                    v[ `${ row + 1 }-${ col }` ] +
                    v[ `${ row + 2 }-${ col }` ];
                if ( sumCol === 3 || sumCol === -3 ) {
                    return sumCol;
                }

                const sumDiagonal =
                    v[ `${ row }-${ col }` ] +
                    v[ `${ row + 1 }-${ col + 1 }` ] +
                    v[ `${ row + 2 }-${ col + 2 }` ];
                if ( sumDiagonal === 3 || sumDiagonal === -3 ) {
                    return sumDiagonal;
                }

                const sumReverseDiagonal =
                    v[ `${ row }-${ col }` ] +
                    v[ `${ row + 1 }-${ col - 1 }` ] +
                    v[ `${ row + 2 }-${ col - 2 }` ];
                if ( sumReverseDiagonal === 3 || sumReverseDiagonal === -3 ) {
                    return sumReverseDiagonal;
                }
            }
        }
        return null;
    }

    function reset() {
        setValues( getInitialState() );
        setWinner( null );
        setPlayer( 1 );
    }

    const itsDraw = Object.values( values ).filter( Boolean ).length === 9 && !winner;

    const { cookies } = useCookies( [ 'player1' ] );

    console.log( cookies );

    return (
        <Box
            position={ "relative" }
            width={ "450px" }
            height={ "450px" }
            marginTop={ "2rem" }
        >

            <Box
                display={ 'grid' }
                gridTemplateColumns={ 'repeat(3, 1fr)' }
                width={ '100%' }
                height={ '100%' }
            >
                {
                    buttons.map( ( button, index ) => {
                        const key = getKey( index );
                        return (
                            <Button
                                key={ key }
                                variant={ "ghost" }
                                border={ '2px solid #fff' }
                                fontSize={ '4rem' }
                                lineHeight={ 0 }
                                color={ 'white' }
                                cursor={ 'pointer' }
                                backgroundColor={ 'transparent' }
                                onClick={ () => handleClick( key ) }
                            >
                                { getLabel( values[ key ] ) }
                            </Button>
                        );
                    } )
                }
            </Box>
            {
                ( winner || itsDraw ) && <Winner
                    winner={ winner }
                    itsDraw={ itsDraw }
                    reset={ reset }
                />
            }
        </Box>

    );
};

export default Game;