import React from 'react';

export default function Header() {
  return (
    <>
      <style>
        {`
          .header {
            background-color: #2563eb; /* blue-600 */
            color: white;
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }

          .logo {
            font-size: 1.25rem;
            font-weight: bold;
          }

          .nav a {
            color: white;
            text-decoration: none;
            margin-left: 24px;
            font-size: 1rem;
            transition: text-decoration 0.2s;
          }

          .nav a:hover {
            text-decoration: underline;
          }

          @media (max-width: 600px) {
            .nav a {
              margin-left: 12px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <header className="header">
        <div className="logo">PNAT</div>
        <nav className="nav">
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Dịch vụ</a>
          <a href="#">Liên hệ</a>
        </nav>
      </header>
    </>
  );
}
