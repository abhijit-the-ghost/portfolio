import { ImageResponse } from 'next/og';
import { profile, bioShort } from '@/content/profile';
import { siteUrl } from '@/lib/site';

export const alt = `${profile.name} — ${profile.title}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Generated with next/og (statically optimized at build time). Colors from the §4 design tokens.
// Text drawn only from src/content/profile.ts.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0B0F14',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* one subtle glow (same one-gradient rule as hero) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 260,
            background:
              'radial-gradient(ellipse at top, rgba(34,211,238,0.18), transparent 70%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'monospace',
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#22D3EE',
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            marginTop: 18,
            display: 'flex',
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1,
            color: '#E5E7EB',
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 26,
            display: 'flex',
            fontSize: 30,
            lineHeight: 1.4,
            color: '#9CA3AF',
            maxWidth: 980,
          }}
        >
          {bioShort}
        </div>
        <div
          style={{
            marginTop: 44,
            display: 'flex',
            width: 160,
            height: 6,
            background: '#22D3EE',
            borderRadius: 3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            left: 80,
            display: 'flex',
            fontFamily: 'monospace',
            fontSize: 20,
            color: '#9CA3AF',
          }}
        >
          {siteUrl.replace('https://', '')}
        </div>
      </div>
    ),
    { ...size },
  );
}
