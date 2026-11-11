import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { profile, bioShort } from '@/content/profile';
import { siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export const alt = `${profile.name} — ${profile.title}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Generated with next/og at build time (static). The same card is used for opengraph-image and
// twitter-image. Portrait + text only from src/content. Colors from the §4 design tokens.
const portrait = await readFile(join(process.cwd(), 'src/assets/meImage.jpg'));
const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#0B0F14',
          padding: '64px 72px',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'monospace',
              fontSize: 19,
              letterSpacing: 5,
              textTransform: 'uppercase',
              color: '#22D3EE',
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -2,
              color: '#E5E7EB',
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              fontSize: 22,
              lineHeight: 1.45,
              color: '#9CA3AF',
              maxWidth: 640,
            }}
          >
            {bioShort}
          </div>
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              width: 150,
              height: 6,
              background: '#22D3EE',
              borderRadius: 3,
            }}
          />
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              fontFamily: 'monospace',
              fontSize: 18,
              color: '#9CA3AF',
            }}
          >
            {siteUrl.replace('https://', '')}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: 280,
            height: 430,
            borderRadius: 18,
            overflow: 'hidden',
            border: '1px solid #1F2937',
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            alt={profile.name}
            width={280}
            height={430}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
