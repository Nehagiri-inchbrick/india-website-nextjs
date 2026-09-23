(function () {
  var store = window.RECENT_VIEWS_STORE;
  var savedStore = window.SAVED_STORE;
  var allProperties = window.LISTINGS_DATA || [];
  var gridEl = document.getElementById('rvGrid');
  var emptyEl = document.getElementById('rvEmpty');
  var countEl = document.getElementById('rvCount');
  var statCountEl = document.getElementById('rvStatCount');
  var statLastEl = document.getElementById('rvStatLast');
  var toastEl = document.getElementById('rvToast');
  var clearBtn = document.getElementById('rvClearBtn');

  function getProperty(id) {
    return allProperties.find(function (p) {
      return p.id === Number(id);
    });
  }

  function priceLabel(p) {
    return window.listingPrice ? window.listingPrice(p) : p.price;
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toastEl.classList.remove('is-visible');
    }, 2400);
  }

  function formatRelative(ts) {
    var diff = Date.now() - ts;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    if (diff < 172800000) return 'Yesterday';
    if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';
    return new Date(ts).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }

  function render() {
    var entries = store.getAll();
    var items = entries
      .map(function (entry) {
        var p = getProperty(entry.id);
        return p ? { entry: entry, property: p } : null;
      })
      .filter(Boolean);

    if (statCountEl) statCountEl.textContent = String(items.length);
    if (statLastEl) {
      statLastEl.textContent = items.length ? formatRelative(items[0].entry.viewedAt) : '—';
    }
    if (countEl) {
      countEl.textContent = items.length + (items.length === 1 ? ' property' : ' properties');
    }

    if (!items.length) {
      if (gridEl) gridEl.innerHTML = '';
      if (emptyEl) emptyEl.hidden = false;
      if (clearBtn) clearBtn.disabled = true;
      return;
    }

    if (emptyEl) emptyEl.hidden = true;
    if (clearBtn) clearBtn.disabled = false;
    if (!gridEl) return;

    gridEl.innerHTML = items
      .map(function (item, index) {
        var p = item.property;
        var isSaved = savedStore && savedStore.isSaved(p.id);
        return (
          '<article class="rv-card' +
          (index === 0 ? ' rv-card--latest' : '') +
          '" data-id="' +
          p.id +
          '">' +
          '<a href="/listing-detail?id=' +
          p.id +
          '" class="rv-card-media">' +
          '<img src="' +
          p.img.replace('w=1200', 'w=600') +
          '" alt="' +
          p.name +
          '" loading="lazy">' +
          '<span class="rv-card-badge">' +
          p.status +
          '</span>' +
          '<span class="rv-card-time"><i class="fas fa-clock"></i> ' +
          formatRelative(item.entry.viewedAt) +
          '</span></a>' +
          '<div class="rv-card-body">' +
          '<h3><a href="/listing-detail?id=' +
          p.id +
          '">' +
          p.name +
          '</a></h3>' +
          '<p class="rv-card-loc">' +
          p.location +
          ', ' +
          p.city +
          '</p>' +
          '<div class="rv-card-meta">' +
          '<span>' +
          p.bhk +
          '</span><span>' +
          p.area +
          '</span><span>' +
          p.type +
          '</span></div>' +
          '<p class="rv-card-price">' +
          priceLabel(p) +
          '</p>' +
          '<div class="rv-card-actions">' +
          '<a href="/listing-detail?id=' +
          p.id +
          '" class="rv-icon-btn" title="View again"><i class="fas fa-eye"></i></a>' +
          '<button type="button" class="rv-icon-btn' +
          (isSaved ? ' is-active' : '') +
          '" data-action="wishlist" title="Save"><i class="' +
          (isSaved ? 'fas' : 'far') +
          ' fa-heart"></i></button>' +
          '<button type="button" class="rv-icon-btn" data-action="remove" title="Remove"><i class="fas fa-xmark"></i></button>' +
          '</div></div></article>'
        );
      })
      .join('');

    bindActions();
  }

  function bindActions() {
    if (!gridEl) return;
    gridEl.querySelectorAll('.rv-card').forEach(function (card) {
      var id = Number(card.dataset.id);
      card.querySelectorAll('[data-action]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var action = btn.dataset.action;
          if (action === 'wishlist' && savedStore) {
            savedStore.toggle(id);
            showToast(savedStore.isSaved(id) ? 'Saved to wishlist' : 'Removed from wishlist');
            render();
            return;
          }
          if (action === 'remove') {
            store.remove(id);
            showToast('Removed from history');
            render();
          }
        });
      });
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      store.clear();
      showToast('History cleared');
      render();
    });
  }

  render();

  window.addEventListener('inchbrick-currency-change', render);
})();
