(function (global) {
  var STORAGE_KEY = 'inchbrick-compare-ids';
  var MAX = 3;

  function readRaw() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.map(Number).filter(Boolean) : [];
    } catch (e) {
      return [];
    }
  }

  function write(ids) {
    var unique = [];
    ids.forEach(function (id) {
      id = Number(id);
      if (!id || unique.indexOf(id) !== -1) return;
      unique.push(id);
    });
    var trimmed = unique.slice(0, MAX);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    return trimmed;
  }

  global.COMPARE_STORE = {
    key: STORAGE_KEY,
    max: MAX,
    getIds: function () {
      return readRaw();
    },
    has: function (id) {
      return readRaw().indexOf(Number(id)) !== -1;
    },
    setIds: function (ids) {
      return write(ids || []);
    },
    toggle: function (id) {
      id = Number(id);
      var ids = readRaw();
      if (ids.indexOf(id) !== -1) {
        return write(ids.filter(function (x) {
          return x !== id;
        }));
      }
      if (ids.length >= MAX) return ids;
      ids.push(id);
      return write(ids);
    },
    withPrimary: function (primaryId, extraIds) {
      primaryId = Number(primaryId);
      var ids = [primaryId];
      (extraIds || []).forEach(function (id) {
        id = Number(id);
        if (!id || id === primaryId || ids.indexOf(id) !== -1) return;
        if (ids.length >= MAX) return;
        ids.push(id);
      });
      return write(ids);
    },
    clear: function () {
      return write([]);
    },
  };
})(window);
