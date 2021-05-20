#include <iostream>
#include <string>
#include <map>

using namespace std;

int main(){
    int n, m;
    map<string, int> have;
    cin >> m >> n;

    for (int i = 0; i < m; ++i){
        string s;   //words i have
        cin >> s;
        have[s]++;
    }

    bool good = true;
    for (int i = 0; i < n && good; ++i){
        string s;
        cin >> s;
        if(--have[s] < 0)
            good = false;
    }

    cout << (good ? "Yes" : "No") << '\n';

    return 0;
}
