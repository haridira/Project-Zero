// original: https://stackoverflow.com/a/19593950
function roundedImage(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }
  
  const imageSrc = './images/22-08-04 hari-01.jpg';
  
  document.addEventListener("DOMContentLoaded", () => {
    
    // circle canvas' reference
    let circleCanvas = document.getElementById('circle')
    let circleCtx = circleCanvas.getContext('2d')
  
    const img = new Image();
  
    img.onload = function() {

      // draw image with circle shape clip
      circleCtx.save()
      circleCtx.beginPath()
      circleCtx.arc(150, 150, 130, 0, Math.PI * 2, false)
      circleCtx.strokeStyle = '#f8fafe'
      circleCtx.stroke()
      circleCtx.clip()
      circleCtx.drawImage(img, 0, 0, 300, 300)
      circleCtx.restore()
    };
  
    img.src = imageSrc;
  });