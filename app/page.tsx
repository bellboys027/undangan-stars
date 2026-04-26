'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes neonPulse {
          0% { text-shadow: 0 0 10px rgba(245,158,11,0.5); }
          50% { text-shadow: 0 0 25px rgba(245,158,11,0.8), 0 0 40px rgba(217,119,6,0.4); }
          100% { text-shadow: 0 0 10px rgba(245,158,11,0.5); }
        }
        .neon-glow { animation: neonPulse 3s infinite ease-in-out; }
        body { margin: 0; padding: 0; background: black; overflow-x: hidden; }
        body::-webkit-scrollbar { display: none; }
      `}} />

      <div style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(circle at top, rgba(217,119,6,0.25) 0%, transparent 70%),
          url("https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=1920&auto=format&fit=crop"),
          linear-gradient(rgba(217,119,6,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(217,119,6,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, cover, 30px 30px, 30px 30px',
        backgroundPosition: 'top center, center, center, center',
        backgroundAttachment: 'fixed',
        minHeight: '100dvh',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        padding: '20px'
      }}>

        {/* VIGNETTE */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, #000 100%)', zIndex: 1, pointerEvents: 'none' }} />

        <main style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '40px'
        }}>

          {/* LOGO SECTION */}
          <div style={{
            width: '80%',
            marginBottom: '35px',
            padding: '10px',
            border: '2px solid rgba(217,119,6,0.5)',
            borderRadius: '24px',
            background: 'rgba(10,10,10,0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.8)'
          }}>
            <img src="/logo-stars.png" alt="STARS Logo" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
          </div>

          {/* HEADLINE */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
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

          {/* GRID TANGGAL & DESKRIPSI */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '12px',
            width: '100%',
            marginBottom: '40px'
          }}>
            {/* Box Soft Opening */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '25px 10px',
              borderRadius: '20px',
              background: 'rgba(25,25,25,0.6)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#d97706', color: '#000', fontSize: '8px', fontWeight: '900', padding: '2px 8px', borderRadius: '10px', whiteSpace: 'nowrap' }}>PHASE 1</span>
              <h3 style={{ fontSize: '9px', color: '#888', margin: '0', fontWeight: 'bold' }}>SOFT OPENING</h3>
              <p style={{ fontSize: '24px', fontWeight: '900', margin: '10px 0', color: '#fff' }}>1 MEI</p>
              <p style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '900', fontStyle: 'italic', margin: '0' }}>UJI COBA</p>
              <p style={{ fontSize: '9px', color: '#aaa', marginTop: '12px', lineHeight: '1.4' }}>
                Tahap uji operasional untuk penyempurnaan pelayanan.
              </p>
            </div>

            {/* Box Grand Opening */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              border: '2px solid #f59e0b',
              padding: '25px 10px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #151515, #000)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}>
              <img src="/bola8.png" style={{ position: 'absolute', right: '-15px', bottom: '-15px', width: '80px', opacity: 0.1, transform: 'rotate(15deg)' }} />
              <h3 style={{ fontSize: '9px', color: '#fbbf24', margin: '0', fontWeight: 'bold' }}>GRAND OPENING</h3>
              <p style={{ fontSize: '24px', fontWeight: '900', margin: '10px 0', color: '#f59e0b' }}>5 MEI</p>
              <p style={{ fontSize: '9px', color: '#eee', marginTop: '12px', lineHeight: '1.4', fontWeight: '500' }}>
                Momen resmi pembukaan penuh dengan promo eksklusif!
              </p>
            </div>
          </div>

          {/* BUTTONS SECTION */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* LOKASI MAPS AKTIF */}
            <a
              href="https://share.google/u7Ar0FYWMZ11lbtQG"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(180deg, #f59e0b, #d97706)',
                color: '#000',
                padding: '20px',
                borderRadius: '18px',
                fontWeight: '900',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 20px rgba(217,119,6,0.3)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              LOKASI GOOGLE MAPS
            </a>

            {/* WA AKTIF + NOMOR BARU */}
            <a
              href="https://wa.me/6282117377771?text=Halo%20Stars%20Billiard,%20saya%20ingin%20reservasi%20meja."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '2px solid #d97706',
                color: '#fbbf24',
                padding: '20px',
                borderRadius: '18px',
                fontWeight: '900',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'rgba(217,119,6,0.05)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              RESERVASI WHATSAPP
            </a>
          </div>

          <footer style={{ marginTop: '60px', paddingBottom: '20px', textAlign: 'center' }}>
            <p style={{ color: '#555', letterSpacing: '0.3em', fontSize: '10px', fontWeight: 'bold', margin: '0' }}>STARS BILLIARD & CAFE</p>
            <p style={{ color: '#333', fontSize: '9px', marginTop: '5px' }}>Banjarmasin, Kalimantan Selatan</p>
          </footer>

        </main>
      </div>
    </>
  );
}