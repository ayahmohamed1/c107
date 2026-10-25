const sharp = require('sharp');
const fs = require('fs');

async function processBalloon21() {
  const inputPath = 'C:/Users/AYAH ELMAGHRABY/.gemini/antigravity-ide/brain/534e6502-925b-4e68-ae20-064fd016a82d/balloon_twenty_one_1792964353369.jpg';
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Flood fill outside starting from borders:
  const isOutside = new Uint8Array(width * height);
  const q = [];

  for (let x = 0; x < width; x++) {
    q.push(x, 0);
    q.push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    q.push(0, y);
    q.push(width - 1, y);
  }

  let head = 0;
  while (head < q.length) {
    const x = q[head++];
    const y = q[head++];
    const idx = y * width + x;
    if (isOutside[idx]) continue;

    const s = idx * channels;
    const r = data[s];
    const g = data[s + 1];
    const b = data[s + 2];

    // Background is near white (r,g,b > 238 and low saturation difference)
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isWhiteBg = (r > 235 && g > 235 && b > 235 && (max - min) < 20);

    if (!isWhiteBg) continue;

    isOutside[idx] = 1;
    if (x > 0 && !isOutside[idx - 1]) q.push(x - 1, y);
    if (x < width - 1 && !isOutside[idx + 1]) q.push(x + 1, y);
    if (y > 0 && !isOutside[idx - width]) q.push(x, y - 1);
    if (y < height - 1 && !isOutside[idx + width]) q.push(x, y + 1);
  }

  // Backup original ballon.png if not already backed up
  if (!fs.existsSync('public/images/ballon-20-backup.png')) {
    fs.copyFileSync('public/images/ballon.png', 'public/images/ballon-20-backup.png');
  }

  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const s = i * channels;
    const d = i * 4;
    if (isOutside[i]) {
      out[d] = 0;
      out[d + 1] = 0;
      out[d + 2] = 0;
      out[d + 3] = 0;
    } else {
      out[d] = data[s];
      out[d + 1] = data[s + 1];
      out[d + 2] = data[s + 2];
      out[d + 3] = 255;
    }
  }

  // Subtle antialiasing on edges:
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      const d = idx * 4;
      if (out[d + 3] === 255) {
        const hasOutNeighbor =
          isOutside[idx - 1] ||
          isOutside[idx + 1] ||
          isOutside[idx - width] ||
          isOutside[idx + width];
        if (hasOutNeighbor) {
          const r = out[d], g = out[d + 1], b = out[d + 2];
          // If edge pixel is very light, blend it
          if (r > 220 && g > 220 && b > 220) {
            out[d + 3] = 160;
          }
        }
      }
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile('public/images/ballon.png');

  console.log('Saved transparent 21 balloon to public/images/ballon.png');
}

processBalloon21().catch(console.error);
