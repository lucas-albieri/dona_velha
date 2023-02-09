import { Box, Image, Text } from "@chakra-ui/react";
import loading from "../../assets/loading.gif";
import gif from '../../assets/CTM.gif';
export const Loading = () => {
    return (
        <Box
            w={ '100%' }
            h={ '100vh' }
            backgroundImage={ `url(${ gif })` }
            backgroundSize="contain"
            display={ 'flex' }
            flexDirection={ 'column' }
            alignItems={ 'center' }
            justifyContent={ 'center' }
        >
            <Image
                src={ loading }
                alt={ 'loading' }
                w={ '100%' }
                h={ '30%' }
                objectFit={ 'contain' }
            />

            <Text
                fontSize={ '1.3rem' }
                color={ 'white' }
                textAlign={ 'center' }
                mt={ 10 }
                animation={ 'loading 1s infinite' }

            >
                Carregando...
            </Text>
        </Box>
    );
};