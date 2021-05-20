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

template <class T> void read(T &t) { cin >> t; }

template <class T> void read(vector<T> &v) {
  for (T &el : v)
    read(el);
}

template <class T, class H> void read(vector<pair<T, H>> &v) {
  for (pair<T, H> &el : v)
    read(el.first, el.second);
}

template <class H, class... T> void read(H &h, T &...t) {
  read(h);
  read(t...);
}

template <class T, size_t sz> void read(array<T, sz> &a) { // ugh
  FORN(i, sz) read(a[i]);
}

void dbg(const char *fmt, char end = '\0') {
#ifndef LOCAL
  return;
#endif
  fprintf(stderr, fmt);
}

template <class T> void dbg(const char *fmt, const T &t) {
#ifndef LOCAL
  return;
#endif
  fprintf(stderr, fmt, t);
}

template <class T> void dbg(const T &t) {
#ifndef LOCAL
  return;
#endif
  cerr << t;
}

template <class T, class H> void dbg(const pair<T, H> &th) {
#ifndef LOCAL
  return;
#endif
  cerr << "(" << th.first << ", " << th.second << ")";
}

template <class T> void dbg(const vector<T> &a) {
#ifndef LOCAL
  return;
#endif
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

void solve() {
  int n, k;
  read(n, k);
  vi a(n);
  read(a);
  sort(all(a));
  int ans = 0;
  for (int i = 0; i < n; ++i) {
    k -= a[i];
    if (k >= 0)
      ans++;
    else
      break;
  }
  cout << ans << endl;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cerr.tie(0);
  solve();

  return 0;
}