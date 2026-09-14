import{MUNICIPALITIES}from'./config.js';
export const $=id=>document.getElementById(id);
export function normalizePoblacion(v){if(!v)return'Desconocido';const s=String(v).trim();return MUNICIPALITIES.find(x=>x.toLowerCase()===s.toLowerCase())||s}
export function number(v){if(v===null||v===undefined||v===''||v==='#N/D'||v==='N/A')return null;if(typeof v==='number')return Number.isFinite(v)?v:null;let s=String(v).trim();if(s.includes(',')&&s.includes('.'))s=s.replace(/\./g,'').replace(',','.');else if(s.includes(','))s=s.replace(',','.');const n=Number.parseFloat(s);return Number.isFinite(n)?n:null}
export function escapeHtml(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')}
export function icons(){window.lucide?.createIcons()}
export const today=()=>new Date().toISOString().slice(0,10);