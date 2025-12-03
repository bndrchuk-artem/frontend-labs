import React from 'react';

function Header() {
  return (
    <div>
      <h2>Бондарчук Артем Віталійович</h2>
      <p 
        id="date" 
        onClick={(e) => e.currentTarget.classList.toggle('style1')}
        style={{ cursor: 'pointer' }}
      >
        Дата та місце народження: 22 липня, 2006 року, м. Любешів
      </p>
      <p 
        className="education"
        onClick={(e) => e.currentTarget.classList.toggle('style2')}
        style={{ cursor: 'pointer' }}
      >
        Освіта: ОЗЗСО Любешівський ліцей, м. Любешів; НТУУ "Київський політехнічний інститут"
      </p>
    </div>
  );
}

export default Header;