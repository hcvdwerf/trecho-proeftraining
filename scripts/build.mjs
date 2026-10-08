import {cp,readFile,writeFile,rm,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const url=new URL(process.env.SITE_URL || 'https://hcvdwerf.github.io/trecho-proeftraining/');
if(url.protocol!=='https:'||url.search||url.hash)throw Error('Use an HTTPS site URL without query or fragment');
if(!url.pathname.endsWith('/'))url.pathname+='/';
const prefix=url.pathname;
await rm('docs',{recursive:true,force:true});await cp('site','docs',{recursive:true});
for(const name of ['index.html','404.html']){
 let html=await readFile(`docs/${name}`,'utf8');
 html=html.replaceAll('"/assets/',`"${prefix}assets/`).replaceAll('"/styles.css"',`"${prefix}styles.css"`).replaceAll('href="/"',`href="${prefix}"`);
 if(name==='index.html')html=html.replace('</head>',`<link rel="canonical" href="${url.href}">\n<meta property="og:url" content="${url.href}">\n<meta property="og:image" content="${url.href}assets/social.png">\n<meta property="og:image:alt" content="Bij ons loopt niemand achteraan. Kom drie keer gratis meetrainen bij Trecho.">\n</head>`);
 await writeFile(`docs/${name}`,html);
}
let fonts=await readFile('docs/assets/fonts.css','utf8');await writeFile('docs/assets/fonts.css',fonts.replaceAll('url(/assets/','url('));
await writeFile('docs/.nojekyll','');
await writeFile('docs/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url.href}</loc></url></urlset>`);
await mkdir('docs/proeftraining',{recursive:true});
await writeFile('docs/proeftraining/index.html',`<!doctype html><html lang="nl"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${url.href}"><link rel="canonical" href="${url.href}"><title>Proeftraining Trecho</title><a href="${url.href}">Naar de proeftrainingpagina</a></html>`);
console.log('Built for',url.href);
