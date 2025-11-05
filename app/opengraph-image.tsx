import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f14 0%, #0a1715 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#e6f0ff',
              letterSpacing: -1,
            }}
          >
            AurumAI
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 32,
              color: 'rgba(230,240,255,0.75)',
            }}
          >
            Intelligent Mining Optimization
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
