#include <bits/stdc++.h>

using namespace std;

#define ll long long
#define ld long double

#define ar array
#define vt vector

#define vi vt<int>
#define vc vt<char>
#define vd vt<double>
#define vs vt<string>
#define vll vt<ll>
#define vld vt<ld>
#define vpi vt<pi>

#define pi pair<int, int>
#define pl pair<ll, ll>
#define pd pair<ld, ld>

#define FOR(i, a, b) for (int i = (a); i < (b); i++)
#define FORN(i, n) FOR(i, 0, n)
#define DFORN(i, n) for (int i = n; i >= 0; i--)

#define sz(x) (int)(x).size()
#define all(x) (x).begin(), (x).end()
#define allr(x) (x).rbegin(), (x).rend()

template <class _, class __> bool setmin(_ &a, const __ &b) {
  return b < a ? a = b, 1 : 0;
}
template <class _, class __> bool setmax(_ &a, const __ &b) {
  return a < b ? a = b, 1 : 0;
}

template <class T> void rd(T &t) { cin >> t; }

template <class T> void rd(vector<T> &v) {
  for (T &el : v)
    rd(el);
}

template <class T, class H> void rd(vector<pair<T, H>> &v) {
  for (pair<T, H> &el : v)
    rd(el.first, el.second);
}

template <class H, class... T> void rd(H &h, T &...t) {
  rd(h);
  rd(t...);
}

template <class T, size_t sz> void rd(array<T, sz> &a) { // ugh
  FORN(i, sz) rd(a[i]);
}

void dbg(const char *fmt, char end = '\0') { fprintf(stderr, fmt); }

template <class T> void dbg(const char *fmt, const T &t) {
  fprintf(stderr, fmt, t);
}

template <class T> void dbg(const T &t) { cerr << t; }

template <class T, class H> void dbg(const pair<T, H> &th) {
  cerr << "(" << th.first << ", " << th.second << ")";
}

template <class T> void dbg(const vector<T> &a) {
  cerr << "[";

  for (auto it = begin(a); it != end(a); ++it) {
    if (!is_arithmetic<decltype(*it)>()) {
      cerr << ", " + 2 * (it == begin(a));
      dbg(*it);
    } else
      dbg(*it);
  }
  cerr << "]";
}

#define mp make_pair
#define dq deque
#define pb push_back
#define pf pop_front
#define st first
#define nd second

#define INF 0x3fffffff
#define inf ~0x3fffffff

const char nl = '\n';
const int MOD = (int)1e9 + 7;
const int mxn = 100;

#define pterr(...)                                                             \
  dbg("[%s: ", #__VA_ARGS__);                                                  \
  dbg(__VA_ARGS__);                                                            \
  dbg("]\n")

// https://www.hackerrank.com/challenges/new-year-chaos/

void solve() {

  int n;
  cin >> n;
  vi orig(n + 1);

  // Uso indexado con base 1 porque math is hard
  for (int i = 1; i <= n; ++i) {
    cin >> orig[i];
  }

  int ans = 0;

  // Reacomodo la fila para poner a cada uno en la posición original
  // y cuento la cantidad de veces que cada uno se movió
  for (int i = n; i > 1; --i) {
    // Busco la posicion del muñeco 'i'
    int j = i;
    for (; orig[j] != i; --j)
      ;

    // Si el muñeco se adelanto mas de dos lugares es demasiado caotico
    if (i - j >= 3) {
      cout << "Too chaotic\n";
      return;
    }

    // Acomodo el muñeco en la posición original
    for (j; j != i; ++j) {
      swap(orig[j], orig[j + 1]);
      ++ans;
    }
  }
  cout << ans << endl;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cerr.tie(0);
  using us = std::chrono::microseconds;

  int t;
  cin >> t;

  for (int i = 1; i <= t; i++) {
    auto start = std::chrono::high_resolution_clock::now();
    solve();
    auto end = std::chrono::high_resolution_clock::now();
    ld dur = std::chrono::duration_cast<us>(end - start).count() / 1000.0;
    dbg("after %4.1LF ms\n", dur);
  }

  return 0;
}