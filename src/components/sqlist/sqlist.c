#include <webassembly.h>

extern print(char* message);

int test (int* arr) {
  arr = malloc(sizeof(int));
  arr[0] = 10;
  print('a');
  console_log("%i", arr[0]);
  return arr[0];
}

export int add(int a, int b) {
  int* arr;
   
  return test(arr);
}
