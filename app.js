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
    // --- NEW ROW ---
    { 
      src: 'meport13res.mp4', 
      title: 'Motion Project', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    { 
      src: 'meport14res.mp4', 
      title: 'Motion Project', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    { 
      src: '5v2.mp4', 
      title: 'Motion Project', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    { 
      src: 'AQNwZro_xJtNdi6bYZPw21NaVKnFnCNymHbCU2gPb2hgC6ae2AnwFsfoqOxtNyR.mp4', 
      title: 'Motion Project', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    // --- ROW 1 (NEW ADDITIONS) ---
    { 
      src: 'for f.mp4', 
      title: 'SFAD', 
      subtitle: 'full motion/sfx/design',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-12'
    },
    { 
      src: 'meport5res.mp4', 
      title: 'vero.uz', 
      subtitle: 'full motion/sfx/design',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    { 
      src: 'meport6res.mp4', 
      title: 'tepalab agency', 
      subtitle: 'expert reels motion',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    // --- ROW 2 ---
    { 
      src: 'meport4res.mp4', 
      title: 'SFAD', 
      subtitle: 'dynamic edit',
      summary: 'A high-energy promotional video crafted for SFAD.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-12'
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
      src: 'un1.mp4', 
      title: 'Flour Mill', 
      subtitle: 'Motion reels',
      summary: 'High-quality motion video tailored for social media engagement.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-4',
      isVertical: true
    },
    { 
      src: 'un2.mp4', 
      title: 'Flour Mill', 
      subtitle: 'Motion reels',
      summary: 'High-quality motion video tailored for social media engagement.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-4',
      isVertical: true
    },
    { 
      src: 'un3.mp4', 
      title: 'Flour Mill', 
      subtitle: 'Motion reels',
      summary: 'High-quality motion video tailored for social media engagement.',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-4',
      isVertical: true
    },
    // --- ROW 5 ---
    { 
      src: 'AQNfxjwV0rVswEwjarweXcYUDWIPDh2Q1GoHJZkM_tie5Ij02RmUuO23F4QImGU (2).mp4', 
      title: 'alivisionvip', 
      subtitle: 'cinematic edit',
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
      deliverables: ['Typography', 'Sound Design', 'Coloring'],
      challenge: 'Balancing a strong brand message with eye-catching visuals.',
      idea: 'Using rhythmic editing perfectly synced to a custom sound design track.',
      gridClass: 'col-span-6',
      noCrop: true
    },
    // --- ROW 6 ---
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
    }
  ];

  function renderPortfolio() {
    if (!portfolioContent) return;
    let html = '';
    projects.forEach((proj, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      
      const tagsHtml = proj.deliverables.map(t => `<span>${t}</span>`).join('');
      
      const noCropClass = proj.noCrop ? 'no-crop' : '';
      const verticalClass = proj.isVertical ? 'vertical-video' : '';

      html += `
        <div class="project-block reveal ${proj.gridClass}">
          <div class="project-video-wrapper ${noCropClass} ${verticalClass}" data-video-src="${proj.src}">
            <video src="${proj.src}" autoplay muted loop playsinline preload="metadata"></video>
            <div class="project-video-overlay">
              <div class="overlay-num">${num}</div>
              <div class="overlay-title">${proj.title}</div>
              <div class="overlay-subtitle">${proj.subtitle}</div>
            </div>
          </div>
          
          <div class="project-details">
            ${proj.summary ? `
            <div class="details-section">
              <h4>SUMMARY</h4>
              <p>${proj.summary}</p>
            </div>
            ` : ''}
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

  // ---------- Continuous 2-Row Carousel (Top: Vertical, Bottom: Horizontal) ----------
  const trackTop1 = document.getElementById('carouselTrackTop1');
  const trackTop2 = document.getElementById('carouselTrackTop2');
  const trackBottom1 = document.getElementById('carouselTrackBottom1');
  const trackBottom2 = document.getElementById('carouselTrackBottom2');

  function isProjVertical(proj) {
    if (proj.isVertical || proj.noCrop || proj.gridClass === 'col-span-3' || proj.gridClass === 'col-span-4') {
      return true;
    }
    const vertFiles = ['AQNwZro', 'un1', 'un2', 'un3', '4-mefortg', 'SaveInta', 'AQNBGsao', 'AQO8jSCn', 'AQNfxjw', 'AQPsEune'];
    return vertFiles.some(f => proj.src.includes(f));
  }

  function createCardHtml(proj, isVert) {
    const cls = isVert ? 'is-vertical' : 'is-horizontal';
    return `
      <div class="portfolio-card ${cls}" data-video-src="${proj.src}" role="button" tabindex="0" aria-label="${proj.title}">
        <video src="${proj.src}" autoplay muted loop playsinline preload="metadata"></video>
      </div>
    `;
  }

  function renderCarousel() {
    if (!trackTop1) return;

    const verticalProjects = projects.filter(p => isProjVertical(p));
    const horizontalProjects = projects.filter(p => !isProjVertical(p));

    const topHtml = verticalProjects.map(p => createCardHtml(p, true)).join('');
    const bottomHtml = horizontalProjects.map(p => createCardHtml(p, false)).join('');

    trackTop1.innerHTML = topHtml;
    if (trackTop2) trackTop2.innerHTML = topHtml;

    if (trackBottom1) trackBottom1.innerHTML = bottomHtml;
    if (trackBottom2) trackBottom2.innerHTML = bottomHtml;
  }

  // Render on load
  renderPortfolio();
  renderCarousel();

  // ---------- 3D Circular Arc Carousel Effect ----------
  function updateCarousel3DCurve() {
    const wrapper = document.querySelector('.portfolio-carousel-wrapper');
    if (!wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
    const halfWidth = (wrapperRect.width / 2) || 1;

    const cards = wrapper.querySelectorAll('.portfolio-card');
    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      // Skip if offscreen
      if (cardRect.right < wrapperRect.left - 100 || cardRect.left > wrapperRect.right + 100) return;

      const cardCenter = cardRect.left + cardRect.width / 2;
      const normX = (cardCenter - wrapperCenter) / halfWidth;
      const clampedX = Math.max(-1.4, Math.min(1.4, normX));

      // 3D rotation Y along the circular cylinder curve
      const rotateY = clampedX * 22;
      // Z depth translation to create the convex arch curve
      const translateZ = (1 - Math.pow(Math.abs(clampedX), 1.6)) * 40;
      // Subtle scale adjust
      const scale = 1 - Math.abs(clampedX) * 0.04;

      const isHovered = card.matches(':hover');
      const hoverScale = isHovered ? 1.05 : 1;
      const hoverZ = isHovered ? translateZ + 20 : translateZ;

      card.style.transform = `perspective(900px) rotateY(${rotateY}deg) translateZ(${hoverZ}px) scale(${scale * hoverScale})`;
    });

    requestAnimationFrame(updateCarousel3DCurve);
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(updateCarousel3DCurve);
  });

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

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.portfolio-3d-card, .portfolio-card, .project-video-wrapper');
    if (trigger && videoModal && modalVideoPlayer) {
      const src = trigger.getAttribute('data-video-src');
      if (src) {
        activeVideoWrapper = trigger;
        modalVideoPlayer.src = src;
        videoModal.classList.add('open');
        modalVideoPlayer.play().catch(()=>{});
        document.body.style.overflow = 'hidden';
      }
    }
  });

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

  // (Theme Toggle Removed)

})();
