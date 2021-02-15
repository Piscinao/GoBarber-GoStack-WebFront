import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
// hook que recebe como parametro o nome do campo e retorna diversas propriedades
import { useField } from '@unform/core';

import { Container, Error } from './styles';
import Tooltip from '../Tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  // Receber um componente como uma propriedade
  // Iconbaseprops é para dizer que o componente possui propriedades padrões
  icon?: React.ComponentType<IconBaseProps>;
}

// Passa a interface como parâmetro para tornar obrigatório as os valores e tipagem
//                                Icon = converte a variavel com componente com camelcase
const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  // manipulação direta no elemento
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // useCallback -> hook cria funções dentro do component que não é criada na memoria toda vez q chama
  // cria a função e so cria novamente se alguma das variaveis alterarem no final
  // função dentro de componente sempre usar useCallback
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    // if(inputRef.current?.value){
    //   setIsFilled(true);
    // } else {
    //   setIsFilled(false);
    // }
    setIsFilled(!!inputRef.current?.value);
  }, []);

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
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      {/* Como o ícone é opcional faz uma verificação se ele existe antes de aplicar a propriedade */}
      {Icon && <Icon size={20} />}
      {/* spread operator pega as propriedades e passa dentro */}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
