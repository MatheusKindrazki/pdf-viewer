import React, { useRef, useEffect } from 'react'

import WebViewer from '@pdftron/webviewer'

import { Container } from './styles'

const App: React.FC<{ pdfLink: string }> = ({ pdfLink }) => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer",

        initialDoc: pdfLink,
        disableLogs: true,
        isReadOnly: true,
        streaming: true,
      },
      viewer.current as HTMLElement
    ).then((instance) => {
      instance.UI.setLanguage("pt_BR");
    });
  }, [pdfLink]);

  return <Container className="webviewer" ref={viewer}></Container>;
};

export default App
