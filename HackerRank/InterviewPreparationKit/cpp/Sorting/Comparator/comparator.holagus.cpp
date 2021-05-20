#include <algorithm>
#include <cmath>
#include <cstdio>
#include <iostream>
#include <vector>

using namespace std;

struct Player {
  int score;
  string name;
};

/*To do this, you must create a Checker class that implements the Comparator
 * interface, then write an int compare(Player a, Player b) method implementing
 * the Comparator.compare(T o1, T o2) method. In short, when sorting in
 * ascending order, a comparator function returns  if ,  if , and  if .
 */

class Checker {
public:
  static int comparator(const Player &a, const Player &b) {

    if (a.score == b.score) {
      if (a.name > b.name) {
        return -1;
      } else
        return 1;
    }

    if (a.score > b.score) {
      return 1;
    } else
      return -1;
  };
};

bool compare(Player a, Player b) {
  if (Checker::comparator(a, b) == -1)
    return false;
  return true;
}

int main() {
  int n;
  cin >> n;
  vector<Player> players;
  string name;
  int score;
  for (int i = 0; i < n; i++) {
    cin >> name >> score;
    Player player;
    player.name = name, player.score = score;
    players.push_back(player);
  }
  sort(players.begin(), players.end(), compare);
  for (int i = 0; i < players.size(); i++) {
    cout << players[i].name << " " << players[i].score << endl;
  }
  return 0;
}