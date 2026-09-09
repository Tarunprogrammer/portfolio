import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, Minimize2, Maximize2, X, CornerDownLeft } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'EPPE TARUN [SPATIAL SHELL v4.2.0 - INITIALIZED]' },
    { type: 'system', text: 'Type "help" for active operational directives.' }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    sound.playClick();

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (TERMINAL_COMMANDS[cleanCmd]) {
      newHistory.push({ type: 'output', text: TERMINAL_COMMANDS[cleanCmd] });
    } else if (cleanCmd === 'matrix') {
      newHistory.push({
        type: 'output',
        text: '01000101 01010000 01010000 01000101 00100000 01010100 01000001 01010010 01010101 01001110\n[CONSTRUCT ONLINE: WELCOME TO THE REAL WORLD]'
      });
      sound.playSuccess();
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cleanCmd}". Type "help" for valid directives.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div
        className={`glass-panel border border-cyan-500/30 rounded-2xl flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.2)] transition-all duration-300 ${
          isMaximized ? 'w-full h-full max-w-none' : 'w-full max-w-2xl h-[520px]'
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => { sound.playClick(); onClose(); }}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400"
              />
              <button 
                onClick={() => { sound.playClick(); setIsMaximized(!isMaximized); }}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400"
              />
              <button 
                onClick={() => { sound.playClick(); setIsMaximized(!isMaximized); }}
                className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400"
              />
            </div>
            <div className="ml-3 flex items-center gap-1.5 text-xs font-mono-tech text-cyan-400">
              <TermIcon className="w-3.5 h-3.5" />
              <span>tarun@spatial-terminal:~</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => { sound.playClick(); setIsMaximized(!isMaximized); }}
              className="p-1.5 text-gray-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-1.5 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Log Area */}
        <div className="flex-1 p-4 overflow-y-auto font-mono-tech text-xs sm:text-sm space-y-2 bg-[#020208]/90">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'system'
                  ? 'text-cyan-400/80 font-bold'
                  : item.type === 'user'
                  ? 'text-purple-300 font-semibold'
                  : item.type === 'error'
                  ? 'text-red-400'
                  : 'text-gray-300'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 p-3 border-t border-white/10 bg-black/60 rounded-b-2xl font-mono-tech text-xs sm:text-sm"
        >
          <span className="text-cyan-400 select-none">tarun@core:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'hire'..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 focus:ring-0"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
