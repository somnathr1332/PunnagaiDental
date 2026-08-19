import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ mode, beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  // If a single side-by-side image is provided, we split it using background positions
  const isSideBySide = !!beforeImage && !afterImage;
  const bgImg = beforeImage; 
  const overlayImg = afterImage || beforeImage;

  return (
    <div 
      className="ba-slider-container"
      ref={containerRef}
      onMouseDown={(e) => {
        isDragging.current = true;
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        handleMove(e.touches[0].clientX);
      }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image Container (Background) */}
      <div 
        className="ba-before-wrapper"
        style={isSideBySide ? {
          backgroundImage: `url(${bgImg})`,
          backgroundSize: '200% 100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          width: '100%', height: '100%'
        } : {}}
      >
        {!isSideBySide && <img src={bgImg} alt="Before Treatment" className="ba-image ba-before" />}
      </div>

      {/* After Image Container (Clipped Overlay) */}
      <div 
        className="ba-overlay-container" 
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          ...(isSideBySide ? {
            backgroundImage: `url(${overlayImg})`,
            backgroundSize: '200% 100%',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          } : {})
        }}
      >
        {!isSideBySide && <img src={overlayImg} alt="After Treatment" className="ba-image ba-after" />}
      </div>

      {/* Drag Bar Divider */}
      <div 
        className="ba-divider" 
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="ba-handle">
          <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8 0l4-4-4-4"></path>
          </svg>
        </div>
      </div>
      
      {/* Badges */}
      <span className="ba-label ba-label-before">Before</span>
      <span className="ba-label ba-label-after">After</span>
    </div>
  );
}
