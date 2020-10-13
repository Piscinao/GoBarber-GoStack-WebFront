import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // Receber um componente como uma propriedade
  // Iconbaseprops é para dizer que o componente possui propriedades padrões
  icon?: React.ComponentType<IconBaseProps>;
}

// Passa a interface como parâmetro para tornar obrigatório as os valores e tipagem
//                                Icon = converte a variavel com componente com camelcase
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {/* Como o ícone é opcional faz uma verificação se ele existe antes de aplicar a propriedade */}
    {Icon && <Icon size={20} />}
    {/* spread operator pega as propriedades e passa dentro */}
    <input {...rest} />
  </Container>
);

export default Input;
