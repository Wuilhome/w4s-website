/**
 * W4S Scroll Observer
 * Détecte les éléments entrant dans le viewport et déclenche les animations
 */

class ScrollObserver {
  constructor(options = {}) {
    this.threshold = options.threshold || 0.1;
    this.rootMargin = options.rootMargin || '0px 0px -50px 0px';
    this.observer = null;
    this.init();
  }

  init() {
    // Vérifier le support de IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Fallback: afficher tous les éléments
      document.querySelectorAll('.scroll-animate').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    // Créer l'observer
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries),
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      }
    );

    // Observer tous les éléments avec la classe scroll-animate
    this.observe();
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // Optionnel: arrêter d'observer une fois visible
        if (entry.target.dataset.once !== 'false') {
          this.observer.unobserve(entry.target);
        }
      } else if (entry.target.dataset.once === 'false') {
        // Si l'élément peut être ré-animé
        entry.target.classList.remove('is-visible');
      }
    });
  }

  observe() {
    document.querySelectorAll('.scroll-animate').forEach(el => {
      this.observer.observe(el);
    });
  }

  // Méthode pour ajouter de nouveaux éléments dynamiquement
  add(element) {
    if (this.observer && element) {
      this.observer.observe(element);
    }
  }

  // Nettoyer
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/**
 * Counter Animation
 * Anime les compteurs de 0 à leur valeur finale
 */
class CounterAnimation {
  constructor(element, options = {}) {
    this.element = element;
    this.target = parseInt(element.dataset.target) || 0;
    this.duration = options.duration || 2000;
    this.suffix = element.dataset.suffix || '';
    this.prefix = element.dataset.prefix || '';
    this.started = false;
  }

  start() {
    if (this.started) return;
    this.started = true;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (this.target - startValue) * easeOut);

      this.element.textContent = this.prefix + current.toLocaleString('fr-FR') + this.suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}

/**
 * Parallax Effect
 * Effet parallax léger sur le scroll
 */
class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('.parallax-element');
    this.ticking = false;

    if (this.elements.length > 0) {
      this.init();
    }
  }

  init() {
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    this.update();
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.update();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  update() {
    const scrollY = window.pageYOffset;

    this.elements.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.5;
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const offset = (scrollY - elementTop) * speed;

      el.style.transform = `translateY(${offset}px)`;
    });
  }
}

/**
 * Magnetic Effect
 * Effet magnétique sur les boutons
 */
class MagneticEffect {
  constructor() {
    this.elements = document.querySelectorAll('.magnetic');
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.addEventListener('mousemove', (e) => this.onMouseMove(e, el));
      el.addEventListener('mouseleave', (e) => this.onMouseLeave(e, el));
    });
  }

  onMouseMove(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const strength = 0.3;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  onMouseLeave(e, el) {
    el.style.transform = 'translate(0, 0)';
  }
}

/**
 * Tilt Effect
 * Effet de rotation 3D au survol
 */
class TiltEffect {
  constructor() {
    this.elements = document.querySelectorAll('.tilt-effect');
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      el.addEventListener('mousemove', (e) => this.onMouseMove(e, el));
      el.addEventListener('mouseleave', (e) => this.onMouseLeave(e, el));
    });
  }

  onMouseMove(e, el) {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  onMouseLeave(e, el) {
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  window.scrollObserver = new ScrollObserver();

  // Counter animations
  const counters = document.querySelectorAll('.counter[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = new CounterAnimation(entry.target);
        counter.start();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // Parallax effect (seulement sur desktop)
  if (window.innerWidth > 768) {
    new ParallaxEffect();
  }

  // Magnetic effect
  new MagneticEffect();

  // Tilt effect
  new TiltEffect();
});

// Export pour utilisation dans d'autres scripts
export { ScrollObserver, CounterAnimation, ParallaxEffect, MagneticEffect, TiltEffect };
