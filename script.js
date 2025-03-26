

document.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.getElementById('download-button');
  const profilePic = document.getElementById('profile-pic');



  // Download CV functionality (placeholder)
  downloadButton.addEventListener('click', function () {
    alert('Descargando CV...');
    
    // Crear un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = 'Marko_Adrian_Sanchez_Cruz_CV.pdf'; // Reemplaza con la ruta real del archivo
    link.download = 'Marko_Adrian_Sanchez_Cruz_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  });

  // Placeholder for profile picture hover effect (replace with actual image URL)
  profilePic.addEventListener('mouseover', function () {
    this.src = ''; // Replace with color image URL
  });

  profilePic.addEventListener('mouseout', function () {
    this.src = ''; // Replace with grayscale image URL
  });
});

