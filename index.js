// Глобальная логика интерфейса WiseKeys
window.showView = function(viewId) {
  const views = ['view-landing', 'view-auth', 'view-dashboard', 'view-error'];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === viewId) {
        el.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Обновление навигационной панели
  const navHome = document.getElementById('nav-home');
  const navProfile = document.getElementById('nav-profile');
  
  if (viewId === 'view-landing') {
    navHome?.classList.add('active');
    navProfile?.classList.remove('active');
    navHome?.querySelector('.nav-text')?.classList.remove('hidden');
    navProfile?.querySelector('.nav-text')?.classList.add('hidden');
  } else if (viewId === 'view-error') {
    navHome?.classList.remove('active');
    navProfile?.classList.remove('active');
  } else {
    navHome?.classList.remove('active');
    navProfile?.classList.add('active');
    navHome?.querySelector('.nav-text')?.classList.add('hidden');
    navProfile?.querySelector('.nav-text')?.classList.remove('hidden');
  }
};

window.scrollToId = function(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

window.copyText = function(elementId) {
  const el = document.getElementById(elementId);
  const text = el ? el.innerText : '';
  
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('WiseKeys UI Ready with Centered Text and Error Screen');
});
