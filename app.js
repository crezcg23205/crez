// ==========================================
// CREZ Motion — App (iee.studio WHITE clone)
// ==========================================

(function () {
  'use strict';

  // ---------- Reveal on Scroll ----------
  function initReveal() {
    const targets = document.querySelectorAll(
      '.hero-left, .hero-right, .section-label-row, .category-tabs, .case-row, .faq-item, .start-left, .start-right, .footer-inner'
    );
    targets.forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });

    const all = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
    all.forEach((el) => io.observe(el));
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(initReveal);
  });

  // ---------- Stagger case rows ----------
  document.querySelectorAll('.case-row').forEach((row, i) => {
    row.style.transitionDelay = `${i * 0.05}s`;
  });

  // ---------- Smooth Scroll ----------
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const overlay = document.getElementById('mobileOverlay');
      const burger = document.getElementById('burger');
      if (overlay) overlay.classList.remove('open');
      if (burger) burger.classList.remove('open');
      document.body.style.overflow = '';
      window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
    }
  });

  // ---------- Mobile Menu ----------
  const burger = document.getElementById('burger');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (burger && mobileOverlay) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ---------- Inline Portfolio ----------
  const portfolioContent = document.getElementById('portfolioContent');

  // Full detailed playlist with specific grid layouts
  const projects = [
    // --- ROW 1 ---
    { 
      src: 'promo200.mp4', 
      title: 'Millat Umidi', 
      subtitle: 'Promo video',
      summary: 'A full production motion animation for a premium product launch.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design', 'Infographics'],
      challenge: 'Showcasing the product\'s intricate details in a visually stunning way.',
      idea: 'Using extreme close-ups and dramatic lighting to emphasize quality and craftsmanship.',
      gridClass: 'col-span-7',
      noCrop: true
    },
    { 
      src: 'AQO6sWjMKyvkrzRrw8z_VJVBxvMMbml4OYmeMZr3Gmuhn8uSrM86d87nedZmd_h.mp4', 
      title: 'Yusuf Inspire', 
      subtitle: 'Motion reels',
      summary: 'A sophisticated motion design piece focused on fluid transitions and engaging typography.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      challenge: 'Creating an inspiring narrative using purely abstract motion and text.',
      idea: 'Leveraging dynamic pacing and bold colors to keep the viewer constantly engaged.',
      gridClass: 'col-span-5',
      noCrop: true
    },
    // --- ROW 2 ---
    { 
      src: 'SaveInta_com_AQNnbdIG6N4a2qw9wjt12F87bm_I2jTXSkpfGSUl6Q_YENrVBGDvSGpnPqNY8tT.mp4', 
      title: 'Millat Umidi', 
      subtitle: 'Promo Video',
      summary: 'An inspiring promotional video aimed at highlighting educational initiatives.',
      deliverables: ['Promo Video', 'Scripting', 'Motion Graphics'],
      challenge: 'Conveying a deeply emotional message within a short timeframe.',
      idea: 'Combining powerful voiceover with subtle, elegant motion graphics.',
      gridClass: 'col-span-3',
      noCrop: true
    },
    { 
      src: 'AQNBGsao1FSHXxlFW7_cs26nRF_ig4DV5jeRUEabyqe5Ep0qpEhhYOAqllXjiAD.mp4', 
      title: 'Yusuf inspire', 
      subtitle: 'Motion reels',
      summary: 'A dynamic portfolio showcase mixing various 3D and 2D motion techniques.',
      deliverables: ['3D Animation', 'Compositing', 'Sound Design'],
      challenge: 'Blending different styles seamlessly into one cohesive video.',
      idea: 'Creating a unified visual language through consistent color grading and pacing.',
      gridClass: 'col-span-3',
      noCrop: true
    },
    { 
      src: 'AQO8jSCn4cGbejgB6EXSnY3SNBQaExPjyQbyaKmwd9jTsOcHXkk0wJL6yZFmmu8.mp4', 
      title: 'Millat Umidi', 
      subtitle: 'Promo video',
      summary: 'A secondary motion piece for the Millat Umidi campaign focusing on statistics and impact.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design', 'Infographics'],
      challenge: 'Making data and statistics visually appealing and easy to understand.',
      idea: 'Using dynamic, branded infographics that animate in sync with the narration.',
      gridClass: 'col-span-3',
      noCrop: true
    },
    { 
      src: '4-mefortg.mp4', 
      title: 'Odilbekova', 
      subtitle: 'Motion reels',
      summary: 'A high-energy social media reel designed for maximum engagement and retention.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design', 'Infographics'],
      challenge: 'Capturing the attention of viewers in the first 3 seconds while maintaining a premium look.',
      idea: 'Using rapid cuts synchronized perfectly with an upbeat soundtrack and custom transitions.',
      gridClass: 'col-span-3',
      noCrop: true
    },
    // --- ROW 3 ---
    { 
      src: '605-Branding.mp4', 
      title: '605 Agency', 
      subtitle: 'Promo video',
      summary: 'A comprehensive brand reel showcasing the creative capabilities and unique identity of 605 Agency.',
      deliverables: ['Brand Film', 'Motion Design', 'Editing'],
      challenge: 'The agency needed a dynamic way to present their portfolio to high-end clients without losing their core identity.',
      idea: 'We crafted a fast-paced, visually striking reel that flows seamlessly from one project to the next.',
      gridClass: 'col-span-7'
    },
    { 
      src: 'standart.mp4', 
      title: 'Marketing agency', 
      subtitle: 'Social Media Reel',
      summary: 'An example of our standard package delivering high-quality results efficiently.',
      deliverables: ['Social Video', 'Editing', 'Captioning'],
      challenge: 'Producing a high-quality video within a strict turnaround time.',
      idea: 'Utilizing streamlined workflows and custom templates without sacrificing quality.',
      gridClass: 'col-span-5'
    },
    // --- ROW 4 ---
    { 
      src: 'AQNfxjwV0rVswEwjarweXcYUDWIPDh2Q1GoHJZkM_tie5Ij02RmUuO23F4QImGU (2).mp4', 
      title: 'alivisionvip', 
      subtitle: 'cinematic edit',
      summary: 'A dynamic, high-energy motion piece crafted to capture attention immediately.',
      deliverables: ['Typography', 'Sound Design', 'Coloring'],
      challenge: 'Creating fluid, fast-paced transitions that keep the viewer engaged.',
      idea: 'Applying modern motion design principles with bold, striking typography.',
      gridClass: 'col-span-6',
      noCrop: true
    },
    { 
      src: 'AQPsEuneNNBGcnG_LbMr_c2rNkpS5sdZ_psmsj53WCnZB35dF97qlzuM6VFeDW2W5YIb0xRkj54 (2).mp4', 
      title: 'alivisionvip', 
      subtitle: 'cinematic edit',
      summary: 'A visually engaging promotional video focusing on brand storytelling and product appeal.',
      deliverables: ['Typography', 'Sound Design', 'Coloring'],
      challenge: 'Balancing a strong brand message with eye-catching visuals.',
      idea: 'Using rhythmic editing perfectly synced to a custom sound design track.',
      gridClass: 'col-span-6',
      noCrop: true
    },
    // --- ROW 5 ---
    { 
      src: 'AQP1B2m9brsMVnUsbVPTPwE2_AGhejug1y9CSq3a_MP43ndG5y7rM8zadICQIxo.mp4', 
      title: 'WBC boxing', 
      subtitle: 'dynamic edit',
      summary: 'A comprehensive brand showcase displaying the best of our motion editing capabilities.',
      deliverables: ['Sound Design'],
      challenge: 'Condensing a wide range of visual styles into one cohesive masterpiece.',
      idea: 'Creating a seamless visual journey that leaves a lasting impression.',
      gridClass: 'col-span-12'
    }
  ];

  function renderPortfolio() {
    if (!portfolioContent) return;
    let html = '';
    projects.forEach((proj, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      
      const tagsHtml = proj.deliverables.map(t => `<span>${t}</span>`).join('');
      
      const noCropClass = proj.noCrop ? 'no-crop' : '';

      html += `
        <div class="project-block reveal ${proj.gridClass}">
          <div class="project-video-wrapper ${noCropClass}" data-video-src="${proj.src}">
            <video src="${proj.src}" autoplay muted loop playsinline preload="metadata"></video>
            <div class="project-video-overlay">
              <div class="overlay-num">${num}</div>
              <div class="overlay-title">${proj.title}</div>
              <div class="overlay-subtitle">${proj.subtitle}</div>
            </div>
          </div>
          
          <div class="project-details">
            <div class="details-section">
              <h4>SUMMARY</h4>
              <p>${proj.summary}</p>
            </div>
            <div class="details-section">
              <h4>DELIVERABLES</h4>
              <div class="tags">
                ${tagsHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    });
    portfolioContent.innerHTML = html;
  }

  // Render on load
  renderPortfolio();

  // ---------- Lazy Video ----------
  const heroVideo = document.querySelector('.hero-visual video');
  if (heroVideo) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.1 });
    videoObserver.observe(heroVideo);
  }

  // ---------- Video Modal ----------
  const videoModal = document.getElementById('videoModal');
  const videoModalClose = document.getElementById('videoModalClose');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  let activeVideoWrapper = null;

  if (portfolioContent) {
    portfolioContent.addEventListener('click', (e) => {
      const wrapper = e.target.closest('.project-video-wrapper');
      if (wrapper) {
        const src = wrapper.getAttribute('data-video-src');
        if (src) {
          activeVideoWrapper = wrapper;
          modalVideoPlayer.src = src;
          videoModal.classList.add('open');
          modalVideoPlayer.play().catch(()=>{});
          document.body.style.overflow = 'hidden';
        }
      }
    });
  }

  function closeVideoModal() {
    videoModal.classList.remove('open');
    modalVideoPlayer.pause();
    modalVideoPlayer.src = '';
    document.body.style.overflow = '';

    if (activeVideoWrapper) {
      const overlay = activeVideoWrapper.querySelector('.project-video-overlay');
      if (overlay) {
        overlay.classList.add('force-show');
        setTimeout(() => {
          overlay.classList.remove('force-show');
        }, 3000);
      }
      activeVideoWrapper = null;
    }
  }

  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target.classList.contains('video-modal-content')) {
        closeVideoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('open')) {
      closeVideoModal();
    }
  });

})();
