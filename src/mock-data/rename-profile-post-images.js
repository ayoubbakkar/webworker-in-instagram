

const fs = require('fs');
const path = require('path');
const url = require('url');
const https = require('https')

function renameImages() {
  const assetsDir = path.join(__dirname, '../assets/images');
  let i = 0;
  fs.readdirSync(assetsDir).forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const oldPath = path.join(assetsDir, file);
      const newName = 'post' + i + '.jpg';
      const newPath = path.join(assetsDir, newName);
      fs.renameSync(oldPath, newPath);
      i++;
    }
  });
}
function renameProfilImages() {
  const assetsDir = path.join(__dirname, '../assets/profil');
  let i = 0;
  fs.readdirSync(assetsDir).forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const oldPath = path.join(assetsDir, file);
      const newName = 'profilPicture' + i + '.jpg';
      const newPath = path.join(assetsDir, newName);
      fs.renameSync(oldPath, newPath);
      i++;
    }
  });
}

renameImages();
renameProfilImages();