
import React from 'react';
import {Container,Line,Square,Circle} from './styles';
import {IfbaProps,IfbaSize} from '../../../interfaces/components/atoms'

const Index: React.FC<IfbaProps> = props => {
        const temp: number = props.width? props.width : 40;
        const size: IfbaSize = {
            width: temp,
            height: temp * 1.3,
            square: (temp/3) - (temp * 0.02),
            margin: temp * 0.01
        }
      return (
        <>
            <Container width={size.width} height={size.height}>
                <Line>
                    <Circle className="if-circle" width={size.square} margin={size.margin} color={props.cColor}></Circle>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                </Line>
                <Line>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                </Line>
                <Line>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                </Line>
                <Line>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                    <Square className="if-square" width={size.square} margin={size.margin} color={props.sColor}></Square>
                </Line>
            </Container>
        </>
      );
    }

export default Index;