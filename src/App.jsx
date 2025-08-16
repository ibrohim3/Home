import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="logo">Studance</h2>
        <ul>
          <li>Dashboard</li>
          <li>Attendance</li>
          <li>Students</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">
        <div className="header">
          <div className="left">
            <button className="bars" onClick={() => setSidebarOpen(true)}>
              ☰
            </button>
            <span className="logo-text">Stud<span className="red">ance</span></span>
          </div>

          <div className="top-right">
            {/* Dark toggle */}
            <div className="dark-toggle" role="button" aria-label="theme toggle">
              <button
                className={`icon sun ${!darkMode ? "active" : ""}`}
                onClick={() => setDarkMode(false)}
                aria-label="Light mode"
              >
                <FaSun />
              </button>
              <button
                className={`icon moon ${darkMode ? "active" : ""}`}
                onClick={() => setDarkMode(true)}
                aria-label="Dark mode"
              >
                <FaMoon />
              </button>
            </div>

            <div className="avatar">A</div>
          </div>
        </div>

        {/* Card */}
        <div className="card">
          <h2>T.G.G</h2>
          <p>Team Bushido</p>
          <p>Abdulaziz Abduraximov</p>

          <button className="btn absence">Absence</button>
          <button className="btn late">Late</button>

          <select className="select">
            <option>Reason</option>
            <option>Sick</option>
            <option>Travel</option>
            <option>Other</option>
          </select>

          <textarea
            className="textarea"
            placeholder="Other reason (optional)..."
          ></textarea>

          <button className="btn send">Send</button>
        </div>
      </div>

      <style>{`
        :root {
          --toggle-h: 36px;
          --toggle-w: 80px;
          --icon-size: 18px;
          --active-sun: #ffbb33;
          --active-moon: #4a90e2;
        }

        * { margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif; }

        body {
          min-height: 100vh;
          overflow-x: hidden;
          color: #000;
          background: linear-gradient(180deg,#f0f0f0,#d9d9d9);
          transition: background 0.6s ease, color 0.3s ease;
        }
          .red {
          color: red;}
        body.dark {
          color: #fff;
          background: linear-gradient(180deg,#0d0f25,#111422);
        }

        .app { display:flex; min-height:100vh; }

        /* Sidebar */
        .sidebar { width:220px; background: rgba(28,31,54,0.85); color:#fff; padding:20px; position:fixed; top:0; left:-220px; height:100%; transition:left .3s ease, background .3s ease; backdrop-filter: blur(12px); z-index:1000; }
        .sidebar.open { left:0; }
        .logo { color:red; margin-bottom:30px; }
        .sidebar ul { list-style:none; }
        .sidebar ul li { margin:15px 0; cursor:pointer; }

        /* Overlay */
        .overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:500; }

        /* Header */
        .main { flex:1; padding:20px; width:100%; }
        .header { display:flex; justify-content:space-between; align-items:center; }
        .left { display:flex; align-items:center; gap:10px; }
        .bars { font-size:24px; background:none; border:none; color:inherit; cursor:pointer; }
        .logo-text { font-size:18px; font-weight:bold; }
        .top-right { display:flex; align-items:center; gap:15px; }

        /* Dark toggle with blur + gradient */
        .dark-toggle {
          border-radius: calc(var(--toggle-h) / 2);
          background: rgba(11, 8, 8, 0.47);
          backdrop-filter: blur(25px);
          display:flex;
          align-items:center;
          justify-content:space-around;
          padding:4px;
          transition: background 0.4s ease;
        }
        body.dark .dark-toggle {
          background: rgba(0, 0, 0, 0.48);
        }

        .icon {
          width: calc(var(--toggle-h) - 8px);
          height: calc(var(--toggle-h) - 8px);
          border-radius: 999px;
          display:flex;
          align-items:center;
          justify-content:center;
          line-height: 1;
          font-size: var(--icon-size);
          color:#bbb;
          background: transparent;
          border:none;
          cursor:pointer;
          transition: transform .2s ease, background .25s ease, color .25s ease;
        }
        .icon:active { transform: scale(.95); }
        .icon.sun.active { background: var(--active-sun); color:#000; }
        .icon.moon.active { background: var(--active-moon); color:#fff; }

        /* Avatar */
        .avatar {
          background: linear-gradient(135deg,#ff00ff,#ff1493);
          width: 36px; height: 36px; border-radius: 50%;
          display:flex; align-items:center; justify-content:center; font-weight:bold; position:relative;
        }
        .avatar::after { content:""; position:absolute; bottom:5px; right:5px; width:8px; height:8px; background:#0f0; border-radius:50%; }

        /* Card */
        .card {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          color: #000;
          padding: 20px;
          border-radius: 12px;
          margin: 50px auto;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 0 25px rgba(0,0,0,0.2);
          transition: all 0.4s ease;
        }
        body.dark .card {
          background: rgba(0,0,0,0.3);
          color: #fff;
          box-shadow: 0 0 25px rgba(0,0,0,0.5);
        }

        .card h2 { margin-bottom:5px; }
        .card p { margin-bottom:20px; color:#555; }
        body.dark .card p { color:#aaa; }

        .btn { display:block; width:100%; padding:12px; margin:10px 0; border:none; border-radius:8px; font-size:16px; font-weight:bold; cursor:pointer; }
        .absence { background:#007bff; color:#fff; }
        .late { background:#a020f0; color:#fff; }
        .send { background:#00c853; color:#fff; margin-top:20px; }

        .select, .textarea {
          width:100%; margin-top:15px; padding:10px; border-radius:8px; border:none; background:#e0e0e0; color:#000;
        }
        body.dark .select, body.dark .textarea { background:#101223; color:#fff; }
        .textarea { min-height:80px; resize:none; }

        @media (max-width: 768px) {
          :root { --toggle-h: 34px; --toggle-w: 84px; --icon-size: 17px; }
          .main { padding:15px; }
          .sidebar { z-index:1100; }
        }
      `}</style>
    </div>
  );
}
