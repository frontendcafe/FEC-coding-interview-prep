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
    cin >> el;
}
template <class T, class H> void rd(vector<pair<T, H>> &v) {
  for (pair<T, H> &p : v)
    cin >> p.first >> p.second;
}

template <class H, class... T> void rd(H &h, T &...t) {
  rd(h);
  rd(t...);
}

#define mp make_pair
#define dq deque
#define pb push_back
#define pf pop_front
#define st first
#define nd second

#define INF 0x3fffffff
#define inf ~0x3fffffff

#define dbg(...)                                                               \
  do {                                                                         \
    if (DEBUG)                                                                 \
      fprintf(stderr, __VA_ARGS__);                                            \
  } while (0)
#define dbgnl                                                                  \
  do {                                                                         \
    if (DEBUG)                                                                 \
      dbg("\n");                                                               \
  } while (0)

#define DEBUG 1

const char nl = '\n';
const int MOD = (int)1e9 + 7;
const int mxn = 1e7 + 2;

// https://www.hackerrank.com/challenges/crush/
// holagus#9950 @discord

void solve() {
  int n, m;
  rd(n, m);

  // Inicialmente, el arreglo está vacío.
  // En vez de actualizar todos los valores del intervalo con cada operación,
  // podemos actualizar solamente los extremos del intervalo.

  // Una vez aplicadas todas las operaciones, acumulo los valores y mantengo
  // persistencia del valor máximo. En este ejemplo mantengo los valores en una
  // estructura map, tiene menor complejidad espacial que un array pero creo que
  // es mas lenta que usar un array.

  map<int, int> a;
  for (int i = 0; i < m; ++i) {
    // lower bound, upper bound, value
    int lb, ub, val;
    rd(lb, ub, val);
    a[lb] += val;
    a[ub + 1] -= val;
  }

  ll ans = 0, sum = 0;

  // Para cada elemento en el mapa...
  for (auto &el : a) {
    sum += el.second;
    ans = max(ans, sum);
  }

  cout << ans << endl;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  solve();

  return 0;
}
