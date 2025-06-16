import { createContext, useState, useContext } from 'react';

const ImageOverlayContext = createContext();

export const useImageOverlay = () => useContext(ImageOverlayContext);

export const ImageOverlayProvider = ({ children }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const openOverlay = (src) => setImageSrc(src);
  const closeOverlay = () => setImageSrc(null);

  return (
    <ImageOverlayContext.Provider value={{ openOverlay, closeOverlay }}>
      {imageSrc && (
        <div onClick={closeOverlay} className={imageSrc !== null ? "showImageOne" : ""}>
        <div className="backgroundImage"></div>
        <img src={imageSrc} className="galleryImageOne"></img>
        </div>
      )}
      {children}
    </ImageOverlayContext.Provider>
  );
};
