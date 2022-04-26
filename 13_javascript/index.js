window.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
        btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger__list').style.left = '0';
    document.querySelector('.header').style.overflow = 'visible';
  });

  document.querySelector('.burger__icon').addEventListener('click', function() {
    document.querySelector('.burger__list').style.left = '-300%';
  });

  document.querySelector('#search__activator').addEventListener('click', function() {
    document.querySelector('.header').querySelectorAll('.menu__item:not(:last-child)').forEach(function(item) {
      item.style.display = 'none';
    });
    document.querySelector('.header').querySelector('.logo').style.display = 'none';
    document.querySelector('.search').style.cssText = 'display: block; padding: 16px 13px 16px 32px; border-radius: 16px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);';
    document.querySelector('.search__text').style.display = 'inline-block';
    document.querySelector('.search__button_hidden').style.display = 'inline-block';
    document.querySelectorAll('.search__icon').forEach(function(icon) {
      icon.style.outlineWidth = '0';
    });
    this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '#ff9900';
    });
    this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '#ff9900';
    });
  });

  document.querySelector('#search__deactivator').addEventListener('click', function() {
    document.querySelector('.search').style.cssText = 'display: inline-block; padding: 0; border-radius: 0; box-shadow: none;';
    document.querySelector('.search__text').style.display = 'none';
    document.querySelector('.search__button_hidden').style.display = 'none';
  });

  document.querySelector('#search__deactivator').addEventListener('mousedown', function() {
    this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '#333';
    });
    this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '#333';
    });
  });

  document.querySelector('#search__deactivator').addEventListener('mouseup', function() {
    document.querySelector('.search').style.cssText = '';
    document.querySelector('.header').querySelectorAll('.menu__item:not(:last-child)').forEach(function(item) {
      item.style.display = '';
    });
    document.querySelector('.header').querySelector('.logo').style.display = '';
    document.querySelector('#search__activator').querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '';
    });
    document.querySelector('#search__activator').querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '';
    });
    this.querySelectorAll('.search__icon-part_fill').forEach(function(icon) {
      icon.style.fill = '';
    });
    this.querySelectorAll('.search__icon-part_stroke').forEach(function(icon) {
      icon.style.stroke = '';
    });
  });

  const pos = document.querySelector('.swiper-pagination');
  pos.style.bottom = '30px';

  const margin_add = document.querySelectorAll('.swiper-pagination-bullet:not(:last-child)');
  margin_add.forEach(function(el) {
    el.style.margin = '0';
    el.style.marginRight = '20px'
  });

  const margin_zero = document.querySelector('.swiper-pagination-bullet:last-child');
  margin_zero.style.margin = '0';
})
