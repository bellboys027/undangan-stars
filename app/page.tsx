'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      {/* --- CSS KHUSUS ANIMASI MASUK --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* 1. Animasi Masuk (Fade + Slide Up) */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 2. Animasi Neon Pulse (Yang Sudah Ada) */
        @keyframes neonPulse {
          0% { text-shadow: 0 0 10px rgba(245,158,11,0.5); }
          50% { text-shadow: 0 0 25px rgba(245,158,11,0.8), 0 0 40px rgba(217,119,6,0.4); }
          100% { text-shadow: 0 0 10px rgba(245,158,11,0.5); }
        }

        /* Kelas untuk memicu animasi masuk */
        .animate-in {
          opacity: 0; /* Mulai dari transparan */
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Neon glow class */
        .neon-glow { animation: neonPulse 3s infinite ease-in-out; }

        body { margin: 0; padding: 0; background: black; overflow-x: hidden; }
        body::-webkit-scrollbar { display: none; }

        /* FIX UNTUK MOBILE: Kita pindahkan background ke elemen terpisah */
        .bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-color: #000000;
          background-image: 
            radial-gradient(circle at top, rgba(217,119,6,0.15) 0%, transparent 60%),
            url("https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=1920&auto=format&fit=crop"),
            linear-gradient(rgba(217,119,6,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,119,6,0.03) 1px, transparent 1px);
          background-size: 100% 600px, cover, 30px 30px, 30px 30px;
          background-position: top center;
        }

        /* Vignette Gelap */
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 30%, #000 100%);
          z-index: 1;
        }
      `}} />

      <div className="bg-container">
        <div className="vignette" />
      </div>

      <div style={{
        minHeight: '100dvh',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 10,
        padding: '20px'
      }}>

        <main style={{
          width: '100%',
          maxWidth: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '40px'
        }}>

          {/* 1. LOGO SECTION - GLASSMORPHISM + ANIMASI (No Delay) */}
          <div className="animate-in" style={{
            width: '80%',
            marginBottom: '35px',
            padding: '10px',
            border: '1px solid rgba(217,119,6,0.4)',
            borderRadius: '24px',
            background: 'rgba(20,20,20,0.6)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.7), 0 0 10px rgba(217,119,6,0.1)'
          }}>
            <img src="/logo-stars.png" alt="STARS Logo" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
          </div>

          {/* 2. HEADLINE + ANIMASI (Delay 0.3s) */}
          <div className="animate-in" style={{ marginBottom: '40px', textAlign: 'center', animationDelay: '0.3s' }}>
            <p style={{ color: '#fbbf24', letterSpacing: '0.4em', fontSize: '10px', fontWeight: '800', marginBottom: '8px' }}>EXCLUSIVE INVITATION</p>
            <h1 className="neon-glow" style={{
              fontSize: '52px',
              fontWeight: '900',
              margin: '0',
              background: 'linear-gradient(to bottom, #fff, #f59e0b, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
              lineHeight: '0.9',
              textTransform: 'uppercase'
            }}>GRAND<br />OPENING</h1>
            <div style={{ height: '2px', width: '60px', background: '#d97706', margin: '15px auto 0' }} />
          </div>

          {/* 3. GRID TANGGAL - LEBIH TRANSPARAN + ANIMASI (Delay 0.6s) */}
          <div className="animate-in" style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '12px',
            width: '100%',
            marginBottom: '40px',
            animationDelay: '0.6s'
          }}>
            {/* Box Soft Opening */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '25px 10px',
              borderRadius: '20px',
              background: 'rgba(30,30,30,0.5)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#d97706', color: '#000', fontSize: '8px', fontWeight: '900', padding: '2px 8px', borderRadius: '10px', whiteSpace: 'nowrap', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>PHASE 1</span>
              <h3 style={{ fontSize: '9px', color: '#888', margin: '0', fontWeight: 'bold' }}>SOFT OPENING</h3>
              <p style={{ fontSize: '24px', fontWeight: '900', margin: '10px 0', color: '#fff' }}>1 MEI</p>
              <p style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>PROMO TERBATAS</p>
              <p style={{ fontSize: '9px', color: '#ccc', marginTop: '12px', lineHeight: '1.4' }}>
                Nikmati penawaran promo spesial selama tahap uji coba operasional.
              </p>
            </div>

            {/* Box Grand Opening */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              border: '2px solid rgba(245,158,11,0.6)',
              padding: '25px 10px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(35,35,35,0.5), rgba(10,10,10,0.7))',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}>
              <img src="/bola8.png" style={{ position: 'absolute', right: '-15px', bottom: '-15px', width: '80px', opacity: 0.1, transform: 'rotate(15deg)' }} />
              <h3 style={{ fontSize: '9px', color: '#fbbf24', margin: '0', fontWeight: 'bold' }}>GRAND OPENING</h3>
              <p style={{ fontSize: '24px', fontWeight: '900', margin: '10px 0', color: '#f59e0b' }}>8 MEI</p>
              <p style={{ fontSize: '9px', color: '#fff', marginTop: '12px', lineHeight: '1.4', fontWeight: '500' }}>
                Makan dan main gratis dari jam 10 pagi sampai jam 5 sore!
              </p>
            </div>
          </div>

          {/* 4. BUTTONS SECTION - TRANSPARAN + ANIMASI (Delay 0.9s) */}
          <div className="animate-in" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px', animationDelay: '0.9s' }}>
            <a
              href="https://share.google/u7Ar0FYWMZ11lbtQG"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(180deg, #f59e0b, #d97706)',
                color: '#000',
                padding: '18px',
                borderRadius: '18px',
                fontWeight: '900',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 20px rgba(217,119,6,0.4)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              LOKASI GOOGLE MAPS
            </a>

            <a
              href="https://wa.me/628134236463?text=Halo%20Stars%20Billiard,%20saya%20ingin%20reservasi%20meja."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '2px solid rgba(217,119,6,0.6)',
                color: '#fbbf24',
                padding: '18px',
                borderRadius: '18px',
                fontWeight: '900',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'rgba(217,119,6,0.08)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              RESERVASI WHATSAPP
            </a>
          </div>

          <footer className="animate-in" style={{ marginTop: '60px', paddingBottom: '20px', textAlign: 'center', animationDelay: '1.2s' }}>
            <p style={{ color: '#555', letterSpacing: '0.3em', fontSize: '10px', fontWeight: 'bold', margin: '0' }}>STARS BILLIARD & CAFE</p>
            <p style={{ color: '#333', fontSize: '9px', marginTop: '5px' }}>Banjarmasin, Kalimantan Selatan</p>
          </footer>

        </main>
      </div>
    </>
  );
}