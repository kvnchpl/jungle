// utils/generateQRCodes.js

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const baseUrl = "https://kvnchpl.github.io/jungle";
const contentDir = path.join(__dirname, '../src/jungle');
const outputDir = path.join(__dirname, '../qrcodes');

// Ensure output dir exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(contentDir, (err, files) => {
    if (err) return console.error("Error reading content directory", err);

    files.forEach(file => {
        if (file.endsWith('.md')) {
            const slug = path.basename(file, '.md');
            const url = `${baseUrl}/${slug}/`;
            const outPath = path.join(outputDir, `${slug}.png`);

            QRCode.toFile(outPath, url, {
                color: { dark: '#000000', light: '#FFFFFF' }
            }, err => {
                if (err) console.error(`❌ Failed to generate QR for ${slug}`, err);
                else console.log(`✅ QR code generated: ${slug}.png → ${url}`);
            });
        }
    });
});