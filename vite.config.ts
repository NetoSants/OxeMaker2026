import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import crypto from 'node:crypto';
import {defineConfig, type Plugin} from 'vite';
import { EVENT_DATE } from './src/core/eventMeta.ts';

/**
 * Injeta a Content-Security-Policy apenas no build de produção.
 * O script inline de bootstrap do tema é liberado por hash SHA-256.
 * (Em dev o plugin fica inativo para não bloquear o HMR do Vite.)
 */
function eventMetaPlugin(): Plugin {
  const tokens: Record<string, string> = {
    '{{EVENT_DATE_LONG}}': EVENT_DATE.long,
    '{{EVENT_DATE_SHORT}}': EVENT_DATE.short,
  };

  return {
    name: 'inject-event-meta',
    transformIndexHtml(html) {
      return Object.entries(tokens).reduce(
        (result, [token, value]) => result.replaceAll(token, value),
        html,
      );
    },
  };
}

function cspMetaPlugin(): Plugin {
  return {
    name: 'inject-csp-meta',
    apply: 'build',
    transformIndexHtml(html) {
      const inlineScripts = Array.from(html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)).map(
        (match) => match[1],
      );

      const scriptHashes = inlineScripts.map(
        (code) => `'sha256-${crypto.createHash('sha256').update(code, 'utf8').digest('base64')}'`,
      );

      const csp = [
        "default-src 'self'",
        `script-src 'self'${scriptHashes.length ? ` ${scriptHashes.join(' ')}` : ''}`,
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        'frame-src https://www.google.com https://maps.google.com',
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join('; ');

      return html.replace(
        '</head>',
        `    <meta http-equiv="Content-Security-Policy" content="${csp}" />\n  </head>`,
      );
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/Site-OxeMaker/',
    plugins: [react(), tailwindcss(), eventMetaPlugin(), cspMetaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
