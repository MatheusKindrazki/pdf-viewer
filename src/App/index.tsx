import { useState } from 'react'

import PDFLink from './PdfLink'
import Viewer from './Viewer'
import GlobalStyle from './globalStyle'

export default function App() {
  const [pdfLink, setPdfLink] = useState<string | null>(null);

  return (
    <>
      {!pdfLink ? (
        <PDFLink setPdfLink={setPdfLink} />
      ) : (
        <Viewer pdfLink={pdfLink || ''} />
      )}
      <GlobalStyle />
    </>
  );
}
