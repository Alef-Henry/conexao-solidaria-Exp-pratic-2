// Minimal JS for hamburger, toasts, modals, form validation
document.addEventListener('DOMContentLoaded', function(){
  // Hamburger toggle
  const btn = document.querySelector('[data-hamburger]');
  const mobile = document.querySelector('[data-mobile]');
  btn && btn.addEventListener('click', ()=>{
    mobile.classList.toggle('open');
  });

  // Toast
  const toast = document.getElementById('toast');
  window.showToast = function(msg, timeout=3000){
    if(!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), timeout);
  }

  // Modal
  document.querySelectorAll('[data-open-modal]').forEach(b => {
    b.addEventListener('click', ()=> {
      const id = b.getAttribute('data-open-modal');
      const modal = document.getElementById(id);
      modal && modal.classList.add('show');
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(b => {
    b.addEventListener('click', ()=> {
      b.closest('.modal-backdrop')?.classList.remove('show');
    });
  });

  // Simple form validation
  const contatoForm = document.getElementById('contato-form');
  contatoForm && contatoForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.querySelector('[name=name]');
    const email = this.querySelector('[name=email]');
    const msg = this.querySelector('[name=message]');
    let valid = true;
    this.querySelectorAll('.error').forEach(el=> el.textContent='');
    if(!name.value.trim()){ this.querySelector('.err-name').textContent = 'Nome é obrigatório'; valid=false; }
    if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){ this.querySelector('.err-email').textContent = 'Email inválido'; valid=false; }
    if(msg.value.trim().length < 10){ this.querySelector('.err-message').textContent = 'Mínimo 10 caracteres'; valid=false; }
    if(valid){ showToast('Mensagem enviada — (simulação)'); this.reset(); }
  });
});
