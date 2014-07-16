#include<iostream>
// name spaceを確保する
using namespace std;
//メイン ここから実行される!
int main(){
//こんちは
  cout << "Hello, World!" << endl;
//変数 x
  int x;
//cinが入力
  cin >> x;
/*一足す
  x += 1 でも良い(自己代入)
*/
  x ++;
  cout << x << endl;
  cout << "こんちは\n";
  cout << "Hello\x61world!\n";
  cout << 0xE;

  return 0; 

}
