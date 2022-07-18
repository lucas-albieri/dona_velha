import React, { useState } from "react";
import './style.css';
export const Game = () => {

    const buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const [ values, setValues ] = useState( getInitialState );
    const [ player, setPlayer ] = useState( 1 );

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
        setValues( { ...values, [ key ]: player } );
        setPlayer( player * -1 );
    }

    return (
        <div className="game">
            <div className="game_menu">

            </div>
            <div className="game_board">
                {
                    buttons.map( ( button, index ) => {
                        return (
                            <button
                                onClick={ () => handleClick( getKey( index ) ) }
                                key={ index } className="game_button">
                                { getKey( index ) }
                            </button>
                        );
                    } )
                }
            </div>
        </div>

    );
};

export default Game;