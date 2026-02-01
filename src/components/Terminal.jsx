import React, { useState, useEffect, useRef } from 'react';
import { experience, projects, social, bio } from '../data';

const COMMANDS = {
  help: "Show available commands",
  experience: "Show professional experience",
  projects: "Show personal projects",
  contact: "Show contact information",
  whoami: "About me",
  clear: "Clear the terminal"
};

const Prompt = () => (
  <span className="flex items-center gap-2 text-pink font-bold mr-2 select-none">
    <span>➜</span>
    <span className="text-cyan">~</span>
  </span>
);

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const initialized = useRef(false);

  // Focus input on click anywhere
  useEffect(() => {
    const handleClick = () => {
      const selection = window.getSelection();
      if (selection.toString().length === 0) {
        inputRef.current?.focus();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Initial greeting
  useEffect(() => {
    if (!initialized.current) {
      handleCommand('whoami', false);
      initialized.current = true;
    }
  }, []);

  const addToHistory = (cmd, output) => {
    setHistory(prev => [...prev, { cmd, output, id: Date.now() }]);
  };

  const handleCommand = (cmdInput, addToCmdHistory = true) => {
    const cmd = cmdInput.trim().toLowerCase();
    
    if (!cmd) {
      addToHistory('', null);
      return;
    }

    if (addToCmdHistory) {
      setCommandHistory(prev => [cmd, ...prev]);
      setHistoryIndex(-1);
    }

    switch (cmd) {
      case 'help':
        addToHistory(cmd, (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {Object.entries(COMMANDS).map(([key, desc]) => (
              <div key={key} className="flex gap-4">
                <span className="text-pink font-bold min-w-[120px]">{key}</span>
                <span className="text-fg">{desc}</span>
              </div>
            ))}
          </div>
        ));
        break;

      case 'whoami':
        addToHistory(cmd, (
          <div className="space-y-2 max-w-2xl">
            <div className="text-purple font-bold text-xl mb-4">Mohammed Hayat</div>
            {bio.map((line, i) => (
              <p key={i} className="text-fg">{line}</p>
            ))}
            <div className="mt-4 text-comment">
              Type <span className="text-green">'help'</span> to see available commands.
            </div>
          </div>
        ));
        break;

      case 'experience':
        addToHistory(cmd, (
          <div className="space-y-8 max-w-3xl">
            {experience.map((job, i) => (
              <div key={i} className="border-l-2 border-bg-light pl-4 ml-1">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <span className="text-purple font-bold text-lg">{job.role}</span>
                  <span className="text-comment">@</span>
                  <span className="text-blue font-bold">{job.company}</span>
                  <span className="md:ml-auto text-comment text-sm font-mono">{job.period}</span>
                </div>
                <div className="mb-3 space-y-1">
                  {job.description.map((desc, j) => (
                    <div key={j} className="flex gap-2 text-fg/90">
                      <span className="text-grey">›</span>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t, k) => (
                    <span key={k} className="text-xs px-2 py-0.5 rounded bg-bg-light text-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ));
        break;

      case 'projects':
        addToHistory(cmd, (
          <div className="grid grid-cols-1 gap-8 max-w-3xl">
            {projects.map((proj, i) => (
              <div key={i} className="group">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-green font-bold text-lg group-hover:underline decoration-grey underline-offset-4">
                    {proj.name}
                  </span>
                  {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs text-blue hover:text-pink transition-colors"
                    >
                      [link] ↗
                    </a>
                  )}
                </div>
                <p className="text-fg/90 mb-2 border-l-2 border-bg-light pl-3">
                  {proj.description}
                </p>
                {proj.tech && proj.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 pl-3">
                    {proj.tech.map((t, k) => (
                      <span key={k} className="text-xs px-2 py-0.5 rounded bg-bg-light text-purple/80">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ));
        break;

      case 'contact':
        addToHistory(cmd, (
          <div className="space-y-2">
            <div className="flex gap-4">
              <span className="text-orange min-w-[100px]">Email</span>
              <a href={`mailto:${social.email}`} className="text-fg hover:text-blue">{social.email}</a>
            </div>
            <div className="flex gap-4">
              <span className="text-blue min-w-[100px]">GitHub</span>
              <a href={social.github} target="_blank" rel="noreferrer" className="text-fg hover:text-blue">{social.github}</a>
            </div>
            <div className="flex gap-4">
              <span className="text-cyan min-w-[100px]">LinkedIn</span>
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-fg hover:text-blue">{social.linkedin}</a>
            </div>
          </div>
        ));
        break;

      case 'clear':
        setHistory([]);
        break;

      default:
        addToHistory(cmd, (
          <div className="text-orange">
            Command not found: '{cmd}'. Type <span className="text-green">'help'</span> for available commands.
          </div>
        ));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'c' && e.ctrlKey) {
      // Handle Ctrl+C (clear input)
      setInput('');
      addToHistory(input + '^C', null);
    } else if (e.key === 'l' && e.ctrlKey) {
      // Handle Ctrl+L (clear screen)
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <div className="min-h-screen bg-bg p-4 md:p-8 font-mono text-sm md:text-base flex flex-col selection:bg-pink selection:text-bg">
      {/* Content Area */}
      <div className="flex-grow mb-16">
        {history.map((entry) => (
          <div key={entry.id} className="mb-6">
            <div className="flex items-center gap-2 mb-2 opacity-70">
              <Prompt />
              <span className="text-fg">{entry.cmd}</span>
            </div>
            <div className="pl-0 md:pl-5 animate-in fade-in duration-200">
              {entry.output}
            </div>
          </div>
        ))}

        {/* Current Input */}
        <div className="flex items-center gap-2">
          <Prompt />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-fg w-full caret-pink"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Fixed Menu */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg-light/90 backdrop-blur border-t border-bg p-2 md:p-4 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 md:gap-8 justify-center text-xs md:text-sm">
          {Object.keys(COMMANDS).map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="text-comment hover:text-green transition-colors uppercase tracking-wider font-bold"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
