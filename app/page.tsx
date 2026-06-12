"use client";
// app/page.tsx — Javari Finance
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const r = await fetch("/api/chat", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:input})});
      const d = await r.json();
      setOutput(d.content || "");
    } catch { setOutput("Error reaching Javari AI."); }
    setLoading(false);
  }
  return (
    <div style={{minHeight:"100vh",background:"#040912"}}>
      <nav style={{background:"#1E3A5F",padding:"0 20px",height:52,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(0,180,216,0.15)"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:20}}>💰</span><span style={{fontWeight:800,color:"#00B4D8",fontSize:15}}>Javari Finance</span></div>
        <a href="https://craudiovizai.com/auth/signup" style={{background:"#FF0800",color:"#fff",borderRadius:7,padding:"5px 14px",fontSize:12,fontWeight:700,textDecoration:"none"}}>Sign Up Free</a>
      </nav>
      <section style={{background:"linear-gradient(135deg,#1E3A5F,#040912)",padding:"36px 24px 28px",textAlign:"center"}}>
        <div style={{fontSize:44,marginBottom:8}}>💰</div>
        <h1 style={{fontSize:"clamp(20px,3.5vw,38px)",fontWeight:900,color:"#fff",margin:"0 0 8px"}}>Javari Finance</h1>
        <p style={{color:"rgba(255,255,255,0.7)",fontSize:14,margin:0}}>Your money, your plan — AI-powered financial clarity.</p>
      </section>
      <section style={{maxWidth:900,margin:"0 auto",padding:"20px 16px 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12,marginBottom:20}}>
        <div style={{background:"#0F1F32",border:"1px solid rgba(0,180,216,0.1)",borderRadius:12,padding:16}}><div style={{fontSize:24,marginBottom:6}}>📊</div><div style={{fontWeight:700,color:"#e2e8f0",fontSize:13,marginBottom:3}}>Budget Builder</div><div style={{fontSize:11,color:"#6B7280"}}>AI-powered monthly budgets</div></div>
        <div style={{background:"#0F1F32",border:"1px solid rgba(0,180,216,0.1)",borderRadius:12,padding:16}}><div style={{fontSize:24,marginBottom:6}}>🎯</div><div style={{fontWeight:700,color:"#e2e8f0",fontSize:13,marginBottom:3}}>Savings Goals</div><div style={{fontSize:11,color:"#6B7280"}}>Track and achieve savings targets</div></div>
        <div style={{background:"#0F1F32",border:"1px solid rgba(0,180,216,0.1)",borderRadius:12,padding:16}}><div style={{fontSize:24,marginBottom:6}}>💳</div><div style={{fontWeight:700,color:"#e2e8f0",fontSize:13,marginBottom:3}}>Debt Planner</div><div style={{fontSize:11,color:"#6B7280"}}>Payoff strategies and timelines</div></div>
        <div style={{background:"#0F1F32",border:"1px solid rgba(0,180,216,0.1)",borderRadius:12,padding:16}}><div style={{fontSize:24,marginBottom:6}}>📈</div><div style={{fontWeight:700,color:"#e2e8f0",fontSize:13,marginBottom:3}}>Financial Report</div><div style={{fontSize:11,color:"#6B7280"}}>Monthly financial summary</div></div>
        
        </div>
      </section>
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 16px 48px"}}>
        <div style={{background:"#0F1F32",border:"1px solid rgba(0,180,216,0.12)",borderRadius:14,padding:18}}>
          <p style={{fontSize:12,color:"#6B7280",margin:"0 0 8px"}}>Try asking:</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
            <button onClick={() => setInput("Build me a budget for $5,000/month take-home pay")} style={{background:"rgba(0,180,216,0.06)",border:"1px solid rgba(0,180,216,0.15)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"#9CA3AF",cursor:"pointer",fontFamily:"system-ui"}}>Build me a budget for $5,000/month take-home pay</button>
            <button onClick={() => setInput("Create a debt payoff plan: $12k credit card at 24% APR")} style={{background:"rgba(0,180,216,0.06)",border:"1px solid rgba(0,180,216,0.15)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"#9CA3AF",cursor:"pointer",fontFamily:"system-ui"}}>Create a debt payoff plan: $12k credit card at 24% A…</button>
            <button onClick={() => setInput("How much to save for a $30k emergency fund in 2 years?")} style={{background:"rgba(0,180,216,0.06)",border:"1px solid rgba(0,180,216,0.15)",borderRadius:6,padding:"4px 10px",fontSize:11,color:"#9CA3AF",cursor:"pointer",fontFamily:"system-ui"}}>How much to save for a $30k emergency fund in 2 year…</button>
                      </div>
          <div style={{display:"flex",gap:8}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&ask()}
              placeholder="Ask Javari Finance AI anything..."
              style={{flex:1,background:"#172D48",border:"1px solid rgba(0,180,216,0.15)",borderRadius:8,padding:"10px 12px",color:"#e2e8f0",fontSize:13,outline:"none",fontFamily:"system-ui"}} />
            <button onClick={ask} disabled={loading||!input.trim()}
              style={{background:"#1E3A5F",color:"#00B4D8",border:"1px solid rgba(0,180,216,0.2)",borderRadius:8,padding:"10px 18px",fontSize:13,fontWeight:700,cursor:"pointer"}}>
              {loading?"…":"Ask"}
            </button>
          </div>
          {output&&<div style={{fontSize:13,color:"#e2e8f0",marginTop:12,lineHeight:1.7,whiteSpace:"pre-wrap"}}>{output}</div>}
        </div>
      </section>
      <footer style={{borderTop:"1px solid rgba(0,180,216,0.08)",padding:"10px 24px",textAlign:"center"}}>
        <p style={{color:"#374151",fontSize:11,margin:0}}>© 2026 CR AudioViz AI, LLC · EIN: 39-3646201 · <a href="https://craudiovizai.com" style={{color:"#00B4D8",textDecoration:"none"}}>craudiovizai.com</a></p>
      </footer>
    </div>
  );
}
