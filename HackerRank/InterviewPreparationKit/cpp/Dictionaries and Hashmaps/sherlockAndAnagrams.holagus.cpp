#include <array>
#include <iostream>
#include <map>
#include <string>
#include <vector>
#include <cassert>

using namespace std;
typedef array<int, 26> lv;  // array de 26 ints para contar ocurrencia de cada letra

void tc() {
  string s;
  cin >> s;
  int n = s.length();
  
  int ans = 0;
  map<lv, int> taken;
  vector<lv> prefix(n + 1);

  for (auto &c : s)
    c -= 'a';

  // prefix[0][i] = 0 para todo i [0, 26)
  for (int i = 1; i <= n; ++i) {
    auto c = s[i-1];
    prefix[i][c]++;
    for (int j = 0; j < 26 && i; ++j) {
      prefix[i][j] += prefix[i - 1][j];
    }
  }

  // testea que dos arrays lv sean iguales
  auto test = [](lv a, lv b) -> bool {
    assert(a.size() == b.size());
    for (int i = 0; i < a.size(); ++i)
      if (a[i] != b[i])
        return 0;
    return 1;
  };
  
  // resta dos arrays lv
  auto sub = [](lv a, lv b) -> lv { 
    lv c;
    for (int i = 0; i < a.size(); ++i) 
      c[i] = a[i] - b[i];
    return c;
  };

  for (int i = 0; i <= n; ++i)          // indice izq
  for (int l = 1; l <= n; ++l)          // span
  for (int j = i + 1; j + l <= n; ++j){ // indice der
    // printf("%d %d -> %d %d\n", i, i + l, j, j + l);
    auto w1 = sub(prefix[i+l], prefix[i]);
    auto w2 = sub(prefix[j+l], prefix[j]);
    if(test(w1, w2))
      taken[w1]++;
  }

  for(auto [k, v] : taken){
    ans += v; // cuento ocurrencias de cada anagrama
    for (int i = 0; i < 26; ++i){ // debug
      if(k[i]) cerr << (char)(i + 'a');
    }
    cerr << " " << v << endl;
  }

  cout << ans << endl;

}

int main() {
  int n;
  cin >> n;
  while (n--) tc();
  return 0;
}
