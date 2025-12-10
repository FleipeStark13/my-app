import React, { useState, useRef, ChangeEvent } from 'react';
import './App.css';
import NewsTemplate from './templates/news.template';
import html2canvas from 'html2canvas';

function App() {
  const [headline, setHeadline] = useState('Headline here!');
  const [subHeadline, setSubHeadline] = useState('Subheadline is in here!');
  const [bodyText, setBodyText] = useState("The body text will be in here right there!");
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const previewURL = URL.createObjectURL(file);
      setSelectedFile(previewURL);
    } else {
      setSelectedFile(null);
    }
  }

  const componentRef = useRef<HTMLDivElement>(null);

  const exportComponentImage = async () => {
    const element = componentRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      width: 1080,
      height: 1350,
      scale: 2,
      useCORS: true,
      backgroundColor: null, // Remove fundo branco
      logging: false,
    } as any);

    const dataURL = canvas.toDataURL("image/jpeg", 0.95);
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "news-1080x1350.jpg";
    link.click();
  };

  return (
    <div className="App">
      <div className="app-content">

        <div className="inputers">
        
          <h1>Criar imagens e elementos online.</h1>
        
          <input onChange={(e) => {setHeadline(e.target.value)}} type="text" placeholder='Insira a headline' />
          <input onChange={(e) => {setSubHeadline(e.target.value)}} type="text" placeholder='Insira a subheadline' />
          <textarea onChange={(e) => {setBodyText(e.target.value)}} name="body-text" id="body-text" placeholder='Insira o corpo do texto'></textarea>
          
          <input onChange={handleFileChange} type="file" name="file" id="" />
          
          <button onClick={exportComponentImage}>Download</button>
        </div>

        {/* PRÉ-VISUALIZAÇÃO (com scale) */}
        <div className="viewer-item">
          <div
            className='viewer'
            style={{
              transform: "scale(0.7)",
              width: "1080px",
              height: "1350px",
            }}
          >
            <NewsTemplate 
              headline={headline}
              subHeadline={subHeadline}
              bodyText={bodyText}
              bg={selectedFile}
            />
          </div>
        </div>

        {/* ELEMENTO DE CAPTURA (sem scale, oculto) */}
        <div 
          ref={componentRef} 
          style={{ 
            position: "absolute",
            left: "-9999px",
            top: "0",
            width: "1080px", 
            height: "1350px",
          }}
        >
          <NewsTemplate 
            headline={headline}
            subHeadline={subHeadline}
            bodyText={bodyText}
            bg={selectedFile}
          />
        </div>

      </div>
    </div>
  );
}

export default App;