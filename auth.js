// ════════════════════════════════════════════════════════════════════════════
//  auth.js — shared authentication for ChessPractice (Supabase)
//  Include AFTER the Supabase CDN script and supabase-config.js, e.g.:
//    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//    <script src="supabase-config.js"></script>
//    <script src="auth.js"></script>
//  Auto-injects a login/account widget into the page's <nav>, and exposes a
//  global  window.ChessAuth  API used by login.html and future features.
// ════════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  var URL = window.SUPABASE_URL || '';
  var KEY = window.SUPABASE_ANON_KEY || '';
  var configured = !!URL && !!KEY &&
      URL.indexOf('YOUR-PROJECT') === -1 && KEY.indexOf('YOUR-ANON') === -1;

  var client = null;
  if (configured && window.supabase && typeof window.supabase.createClient === 'function') {
    client = window.supabase.createClient(URL, KEY, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  function displayName(user) {
    if (!user) return '';
    var m = user.user_metadata || {};
    return m.username || m.full_name || (user.email ? user.email.split('@')[0] : 'Account');
  }

  function injectStyles() {
    if (document.getElementById('chessauth-styles')) return;
    var css = ''
      + '.auth-slot{margin-left:auto;display:flex;align-items:center;gap:0.5rem;position:relative;font-size:0.9rem;}'
      + '.auth-slot a.auth-link{color:#81b64c;text-decoration:none;border:1px solid #81b64c;padding:0.3rem 0.8rem;border-radius:6px;font-weight:600;transition:background .15s,color .15s;}'
      + '.auth-slot a.auth-link:hover{background:#81b64c;color:#111;}'
      + '.auth-user{display:flex;align-items:center;gap:0.5rem;cursor:pointer;color:#e0e0e0;background:#2e2e2e;border:1px solid #3a3a3a;border-radius:6px;padding:0.3rem 0.7rem;}'
      + '.auth-user:hover{border-color:#81b64c;}'
      + '.auth-user .avatar{width:22px;height:22px;border-radius:50%;background:#81b64c;color:#111;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;}'
      + '.auth-menu{position:absolute;top:115%;right:0;background:#262626;border:1px solid #3a3a3a;border-radius:8px;padding:0.4rem;min-width:150px;box-shadow:0 8px 24px rgba(0,0,0,.5);display:none;z-index:500;}'
      + '.auth-menu.open{display:block;}'
      + '.auth-menu .mi{display:block;width:100%;text-align:left;background:none;border:none;color:#e0e0e0;padding:0.5rem 0.6rem;border-radius:6px;cursor:pointer;font-size:0.88rem;text-decoration:none;}'
      + '.auth-menu .mi:hover{background:#2e2e2e;}'
      + '.auth-menu .mi.danger:hover{background:#3a2020;color:#f0a0a0;}'
      + '.auth-menu .mi-label{padding:0.4rem 0.6rem;color:#999;font-size:0.75rem;border-bottom:1px solid #3a3a3a;margin-bottom:0.3rem;}';
    var s = document.createElement('style');
    s.id = 'chessauth-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  function ensureSlot() {
    var nav = document.querySelector('nav');
    if (!nav) return null;
    var slot = nav.querySelector('.auth-slot');
    if (!slot) {
      slot = document.createElement('div');
      slot.className = 'auth-slot';
      nav.appendChild(slot);
    }
    return slot;
  }

  function render(user) {
    injectStyles();
    var slot = ensureSlot();
    if (!slot) return;

    if (!configured) {
      slot.innerHTML = '<a class="auth-link" href="login.html" title="Login needs Supabase setup">Set up login</a>';
      return;
    }
    if (!user) {
      slot.innerHTML = '<a class="auth-link" href="login.html">Log In</a>';
      return;
    }

    var name = displayName(user);
    var initial = (name[0] || 'U').toUpperCase();
    slot.innerHTML =
      '<div class="auth-user" id="authUserBtn">' +
        '<span class="avatar">' + initial + '</span>' +
        '<span>' + escapeHtml(name) + '</span>' +
        '<span style="opacity:.6">▾</span>' +
      '</div>' +
      '<div class="auth-menu" id="authMenu">' +
        '<div class="mi-label">' + escapeHtml(user.email || name) + '</div>' +
        '<a class="mi" href="puzzles.html">My Puzzles</a>' +
        '<button class="mi danger" id="authLogout">Log out</button>' +
      '</div>';

    var btn = document.getElementById('authUserBtn');
    var menu = document.getElementById('authMenu');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function () { menu.classList.remove('open'); });
    document.getElementById('authLogout').addEventListener('click', function () {
      ChessAuth.signOut();
    });
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }

  // ── Public API ───────────────────────────────────────────────────────────
  var currentUser = null;

  var ChessAuth = {
    client: client,
    configured: configured,

    async getUser() {
      if (!client) return null;
      var res = await client.auth.getUser();
      return (res && res.data) ? res.data.user : null;
    },

    async signUp(email, password, username) {
      if (!client) return { error: { message: 'Supabase is not configured yet.' } };
      return await client.auth.signUp({
        email: email,
        password: password,
        options: { data: { username: username || (email || '').split('@')[0] } }
      });
    },

    async signIn(email, password) {
      if (!client) return { error: { message: 'Supabase is not configured yet.' } };
      return await client.auth.signInWithPassword({ email: email, password: password });
    },

    async signInWithGoogle(nextPage) {
      if (!client) return { error: { message: 'Supabase is not configured yet.' } };
      var base = window.location.href.replace(/[^/]*$/, '');
      return await client.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: base + (nextPage || 'index.html') }
      });
    },

    async signOut() {
      if (!client) return;
      await client.auth.signOut();
      window.location.reload();
    },

    // Redirect to login if not signed in. Returns the user (or null after redirect).
    async requireAuth() {
      if (!client) { window.location.href = 'login.html'; return null; }
      var user = await this.getUser();
      if (!user) {
        var next = encodeURIComponent(window.location.pathname.split('/').pop() || 'index.html');
        window.location.href = 'login.html?next=' + next;
        return null;
      }
      return user;
    },

    onChange(cb) {
      if (!client) return;
      client.auth.onAuthStateChange(function (_event, session) {
        currentUser = session ? session.user : null;
        cb(currentUser);
      });
    },

    // ── Saved puzzles ────────────────────────────────────────────────────────
    // puzzle = { fen, solution:[uci,...], to_move, title, source_url, rating }
    async savePuzzle(puzzle) {
      if (!client) return { error: { message: 'Login is not set up.' } };
      var user = await this.getUser();
      if (!user) return { error: { message: 'Please log in first.' } };
      return await client.from('saved_puzzles').insert({
        user_id:    user.id,
        fen:        puzzle.fen,
        solution:   puzzle.solution,
        to_move:    puzzle.to_move || null,
        title:      puzzle.title || null,
        source_url: puzzle.source_url || null,
        rating:     puzzle.rating || null
      }).select().single();
    },

    async listPuzzles() {
      if (!client) return { data: [], error: null };
      return await client.from('saved_puzzles')
        .select('*')
        .order('created_at', { ascending: false });
    },

    async deletePuzzle(id) {
      if (!client) return { error: { message: 'Login is not set up.' } };
      return await client.from('saved_puzzles').delete().eq('id', id);
    }
  };
  window.ChessAuth = ChessAuth;

  // ── Boot: render nav, then keep it in sync ─────────────────────────────────
  function boot() {
    render(null);
    if (!client) return;
    client.auth.getSession().then(function (res) {
      currentUser = (res && res.data && res.data.session) ? res.data.session.user : null;
      render(currentUser);
    });
    client.auth.onAuthStateChange(function (_event, session) {
      currentUser = session ? session.user : null;
      render(currentUser);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
