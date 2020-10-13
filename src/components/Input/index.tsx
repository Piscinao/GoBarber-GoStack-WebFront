import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
// hook que recebe como parametro o nome do campo e retorna diversas propriedades
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // Receber um componente como uma propriedade
  // Iconbaseprops é para dizer que o componente possui propriedades padrões
  icon?: React.ComponentType<IconBaseProps>;
}

// Passa a interface como parâmetro para tornar obrigatório as os valores e tipagem
//                                Icon = converte a variavel com componente com camelcase
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  // manipulação direta no elemento
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      // ref é igual a getElementBy do JS acessa o elemento de forma direta sem armazenar em um estado
      ref: inputRef.current,
      // quando rpecisa do input pega na variável value - caminho que pega o valor document.querySelector('input').value
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      {/* Como o ícone é opcional faz uma verificação se ele existe antes de aplicar a propriedade */}
      {Icon && <Icon size={20} />}
      {/* spread operator pega as propriedades e passa dentro */}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
