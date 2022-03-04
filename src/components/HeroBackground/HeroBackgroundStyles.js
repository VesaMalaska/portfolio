import styled from 'styled-components';

export const Div1 = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
 
    canvas {
        height: 600px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        top: 100px;

        canvas {
            height: 300px;
        }
      }
`;