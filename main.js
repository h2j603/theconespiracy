document.addEventListener('DOMContentLoaded', ()=>{
  const imgs=document.querySelectorAll('.image-gallery img');
  const previewArea=document.getElementById('preview-area');
  const previewImg=document.getElementById('preview-img');
  const previewCaption=document.getElementById('preview-caption');
  imgs.forEach(img=>{
    img.style.cursor='zoom-in';
    img.addEventListener('click', ()=>{
      previewImg.src=img.src;
      const fig=img.closest('figure');
      previewCaption.textContent=fig?fig.querySelector('figcaption')?.textContent:'';
      previewArea.style.display='block';
      previewArea.scrollIntoView({behavior:'smooth'});
    });
  });
  // 클릭하면 숨김 처리
  previewArea.addEventListener('click', ()=>{
    previewArea.style.display='none';
    previewImg.src='';
    previewCaption.textContent='';
  });
});
