(function (global) {
  var STORAGE_KEY = 'inchbrick-recent-views';
  var MAX = 20;

  function readRaw() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  function normalizeEntry(entry) {
    if (!entry || entry.id == null) return null;
    return {
      id: Number(entry.id),
      viewedAt: Number(entry.viewedAt) || Date.now(),
    };
  }

  function write(entries) {
    var cleaned = entries
      .map(normalizeEntry)
      .filter(Boolean)
      .slice(0, MAX);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    return cleaned;
  }

  function seedDemo() {
    var now = Date.now();
    return write([
      { id: 5, viewedAt: now - 40 * 60 * 1000 },
      { id: 7, viewedAt: now - 4 * 60 * 60 * 1000 },
      { id: 2, viewedAt: now - 22 * 60 * 60 * 1000 },
      { id: 4, viewedAt: now - 2 * 24 * 60 * 60 * 1000 },
    ]);
  }

  function ensureList() {
    var entries = readRaw();
    if (entries === null) return seedDemo();
    return entries.map(normalizeEntry).filter(Boolean);
  }

  global.RECENT_VIEWS_STORE = {
    key: STORAGE_KEY,
    max: MAX,
    getAll: function () {
      return ensureList();
    },
    track: function (id) {
      id = Number(id);
      if (!id) return ensureList();
      var entries = readRaw();
      if (entries === null) entries = seedDemo();
      else entries = entries.map(normalizeEntry).filter(Boolean);
      entries = entries.filter(function (e) {
        return e.id !== id;
      });
      entries.unshift({ id: id, viewedAt: Date.now() });
      return write(entries);
    },
    remove: function (id) {
      id = Number(id);
      return write(
        ensureList().filter(function (e) {
          return e.id !== id;
        })
      );
    },
    clear: function () {
      return write([]);
    },
  };
})(window);
