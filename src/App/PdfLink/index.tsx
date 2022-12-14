import React,  { useCallback,  FormEvent, useRef } from 'react';

import { Container } from './styles';

export interface PdfLinkHandles {
  setPdfLink: (pdfLink: string) => void;
}

const PdfLink: React.FC<PdfLinkHandles> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { setPdfLink } = props

  const handleChange = useCallback((e: FormEvent) => {
    e.preventDefault();

    const value = inputRef.current?.value;

    console.log(value);

    if (value) setPdfLink(value);
  }, [setPdfLink]);

  return (
    <Container>
      <div>
        <form onSubmit={handleChange}>
          <h4>Insira o link do pdf para continuar</h4>
          <input ref={inputRef}  type="text" placeholder="link" />
          <button type="submit">Acessar pdf</button>
        </form>
      </div>
    </Container>
  );
};

export default PdfLink;