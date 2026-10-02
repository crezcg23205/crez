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
    // --- SMARTCAST MEDIA ---
    { 
      src: '10v1.mp4', 
      title: 'Smartcast media', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    { 
      src: '7v2.mp4', 
      title: 'Smartcast media', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
    { 
      src: '8v2.mp4', 
      title: 'Smartcast media', 
      subtitle: 'dynamic edit',
      deliverables: ['Motion Graphics', 'Typography', 'Sound Design'],
      gridClass: 'col-span-6'
    },
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
            <video src="${proj.src}" autoplay muted loop playsinline preload="metadata" disablePictureInPicture controlsList="nodownload" oncontextmenu="return false;"></video>
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

  // ---------- 2-Row Showcase (Top: Vertical, Bottom: Horizontal) ----------
  const trackTop1 = document.getElementById('carouselTrackTop1');
  const trackBottom1 = document.getElementById('carouselTrackBottom1');
  const trackTopWrapper = document.getElementById('carouselTrackTopWrapper');
  const trackBottomWrapper = document.getElementById('carouselTrackBottomWrapper');

  function isProjVertical(proj) {
    if (proj.isVertical || proj.noCrop || proj.gridClass === 'col-span-3' || proj.gridClass === 'col-span-4') {
      return true;
    }
    const vertFiles = ['AQNwZro', 'un1', 'un2', 'un3', '4-mefortg', 'SaveInta', 'AQNBGsao', 'AQO8jSCn', 'AQNfxjw', 'AQPsEune'];
    return vertFiles.some(f => proj.src.includes(f));
  }

  function createCardHtml(proj, isVert, isInitial) {
    const cls = isVert ? 'is-vertical' : 'is-horizontal';
    const srcAttr = isInitial ? `src="${proj.src}" preload="metadata"` : `data-src="${proj.src}" preload="none"`;
    return `
      <div class="portfolio-card ${cls}" data-video-src="${proj.src}">
        <video ${srcAttr} autoplay muted loop playsinline disablePictureInPicture controlsList="nodownload noplaybackrate" oncontextmenu="return false;"></video>
      </div>
    `;
  }

  // Hardware decode session manager (caps concurrent playing videos to max 6)
  const MAX_ACTIVE_DECODERS = 6;
  const activePlayingVideos = new Set();

  function playVideoSafely(video) {
    if (!video) return;
    if (!video.src && video.dataset.src) {
      video.src = video.dataset.src;
    }
    if (activePlayingVideos.size >= MAX_ACTIVE_DECODERS && !activePlayingVideos.has(video)) {
      const oldest = activePlayingVideos.values().next().value;
      if (oldest) {
        oldest.pause();
        activePlayingVideos.delete(oldest);
      }
    }
    video.muted = true;
    const p = video.play();
    if (p !== undefined) {
      p.then(() => activePlayingVideos.add(video)).catch(() => {});
    }
  }

  function pauseVideoSafely(video) {
    if (!video) return;
    video.pause();
    activePlayingVideos.delete(video);
  }

  // Smooth rAF-locked mouse drag scrolling
  function enableDragScroll(track) {
    if (!track) return;
    let isDown = false;
    let startX = 0;
    let initialScrollLeft = 0;
    let targetScrollLeft = 0;
    let rAFId = null;

    const onMouseDown = (e) => {
      isDown = true;
      track.classList.add('is-dragging');
      startX = e.pageX - track.offsetLeft;
      initialScrollLeft = track.scrollLeft;
      targetScrollLeft = initialScrollLeft;
    };

    const stopDrag = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove('is-dragging');
      if (rAFId) {
        cancelAnimationFrame(rAFId);
        rAFId = null;
      }
      updateVisibleVideos();
    };

    const renderDrag = () => {
      if (isDown) {
        track.scrollLeft = targetScrollLeft;
        rAFId = requestAnimationFrame(renderDrag);
      } else {
        rAFId = null;
      }
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      targetScrollLeft = initialScrollLeft - walk;
      if (!rAFId) {
        rAFId = requestAnimationFrame(renderDrag);
      }
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', stopDrag);
    track.addEventListener('mouseup', stopDrag);
    track.addEventListener('mousemove', onMouseMove);
    track.addEventListener('scroll', () => {
      if (!isDown && !rAFId) {
        rAFId = requestAnimationFrame(() => {
          updateVisibleVideos();
          rAFId = null;
        });
      }
    }, { passive: true });
  }

  let isPortfolioSectionInView = true;

  function updateVisibleVideos() {
    if (!isPortfolioSectionInView) {
      activePlayingVideos.forEach(v => v.pause());
      activePlayingVideos.clear();
      return;
    }
    const tracks = [trackTopWrapper, trackBottomWrapper];
    tracks.forEach(track => {
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const cards = track.querySelectorAll('.portfolio-card');
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const video = card.querySelector('video');
        if (!video) return;
        const isVisible = cardRect.right >= (trackRect.left - 60) && cardRect.left <= (trackRect.right + 60);
        if (isVisible) {
          playVideoSafely(video);
        } else {
          pauseVideoSafely(video);
        }
      });
    });
  }

  function setupTrackObserver(trackEl) {
    if (!trackEl) return;
    const cards = trackEl.querySelectorAll('.portfolio-card');
    const trackObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('video');
        if (!video) return;
        if (entry.isIntersecting && isPortfolioSectionInView) {
          playVideoSafely(video);
        } else {
          pauseVideoSafely(video);
        }
      });
    }, {
      root: trackEl,
      rootMargin: '0px 100px 0px 100px',
      threshold: 0.05
    });

    cards.forEach(card => trackObserver.observe(card));
  }

  function renderCarousel() {
    if (!trackTop1) return;

    const verticalProjects = projects.filter(p => isProjVertical(p));
    const horizontalProjects = projects.filter(p => !isProjVertical(p));

    const topList = [...verticalProjects, ...verticalProjects];
    const bottomList = [...horizontalProjects, ...horizontalProjects];

    const topHtml = topList.map((p, idx) => createCardHtml(p, true, idx < 8)).join('');
    const bottomHtml = bottomList.map((p, idx) => createCardHtml(p, false, idx < 4)).join('');

    trackTop1.innerHTML = topHtml;
    if (trackBottom1) trackBottom1.innerHTML = bottomHtml;

    const topWrapper = trackTopWrapper || trackTop1.parentElement;
    const bottomWrapper = trackBottomWrapper || trackBottom1.parentElement;

    enableDragScroll(topWrapper);
    enableDragScroll(bottomWrapper);

    setupTrackObserver(topWrapper);
    setupTrackObserver(bottomWrapper);
  }

  if (portfolioContent) {
    renderPortfolio();
  }
  renderCarousel();

  // Page-level observer to pause all videos when section is offscreen
  function initPageLevelObserver() {
    const portfolioSection = document.getElementById('work');
    if (portfolioSection) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isPortfolioSectionInView = entry.isIntersecting;
          if (isPortfolioSectionInView) {
            updateVisibleVideos();
          } else {
            activePlayingVideos.forEach((v) => v.pause());
            activePlayingVideos.clear();
          }
        });
      }, { rootMargin: '100px 0px 100px 0px', threshold: 0.02 });

      sectionObserver.observe(portfolioSection);
    }

    // Grid videos on portfolio.html
    const gridVideos = document.querySelectorAll('.project-video-wrapper video');
    if (gridVideos.length > 0) {
      const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            if (!v.src && v.dataset.src) v.src = v.dataset.src;
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      }, { rootMargin: '80px 0px 80px 0px', threshold: 0.1 });

      gridVideos.forEach((v) => gridObserver.observe(v));
    }

    // Pause offscreen CSS marquees (Brands and Testimonials)
    const marquees = document.querySelectorAll('.testimonials-marquee-wrapper, .brands-mobile');
    if (marquees.length > 0) {
      const marqueeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('is-paused');
          } else {
            entry.target.classList.add('is-paused');
          }
        });
      }, { rootMargin: '100px 0px 100px 0px', threshold: 0.01 });

      marquees.forEach(el => marqueeObserver.observe(el));
    }

    const kickstart = () => {
      updateVisibleVideos();
      window.removeEventListener('pointerdown', kickstart);
      window.removeEventListener('scroll', kickstart);
    };
    window.addEventListener('pointerdown', kickstart, { once: true, passive: true });
    window.addEventListener('scroll', kickstart, { once: true, passive: true });
  }

  requestAnimationFrame(initPageLevelObserver);

  // ---------- Video Modal Disabled (Videos stay and play in place like GIFs) ----------
  const videoModal = document.getElementById('videoModal');
  const videoModalClose = document.getElementById('videoModalClose');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  let activeVideoWrapper = null;

  // ---------- Video Protection & GIF-Mode Enforcer ----------
  // Disable right-click context menu on all videos (blocks "Save video as...")
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.closest('video, .project-video-wrapper, .portfolio-card, .video-modal')) {
      e.preventDefault();
      return false;
    }
  });

  // Block dragging video elements to desktop or folder
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.closest('video, .project-video-wrapper, .portfolio-card')) {
      e.preventDefault();
      return false;
    }
  });

  // Programmatically enforce muted + loop + nodownload on all video elements
  function enforceGifVideoMode() {
    document.querySelectorAll('video').forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      v.setAttribute('muted', '');
      v.setAttribute('loop', '');
      v.setAttribute('playsinline', '');
      v.setAttribute('disablePictureInPicture', '');
      v.setAttribute('controlsList', 'nodownload noplaybackrate');
      v.setAttribute('oncontextmenu', 'return false;');
    });
  }

  requestAnimationFrame(enforceGifVideoMode);

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
