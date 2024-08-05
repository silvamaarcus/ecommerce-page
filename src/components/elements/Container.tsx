import React from "react";

// Definindo a interface ContainerProps, que especifica os tipos das propriedades (props) que o componente Container pode receber:
interface ContainerProps {
  // children: Especifica que o Container pode envolver outros componentes ou elementos, e espera um nó React (React.ReactNode).
  children: React.ReactNode;
  // className?: Uma string opcional (? indica que é opcional) que permite passar classes CSS adicionais ao contêiner.
  className?: string;
}

// Declarando o componente Container como uma função que recebe ContainerProps. O tipo React.FC (Function Component) é usado para indicar que este é um componente funcional e aceita props definidos pela interface ContainerProps.  A função é definida como uma expressão de função e utiliza a desestruturação para extrair children e className das props.

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    // ${className}: Permite adicionar classes CSS adicionais passadas como props.
    <div className={`custom-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;
